// src/module.ts
import { join } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { defineNuxtModule, createResolver, addDevServerHandler, addLayout, addImportsDir, addComponentsDir } from '@nuxt/kit'
import { globby } from 'globby'
import { watch } from 'chokidar'
import { eventHandler } from 'h3'
import type { EventData, PropData } from './extrector'
import { extractComponentData, generateEventsTable, generatePropsTable } from './extrector'

export interface ComponentsBookOptions {
  /**
   * Папка, в которой ищем .md-файлы
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

    nuxt.options.runtimeConfig.componentsComponentsBookConfig = {
      rootDir: nuxt.options.rootDir,
    }

    const resolver = createResolver(import.meta.url)
    const srcDir = nuxt.options.srcDir
    const { componentsDir } = options

    // Полный путь к папке, где ищем .md
    const fullComponentsDir = resolver.resolve(srcDir, componentsDir!)

    addLayout({
      src: resolver.resolve('./runtime/components/ComponentsBookContainer.vue'),
      filename: `componentsbook/layout.vue`,
      write: true,
    }, 'componentsbook-layout')

    // ======================================================
    // 1. Сканируем Markdown-файлы => строим маршруты
    // ======================================================
    const storyFiles: string[] = await globby('**/*.stories.vue', {
      cwd: fullComponentsDir,
      absolute: true,
    })

    async function generateVueForStory(filePath: string) {
      const relativePath = filePath.substring(fullComponentsDir.length + 1).replace(/\.stories\.vue$/, '')
      const importPath = `@/${componentsDir}/${relativePath}.stories.vue`

      if (!existsSync(join(__dirname, '.cache'))) {
        mkdirSync(join(__dirname, '.cache'))
      }

      const vueFilePath = join(__dirname, '.cache', `${relativePath.replace(/\//g, '_')}.vue`)

      const pagePath = resolver.resolve('./runtime/components/ComponentsBookPage.vue')
      let template = readFileSync(pagePath, 'utf-8').replace('${importPath}', importPath)

      let componentsData: { props: PropData[], events: EventData[] } = { props: [], events: [] }
      const componentPath = join(fullComponentsDir, `${relativePath}.vue`)
      if (existsSync(componentPath)) {
        componentsData = await extractComponentData(componentPath)

        const fileContent = readFileSync(componentPath, 'utf-8')
        const escapedContent = fileContent
          .replace(/\\/g, '\\\\') // Экранируем обратные слэши
          .replace(/`/g, '\\`') // Экранируем обратные кавычки
          .replace(/\$/g, '\\$') // Экранируем знак доллара (для `${}`)
          .replace(/<\/script>/g, '<\\/script>') // Защита от закрытия тега <script>
          .replace(/\n/g, '\\n') // Переводы строк
          .replace(/\r/g, '\\r') // Возвраты каретки
        template = template.replace('${sourceCode}', `\`${escapedContent}\``)
        template = template.replace('${showSource}', 'true')
      }
      else {
        template = template.replace('${showSource}', 'false')
        template = template.replace('${sourceCode}', '')
      }

      if (componentsData.props.length > 0) {
        const propsTable = generatePropsTable(componentsData.props)
        template = template.replace('${propsTable}', propsTable)
      }
      else {
        template = template.replace('${propsTable}', '')
      }

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

    for (const filePath of storyFiles) {
      await generateVueForStory(filePath)
    }

    // ======================================================
    // 2️⃣ Добавляем маршруты для сгенерированных компонентов
    // ======================================================
    nuxt.hook('pages:extend', (pages) => {
      for (const filePath of storyFiles) {
        const relativePath = filePath.substring(fullComponentsDir.length + 1).replace(/\.stories\.vue$/, '')
        const routePath = `/componentsbook/${relativePath}`
        const vueFile = join(__dirname, '.cache', `${relativePath.replace(/\//g, '_')}.vue`)

        pages.push({
          name: `componentsbook-${relativePath.replace(/\//g, '-')}`,
          path: routePath,
          file: vueFile,
          meta: {
            layout: `componentsbook-layout`,
          },
        })
      }

      const containerComponent = resolver.resolve('./runtime/components/ComponentsBookList.vue')
      pages.push({
        name: 'componentsbook-list',
        path: '/componentsbook',
        file: containerComponent,
        meta: {
          disableDevTools: true,
        },
      })
    })

    // ======================================================
    // 3. Наблюдение за изменениями (chokidar)
    // ======================================================
    if (nuxt.options.dev) {
      const watcher = watch('**/*.stories.vue', { cwd: fullComponentsDir, ignoreInitial: true })

      watcher.on('add', async (file) => {
        console.log(`[componentsbook] new file: ${file}`)

        const newFullPath = join(fullComponentsDir, file)
        await generateVueForStory(newFullPath)
      })

      watcher.on('unlink', (file) => {
        console.log(`[componentsbook] file remove: ${file}`)
        const relativePath = file.substring(fullComponentsDir.length + 1).replace(/\.stories\.vue$/, '')
        const vueFile = join(__dirname, '.cache', `${relativePath.replace(/\//g, '_')}.vue`)
        if (existsSync(vueFile)) {
          unlinkSync(vueFile)
        }
      })

      nuxt.hook('close', async () => {
        await watcher.close()
      })
    }

    addImportsDir(resolver.resolve('./runtime/composables'))

    addComponentsDir({
      path: resolver.resolve('./runtime/components_client'),
      pathPrefix: false,
      extensions: ['vue'],
    })

    // ======================================================
    // 4. DevTools-вкладка с iframe
    // ======================================================
    // Мы сделаем дев-серверную страницу /__componentsbook_devtools__/,
    // которая будет отображаться в iframe во вкладке DevTools.
    // Потом внутри этой страницы используем JS, чтобы fetch'ить список .md.
    addDevServerHandler({
      route: '/__componentsbook_devtools__',
      handler: eventHandler((event) => {
        const { res } = event.node
        const htmlPath = resolver.resolve('./runtime/devtools/index.html')
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(htmlPath, 'utf-8'))
      }),
    })

    // === Пример: отдаём JSON /__componentsbook_devtools_api__/api/files
    addDevServerHandler({
      route: '/__componentsbook_devtools_api__/api/files',
      handler: eventHandler(async (event) => {
        const { res } = event.node

        const storyFiles = await globby('**/*.stories.vue', { cwd: fullComponentsDir })
        const data = {
          files: storyFiles,
        }
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(JSON.stringify(data))
      }),
    })

    // Регистрируем вкладку DevTools
    nuxt.hook('devtools:customTabs', (tabs) => {
      tabs.push({
        name: 'components-book-dev',
        title: 'Components book',
        icon: 'mdi:book-open-page-variant',
        // view: iframe
        view: { type: 'iframe', src: '/__componentsbook_devtools__' },
      })
    })
  },
})
