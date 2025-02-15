import { createHash } from 'node:crypto'
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import type {EventData, PropData} from './extrector'

export class PropsCacheManager {
  private readonly cache: Record<string, { hash: string, data: { props: PropData[], events: EventData[] } }>
  private readonly cacheDir: string
  private readonly cacheFile: string

  constructor(cacheDir = '.cache', cacheFile = 'propsCache.json') {
    this.cacheDir = join(__dirname, cacheDir)
    this.cacheFile = join(this.cacheDir, cacheFile)
    this.cache = this.loadCache()
  }

  /**
   * Загружает кэш из файла, если он существует.
   */
  private loadCache(): Record<string, { hash: string, data: { props: PropData[], events: EventData[] } }> {
    if (!existsSync(this.cacheFile)) return {}
    try {
      return JSON.parse(readFileSync(this.cacheFile, 'utf-8'))
    }
    catch {
      return {}
    }
  }

  /**
   * Сохраняет кэш в файл.
   */
  private saveCache() {
    if (!existsSync(this.cacheDir)) mkdirSync(this.cacheDir)
    writeFileSync(this.cacheFile, JSON.stringify(this.cache, null, 2))
  }

  /**
   * Вычисляет хеш файла для проверки изменений.
   */
  getFileHash(filePath: string): string {
    if (!existsSync(filePath)) return ''
    const content = readFileSync(filePath, 'utf-8')
    return createHash('sha256').update(content).digest('hex')
  }

  /**
   * Проверяет, есть ли закэшированные данные для файла и не изменился ли он.
   */
  getCachedProps(filePath: string): { props: PropData[], events: EventData[] } | null {
    const fileHash = this.getFileHash(filePath)
    const cached = this.cache[filePath]

    if (cached && cached.hash === fileHash) {
      return cached.data
    }
    return null
  }

  /**
   * Сохраняет новые данные в кэш.
   */
  setCachedProps(filePath: string, data: { props: PropData[], events: EventData[] }) {
    const fileHash = this.getFileHash(filePath)
    this.cache[filePath] = { hash: fileHash, data }
    this.saveCache()
  }
}
