import type { DefineComponent } from 'vue'
import {
  computed,
  h,
  unref,
  isRef,
  type VNode,
  type ExtractPropTypes,
} from '#imports'

// Пропы "расширенные" на случай, если хотите подхватить реальные пропы
// Если нет — можете оставить <P = any> и убрать ExtractPropTypes
type GeneratorProps<P> = Partial<P> & {
  'v-model'?: unknown
}

/**
 * useCodeGenerator
 *
 * - component: ожидаем DefineComponent, чтобы не было просто any
 * - props: словарь пропов, где можно передавать рефы
 * - componentNameForSnippet: опциональное имя (если не задано, берём .name или 'UnnamedComponent')
 *
 * ВАЖНО: Собираем propLines прямо внутри computed, чтобы они были реактивны.
 */
export function useCodeGenerator<
  P = ExtractPropTypes<DefineComponent['props']>,
>(
  component: unknown, // <-- теперь явно DefineComponent
  props: GeneratorProps<P>,
  componentNameForSnippet?: string,
) {
  // snippetName — берем из componentNameForSnippet ИЛИ component.name ИЛИ "UnnamedComponent"
  const snippetName = computed(() => {
    return componentNameForSnippet
      ?? (component as DefineComponent).name
      ?? 'UnnamedComponent'
  })

  /**
   * generatedCode — внутри computed собираем строки пропов.
   * Так при каждом изменении (например, props.someRef.value меняется),
   * vue «увидит» зависимость и пересчитает значение computed.
   */
  const generatedCode = computed(() => {
    const lines: string[] = []

    for (const [key, rawValue] of Object.entries(props)) {
      if (key === 'v-model') {
        // Отдельная логика для v-model
        if (isRef(rawValue)) {
          // В генерируемом коде покажем текущее значение
          lines.push(`v-model="${rawValue.value}"`)
        }
        else {
          lines.push(`v-model="${rawValue}"`)
        }
      }
      else {
        // Обычный проп
        const unwrapped = unref(rawValue)
        if (typeof unwrapped === 'boolean' || typeof unwrapped === 'number') {
          lines.push(`:${key}="${unwrapped}"`)
        }
        else {
          // строки / массивы / объекты
          // для сложных типов можно сделать JSON.stringify или дополнительную обработку
          lines.push(`:${key}="'${unwrapped}'"`)
        }
      }
    }

    return `<${snippetName.value}
  ${lines.join('\n  ')}
/>`
  })

  /**
   * renderedComponent — тоже внутри computed, чтобы при изменении рефов
   * пересоздавать VNode с актуальными значениями.
   */
  const renderedComponent = computed<VNode>(() => {
    const dynamicProps: Record<string, unknown> = {}

    for (const [key, rawValue] of Object.entries(props)) {
      if (key === 'v-model') {
        // Создаём пару modelValue + onUpdate:modelValue
        if (isRef(rawValue)) {
          dynamicProps.modelValue = rawValue.value
          dynamicProps['onUpdate:modelValue'] = (val: unknown) => {
            rawValue.value = val
          }
        }
        else {
          dynamicProps.modelValue = rawValue
        }
      }
      else {
        // Если это ref — берём .value
        dynamicProps[key] = isRef(rawValue) ? rawValue.value : rawValue
      }
    }

    // Возвращаем h() — Vue будет рендерить <component :is="...">
    return h(component as DefineComponent, dynamicProps)
  })

  /**
   * copyToClipboard — функция копирования сгенерированного кода
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode.value)
      .then(() => alert('Code copied!'))
      .catch(err => console.error('Failed to copy text:', err))
  }

  return {
    renderedComponent,
    generatedCode,
    copyToClipboard,
  }
}
