import { join, relative, dirname, basename } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import {
  defineNuxtModule,
  createResolver,
  addDevServerHandler,
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

    // Собираем все слои. Если layer.config.name не задан, берём basename(rootDir) или "layer_i"
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

    // сохраняем в runtimeConfig
    nuxt.options.runtimeConfig.componentsComponentsBookConfig = {
      layers,
      componentsDir: componentsSubDir,
    }

    // Папка кэша
    const CACHE_DIR = join(__dirname, '.cache')
    if (!existsSync(CACHE_DIR)) {
      mkdirSync(CACHE_DIR)
    }

    // ================================
    // 1. Ищем все .stories.vue
    // ================================
    interface StoryFile {
      layerName: string
      absolutePath: string
      relativePath: string
    }
    const storyFiles: StoryFile[] = []

    // собираем *.stories.vue из каждого слоя
    for (const { name: layerName, rootDir } of layers) {
      const componentsRoot = join(rootDir, componentsSubDir)
      const found = await globby('**/*.stories.vue', {
        cwd: componentsRoot,
        absolute: true,
      })
      for (const abs of found) {
        const rel = abs.substring(componentsRoot.length + 1)
        storyFiles.push({
          layerName,
          absolutePath: abs,
          relativePath: rel,
        })
      }
    }

    // удаляем дубликаты (если вдруг)
    const uniqueMap = new Map<string, StoryFile>()
    for (const s of storyFiles) {
      const key = `${s.layerName}:${s.relativePath}`
      uniqueMap.set(key, s)
    }
    const finalStories = Array.from(uniqueMap.values())

    // ================================
    // 2. Генерируем временные файлы
    // ================================
    async function generateVueForStory(story: StoryFile) {
      const { layerName, absolutePath, relativePath } = story
      // уберём ".stories.vue"
      const noExt = relativePath.replace(/\.stories\.vue$/, '')

      // Имя выходного файла
      const vueFilePath = join(
        CACHE_DIR,
        `${layerName}_${noExt.replace(/\//g, '_')}.vue`,
      )

      // Шаблон
      const pagePath = resolver.resolve('./runtime/devtools/ComponentsBookPage.vue')
      let template = readFileSync(pagePath, 'utf-8')

      // Делам относительный импорт, чтобы избежать alias
      const relImport = relative(dirname(vueFilePath), absolutePath).replace(/\\/g, '/')
      let importPath = relImport
      if (!importPath.startsWith('.')) {
        importPath = './' + importPath
      }
      template = template.replace('${importPath}', importPath)

      // Если есть основной компонент (без .stories.vue)
      const rootDirOfLayer = join(
        layers.find(l => l.name === layerName)!.rootDir,
        componentsSubDir,
      )
      const mainAbsolute = join(rootDirOfLayer, noExt + '.vue')

      let componentsData: { props: PropData[], events: EventData[] } = { props: [], events: [] }
      if (existsSync(mainAbsolute)) {
        // extract props, events
        componentsData = await extractComponentData(mainAbsolute)

        // подставляем исходный код
        const fileContent = readFileSync(mainAbsolute, 'utf-8')
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

      // propsTable
      if (componentsData.props.length > 0) {
        const propsTable = generatePropsTable(componentsData.props)
        template = template.replace('${propsTable}', propsTable)
      }
      else {
        template = template.replace('${propsTable}', '')
      }

      // eventsTable
      if (componentsData.events.length > 0) {
        const eventsTable = generateEventsTable(componentsData.events)
        template = template.replace('${eventsTable}', eventsTable)
      }
      else {
        template = template.replace('${eventsTable}', '')
      }

      writeFileSync(vueFilePath, template)
    }

    // Генерируем для всех
    for (const story of finalStories) {
      await generateVueForStory(story)
    }

    // ================================
    // 3. Регистрируем маршрут devtools
    // ================================
    // Сделаем одну страницу /__componentsbook_devtools__/ (показываем её во вкладке)
    // Внутри неё – у нас уже не iframe, а локальная навигация

    addDevServerHandler({
      route: join(nuxt.options.app.baseURL, '/__componentsbook_devtools__'),
      handler: eventHandler((event) => {
        const { res } = event.node
        const htmlPath = resolver.resolve('./runtime/devtools/index.html')
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(htmlPath, 'utf-8'))
      }),
    })

    // ================================
    // 4. Генерируем маршруты (в нашем Nuxt-приложении)
    // ================================
    // Внутри самого проекта мы всё ещё можем создать /componentsbook/... страницы,
    // но если хотим всё в DevTools, можно не делать публичные роуты.
    // Для демонстрации пусть остаётся:

    nuxt.hook('pages:extend', (pages) => {
      for (const story of finalStories) {
        const { layerName, relativePath } = story
        const noExt = relativePath.replace(/\.stories\.vue$/, '')

        // /componentsbook/layerName/...
        const routePath = `/componentsbook/${layerName}/${noExt}`
        const file = join(CACHE_DIR, `${layerName}_${noExt.replace(/\//g, '_')}.vue`)

        pages.push({
          name: `componentsbook-${layerName}-${noExt.replace(/\//g, '-')}`,
          path: routePath,
          file,
          meta: {
            layout: 'componentsbook-layout',
          },
        })

        addPrerenderRoutes(routePath)
      }

      // добавим маршрут /componentsbook (список)
      pages.push({
        name: 'componentsbook-list',
        path: '/componentsbook',
        file: resolver.resolve('./runtime/devtools/DevToolsRoot.vue'),
        meta: {
          disableDevTools: true,
          layout: 'componentsbook-layout',
        },
      })
      addPrerenderRoutes('/componentsbook')
    })

    // ================================
    // 5. Watch (chokidar)
    // ================================
    if (nuxt.options.dev) {
      const watchers: FSWatcher[] = []
      for (const { name: layerName, rootDir } of layers) {
        const componentsRoot = join(rootDir, componentsSubDir)
        const watcher = watch('**/*.stories.vue', {
          cwd: componentsRoot,
          ignoreInitial: true,
        })

        watcher.on('add', async (file) => {
          const abs = join(componentsRoot, file)
          const story: StoryFile = { layerName, absolutePath: abs, relativePath: file }
          await generateVueForStory(story)
        })

        watcher.on('unlink', (file) => {
          const noExt = file.replace(/\.stories\.vue$/, '')
          const vueFile = join(CACHE_DIR, `${layerName}_${noExt.replace(/\//g, '_')}.vue`)
          if (existsSync(vueFile)) {
            unlinkSync(vueFile)
          }
        })

        watchers.push(watcher)
      }

      nuxt.hook('close', async () => {
        for (const w of watchers) {
          await w.close()
        }
      })
    }

    // Регистрируем вкладку DevTools, которая показывает наш route
    nuxt.hook('devtools:customTabs', (tabs) => {
      tabs.push({
        name: 'components-book-dev',
        title: 'Components book',
        icon: 'material-symbols:book',
        // Вместо iframe, всё равно DevTools сам откроет route внутрь
        // Но это "верхнеуровневый" iframe, нас просили убрать вложенный iframe
        view: {
          type: 'iframe',
          src: join(nuxt.options.app.baseURL, '/__componentsbook_devtools__'),
        },
      })
    })

    addLayout({
      getContents({ options }) {
        // генерируем файл config.mjs
        const configDir = join(nuxt.options.buildDir, `componentsbook`)
        if (!existsSync(configDir)) {
          mkdirSync(configDir)
        }

        const configFile = join(configDir, `layout.config.mjs`)
        writeFileSync(configFile, `export default ${JSON.stringify(options.files, null, 2)}`)

        // А теперь подставим import в шаблон Vue:
        let layoutTemplate = readFileSync(
          resolver.resolve('./runtime/layouts/ComponentsBookLayout.vue'),
          'utf-8',
        )
        layoutTemplate = layoutTemplate.replace(
          '__REPLACE_IMPORT__',
          `import storyFiles from '#build/componentsbook/layout.config.mjs'`,
        )
        return layoutTemplate
      },
      filename: 'componentsbook/layout.vue',
      write: true,
      options: {
        files: storyFiles,
      },
    }, 'componentsbook-layout')

    addImportsDir(resolver.resolve('./runtime/composables'))
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
      pathPrefix: false,
      extensions: ['vue'],
    })
  },
})
