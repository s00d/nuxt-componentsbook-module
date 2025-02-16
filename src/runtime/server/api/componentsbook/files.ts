import { eventHandler } from 'h3'
import { globby } from 'globby'
import { useRuntimeConfig } from '#imports'

export default eventHandler(async (_event) => {
  const config = useRuntimeConfig()
  const { layers, componentsDir } = config.componentsComponentsBookConfig

  // собираем .stories.vue файлы из всех слоёв с префиксом layerName
  let allFiles: string[] = []

  for (const { name: layerName, rootDir } of layers) {
    const componentsRoot = `${rootDir}/${componentsDir}`
    const found = await globby('**/*.stories.vue', {
      cwd: componentsRoot,
    })
    // found => ["Button/Hello.stories.vue", "Form/Input.stories.vue", ...]
    // Надо дописать в начало layerName => "base/Button/Hello.stories.vue"
    const withPrefix = found.map(f => `${layerName}/${f}`)
    allFiles.push(...withPrefix)
  }

  // убираем дубли (на всякий случай)
  allFiles = Array.from(new Set(allFiles))

  return allFiles
})
