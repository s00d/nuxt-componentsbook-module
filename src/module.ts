// src/module.ts
import { join } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { defineNuxtModule, createResolver, addDevServerHandler, addLayout } from '@nuxt/kit'
import { globby } from 'globby'
import { watch } from 'chokidar'
import { eventHandler } from 'h3'
import type { PropData } from './extrector'
import { extractComponentData, generatePropsTable } from './extrector'

export interface ComponentsBookOptions {
  /**
   * Папка, в которой ищем .md-файлы
   */
  componentsDir?: string
  /**
   * Префикс для роутов
   * @default "/componentsbook"
   */
  routePrefix?: string
}

export default defineNuxtModule<ComponentsBookOptions>({
  meta: {
    name: 'nuxt-componentsbook-module',
    configKey: 'componentsBook',
  },
  defaults: {
    componentsDir: 'components',
    routePrefix: '/componentsbook',
  },
  async setup(options, nuxt) {
    nuxt.options.runtimeConfig.componentsComponentsBookConfig = {
      rootDir: nuxt.options.rootDir,
    }

    const resolver = createResolver(import.meta.url)
    const srcDir = nuxt.options.srcDir
    const { componentsDir, routePrefix } = options

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

    const generatedComponents: string[] = []

    async function generateVueForStory(filePath: string) {
      const relativePath = filePath.substring(fullComponentsDir.length + 1).replace(/\.stories\.vue$/, '')
      const importPath = `@/${componentsDir}/${relativePath}.stories.vue`

      if (!existsSync(join(__dirname, '.cache'))) {
        mkdirSync(join(__dirname, '.cache'))
      }

      const vueFilePath = join(__dirname, '.cache', `${relativePath.replace(/\//g, '_')}.vue`)

      const pagePath = resolver.resolve('./runtime/components/ComponentsBookPage.vue')
      let template = readFileSync(pagePath, 'utf-8').replace('${importPath}', importPath)

      let propsData: PropData[] = []
      const componentPath = join(fullComponentsDir, `${relativePath}.vue`)
      if (existsSync(componentPath)) {
        propsData = await extractComponentData(componentPath)
      }

      if (propsData.length > 0) {
        const propsTable = generatePropsTable(propsData)
        template = template.replace('${propsTable}', propsTable)
      }
      else {
        template = template.replace('${propsTable}', '')
      }

      writeFileSync(vueFilePath, template)

      return vueFilePath
    }

    for (const filePath of storyFiles) {
      const vueFile = await generateVueForStory(filePath)
      generatedComponents.push(vueFile)
    }

    // ======================================================
    // 2️⃣ Добавляем маршруты для сгенерированных компонентов
    // ======================================================
    nuxt.hook('pages:extend', (pages) => {
      for (const filePath of storyFiles) {
        const relativePath = filePath.substring(fullComponentsDir.length + 1).replace(/\.stories\.vue$/, '')
        const routePath = `${routePrefix}/${relativePath}`
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
        console.log(`[componentsbook] Новый файл: ${file}`)
        const newFullPath = join(fullComponentsDir, file)
        const vueFile = await generateVueForStory(newFullPath)
        generatedComponents.push(vueFile)
      })

      watcher.on('unlink', (file) => {
        console.log(`[componentsbook] Файл удалён: ${file}`)
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
