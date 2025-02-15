import { eventHandler } from 'h3'
import { globby } from 'globby'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRuntimeConfig } from '#imports'

export default eventHandler(async (_event) => {
  const config = useRuntimeConfig()
  const { fullComponentsDir } = config.componentsComponentsBookConfig as { [key: string]: string }

  return await globby('**/*.stories.vue', { cwd: fullComponentsDir })
})
