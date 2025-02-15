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

export function generatePropsTable(props: PropData[]): string {
  let table = `
    <h2>🔹 Props</h2>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default Value</th>
          <th>Validator</th>
        </tr>
      </thead>
      <tbody>
  `

  props.forEach((prop) => {
    table += `
      <tr>
        <td><b>${prop.name}</b></td>
        <td>${prop.type ?? 'N/A'}</td>
        <td>${prop.required ? '✅ Yes' : '❌ No'}</td>
        <td>${prop.defaultValue ?? 'N/A'}</td>
        <td>${prop.validator ?? 'None'}</td>
      </tr>
    `
  })

  table += '</tbody></table>'
  return table
}

export function generateEventsTable(events: EventData[]): string {
  let table = `
    <h2>🔹 Events</h2>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
  `

  events.forEach((prop) => {
    table += `
      <tr>
        <td><b>${prop.name}</b></td>
        <td>${prop.description ?? 'N/A'}</td>
      </tr>
    `
  })

  table += '</tbody></table>'
  return table
}

export async function extractComponentData(componentPath: string): Promise<{ props: PropData[], events: EventData[] }> {
  try {
    const cachedProps = propsCacheManager.getCachedProps(componentPath)

    if (cachedProps) {
      // return cachedProps
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

    const extractedData = { props: propsData, events: eventsData }

    propsCacheManager.setCachedProps(componentPath, extractedData)
    return extractedData
  }
  catch (error) {
    console.error(`Ошибка парсинга`, error)
    return { props: [], events: [] }
  }
}
