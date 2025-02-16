import { parse as docgenParse } from 'vue-docgen-api'
import { PropsCacheManager } from './cache'

const propsCacheManager = new PropsCacheManager()

export interface PropData {
  name: string
  type: string
  defaultValue?: string
  required: boolean
  validator?: string
}

export interface EventData {
  name: string
  description: string
}

export interface SlotData {
  name: string
  description?: string
  bindings?: string // или более сложная структура, если нужны пропы скоупа
}

export async function extractComponentData(componentPath: string, cache: boolean): Promise<{ props: PropData[], events: EventData[], slots: SlotData[] }> {
  try {
    if (cache) {
      const cachedProps = propsCacheManager.getCachedProps(componentPath)

      if (cachedProps) {
        return cachedProps
      }
    }

    const doc = await docgenParse(componentPath)
    const propsData = doc.props?.map((prop) => {
      return {
        name: prop.name,
        type: prop.type?.name || 'unknown',
        defaultValue: prop.defaultValue?.value || 'N/A',
        required: prop.required || false,
        validator: Array.isArray(prop.values) ? prop.values.join(' | ') : 'N/A',
      }
    }) ?? []

    const eventsData: EventData[] = doc.events?.map(event => ({
      name: event.name,
      description: event.description || 'No description',
    })) ?? []

    // Новая секция: слоты
    const slotsData: SlotData[] = doc.slots?.map((slot) => {
      // Если нужен доступ к `slot.bindings`, можно склеить их в одну строку:
      let bindings = ''
      if (slot.bindings && Object.keys(slot.bindings).length > 0) {
        // Пример: { props: 'type: string, description: "..."' }
        // Собираем в удобный формат
        bindings = Object.entries(slot.bindings)
          .map(([bindingName, bindingType]) => `${bindingName}: ${bindingType}`)
          .join(', ')
      }

      return {
        name: slot.name,
        description: slot.description || 'No description',
        bindings,
      }
    }) ?? []

    const extractedData = {
      props: propsData,
      events: eventsData,
      slots: slotsData,
    }

    if (cache) {
      propsCacheManager.setCachedProps(componentPath, extractedData)
    }

    return extractedData
  }
  catch (error) {
    console.error(`Ошибка парсинга`, error)
    return { props: [], events: [], slots: [] }
  }
}
