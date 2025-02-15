import { computed, unref } from 'vue'

export function useCodeGenerator(componentName: string, props: Record<string, unknown>) {
  const generatedCode = computed(() => {
    const propsEntries = Object.entries(props)
      .map(([key, value]) => {
        const unwrappedValue = unref(value) // Получаем обычное значение из ref/computed

        if (typeof unwrappedValue === 'boolean') return unwrappedValue ? `:${key}="${unwrappedValue}"` : ''
        if (typeof unwrappedValue === 'number') return `:${key}="${unwrappedValue}"`

        return `:${key}="'${unwrappedValue}'"` // Одинарные кавычки, чтобы избежать двойных
      })
      .filter(Boolean)
      .join('\n  ')

    return `<${componentName}
  ${propsEntries}
/>`
  })

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode.value)
      .then(() => alert('Code copied!'))
      .catch(err => console.error('Failed to copy text:', err))
  }

  return { generatedCode, copyToClipboard }
}
