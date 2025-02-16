import { join, relative, dirname, basename } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import {
  defineNuxtModule,
  createResolver,
  addDevServerHandler,
  addServerHandler,
  addLayout,
  addImportsDir,
  addComponentsDir,
  addPrerenderRoutes,
} from '@nuxt/kit'
import { globby } from 'globby'
import type { FSWatcher } from 'chokidar'
import { watch } from 'chokidar'
import { eventHandler } from 'h3'
import type { EventData, PropData } from './extrector'
import { extractComponentData, generateEventsTable, generatePropsTable } from './extrector'

export interface ComponentsBookOptions {
  /**
   * Папка, в которой ищем .stories.vue
   */
  componentsDir?: string
  disabled?: boolean
}

interface LayerInfo {
  name: string // Префикс, который пойдёт в дерево
  rootDir: string
}

export default defineNuxtModule<ComponentsBookOptions>({
  meta: {
    name: 'nuxt-componentsbook-module',
    configKey: 'componentsBook',
  },
  defaults: {
    componentsDir: 'components',
    disabled: false,
  },
  async setup(options, nuxt) {
    if (options.disabled) {
      return
    }

    const resolver = createResolver(import.meta.url)
    const componentsSubDir = options.componentsDir || 'components'

    // Собираем все слои и даём им осмысленное имя (префикс)
    // Если layer.config.name отсутствует, то подставим layer_{индекс}
    const layers = nuxt.options._layers.map((layer, index) => {
      const layerName = basename(layer.config.rootDir) || `layer_${index}`
      return {
        name: layerName,
        rootDir: layer.config.rootDir,
      }
    })
      // Чем дальше в массиве _layers, тем выше приоритет, но мы хотим начать с «базового»?
      // Если нужно, разворачиваем. Если не нужно — уберите .reverse()
      .reverse()

    // Сохраняем в runtimeConfig, чтобы `files.ts` тоже знал про имена слоёв
    nuxt.options.runtimeConfig.componentsComponentsBookConfig = {
      layers,
      componentsDir: componentsSubDir,
    }

    addLayout({
      src: resolver.resolve('./runtime/components/ComponentsBookContainer.vue'),
      filename: 'componentsbook/layout.vue',
      write: true,
    }, 'componentsbook-layout')

    // Папка для временных .vue
    const CACHE_DIR = join(__dirname, '.cache')
    if (!existsSync(CACHE_DIR)) {
      mkdirSync(CACHE_DIR)
    }

    // Собираем все stories из всех слоёв:
    // будем хранить их как { layerName, filePath } в одном массиве
    interface StoryFile {
      layerName: string
      absolutePath: string
      relativePath: string
    }

    const storyFiles: StoryFile[] = []

    // 1. ищем *.stories.vue по каждому слою
    for (const { name: layerName, rootDir } of layers) {
      const componentsRoot = join(rootDir, componentsSubDir)
      const found = await globby('**/*.stories.vue', {
        cwd: componentsRoot,
        absolute: true,
      })
      for (const absPath of found) {
        // Считаем относительный путь (например, 'Button/ButtonPrimary.stories.vue')
        const rel = absPath.substring(componentsRoot.length + 1)
        storyFiles.push({
          layerName,
          absolutePath: absPath,
          relativePath: rel, // включено "Button/ButtonPrimary.stories.vue"
        })
      }
    }

    // Удалим дубликаты, если вдруг встречаются
    // — Обычно, если есть одинаковые файлы, приоритет будет у «последнего» слоя, но тут как вам нужно
    const uniqueMap = new Map<string, StoryFile>()
    for (const item of storyFiles) {
      // Ключом можно считать комбинацию layerName+relativePath
      const uniqueKey = `${item.layerName}:${item.relativePath}`
      uniqueMap.set(uniqueKey, item)
    }
    const finalStories = Array.from(uniqueMap.values())

    // 2. Генерируем временные .vue для каждой story
    async function generateVueForStory(story: StoryFile) {
      const { layerName, absolutePath, relativePath } = story
      // routePath будет "/componentsbook/layerName/Some/Nested"
      // убираем '.stories.vue' => "Some/Nested"
      const noExt = relativePath.replace(/\.stories\.vue$/, '')

      // Сделаем имя выходного vue-файла (например, layerName_Some_Nested.vue)
      const vueFilePath = join(
        CACHE_DIR,
        `${layerName}_${noExt.replace(/\//g, '_')}.vue`,
      )

      // Шаблон ComponentsBookPage.vue
      const pagePath = resolver.resolve('./runtime/components/ComponentsBookPage.vue')
      let template = readFileSync(pagePath, 'utf-8')

      // Теперь в <script setup> мы будем импортировать story-компонент
      // через относительный путь
      const relativeImport = relative(dirname(vueFilePath), absolutePath).replace(/\\/g, '/')
      let importPath = relativeImport
      if (!importPath.startsWith('.')) {
        importPath = './' + importPath
      }
      template = template.replace('${importPath}', importPath)

      // Если у нас есть компонент (без .stories), пытаемся достать props/events
      const rootDirOfLayer = join(
        layers.find(l => l.name === layerName)!.rootDir,
        componentsSubDir,
      )
      const mainVueAbsolute = join(
        rootDirOfLayer,
        noExt + '.vue',
      )

      let componentsData: { props: PropData[], events: EventData[] } = { props: [], events: [] }

      if (existsSync(mainVueAbsolute)) {
        componentsData = await extractComponentData(mainVueAbsolute)

        // Считываем исходный код, чтобы показать
        const fileContent = readFileSync(mainVueAbsolute, 'utf-8')
        const escapedContent = fileContent
          .replace(/\\/g, '\\\\')
          .replace(/`/g, '\\`')
          .replace(/\$/g, '\\$')
          .replace(/<\/script>/g, '<\\/script>')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')

        template = template.replace('\'${sourceCode}\'', `\`${escapedContent}\``)
        template = template.replace('`${showSource}`', 'true')
      }
      else {
        template = template.replace('`${showSource}`', 'false')
        template = template.replace('\'${sourceCode}\'', '')
      }

      // Подставляем таблицу Props
      if (componentsData.props.length > 0) {
        const propsTable = generatePropsTable(componentsData.props)
        template = template.replace('${propsTable}', propsTable)
      }
      else {
        template = template.replace('${propsTable}', '')
      }

      // Подставляем таблицу Events
      if (componentsData.events.length > 0) {
        const eventsTable = generateEventsTable(componentsData.events)
        template = template.replace('${eventsTable}', eventsTable)
      }
      else {
        template = template.replace('${eventsTable}', '')
      }

      writeFileSync(vueFilePath, template)
      return vueFilePath
    }

    // Генерация временных файлов
    for (const story of finalStories) {
      await generateVueForStory(story)
    }

    // 3. Создаём маршруты типа /componentsbook/{layerName}/{relativePath БЕЗ .stories.vue}
    nuxt.hook('pages:extend', (pages) => {
      for (const story of finalStories) {
        const { layerName, relativePath } = story
        const noExt = relativePath.replace(/\.stories\.vue$/, '')

        // Наш маршрут будет /componentsbook/base/Some/Nested
        // либо /componentsbook/theme/...
        const routePath = `/componentsbook/${layerName}/${noExt}`

        // Имя выходного vue-файла
        const vueFile = join(
          CACHE_DIR,
          `${layerName}_${noExt.replace(/\//g, '_')}.vue`,
        )

        pages.push({
          name: `componentsbook-${layerName}-${noExt.replace(/\//g, '-')}`,
          path: routePath,
          file: vueFile,
          meta: {
            layout: 'componentsbook-layout',
          },
        })

        addPrerenderRoutes(routePath)
      }

      // Страница со списком
      const containerComponent = resolver.resolve('./runtime/components/ComponentsBookList.vue')
      pages.push({
        name: 'componentsbook-list',
        path: '/componentsbook',
        file: containerComponent,
        meta: {
          disableDevTools: true,
        },
      })

      addPrerenderRoutes('/componentsbook')
    })

    // 4. Настраиваем watch (chokidar) в dev-режиме
    if (nuxt.options.dev) {
      const watchers: FSWatcher[] = []

      for (const { name: layerName, rootDir } of layers) {
        const componentsRoot = join(rootDir, componentsSubDir)
        const watcher = watch('**/*.stories.vue', {
          cwd: componentsRoot,
          ignoreInitial: true,
        })

        watcher.on('add', async (file) => {
          console.log(`[componentsbook] new file: ${file} in layer "${layerName}"`)
          const absPath = join(componentsRoot, file)
          const story: StoryFile = {
            layerName,
            absolutePath: absPath,
            relativePath: file,
          }
          await generateVueForStory(story)
        })

        watcher.on('unlink', (file) => {
          console.log(`[componentsbook] file remove: ${file} in layer "${layerName}"`)
          const noExt = file.replace(/\.stories\.vue$/, '')
          const vueFile = join(
            CACHE_DIR,
            `${layerName}_${noExt.replace(/\//g, '_')}.vue`,
          )
          if (existsSync(vueFile)) {
            unlinkSync(vueFile)
          }
        })

        watchers.push(watcher)
      }

      nuxt.hook('close', async () => {
        for (const watcher of watchers) {
          await watcher.close()
        }
      })
    }

    // Подключаем прочие возможности
    addImportsDir(resolver.resolve('./runtime/composables'))

    addComponentsDir({
      path: resolver.resolve('./runtime/components_client'),
      pathPrefix: false,
      extensions: ['vue'],
    })

    // DevTools-вкладка
    addDevServerHandler({
      route: join(nuxt.options.app.baseURL, '/__componentsbook_devtools__'),
      handler: eventHandler((event) => {
        const { res } = event.node
        const htmlPath = resolver.resolve('./runtime/devtools/index.html')
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(htmlPath, 'utf-8'))
      }),
    })

    addServerHandler({
      route: '/__componentsbook_devtools_api__/api/files.json',
      handler: resolver.resolve('./runtime/server/api/componentsbook/files'),
      env: ['prod', 'dev'],
    })

    addPrerenderRoutes('/__componentsbook_devtools_api__/api/files.json')

    // Регистрируем вкладку
    nuxt.hook('devtools:customTabs', (tabs) => {
      tabs.push({
        name: 'components-book-dev',
        title: 'Components book',
        icon: 'mdi:book-open-page-variant',
        view: { type: 'iframe', src: join(nuxt.options.app.baseURL, '/__componentsbook_devtools__') },
      })
    })
  },
})
