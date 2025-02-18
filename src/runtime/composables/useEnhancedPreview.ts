import type {
  Component,
  DefineComponent,
  VNode,
  WatchStopHandle,
  VNodeArrayChildren,
  Ref,
} from 'vue'
import {
  ref,
  computed,
  watch,
  toRefs,
  isRef,
  h,
  onUnmounted,
  useSlots,
  isVNode,
} from 'vue'

interface UseEnhancedPreviewProps {
  title?: string
  name?: string
  component: DefineComponent | string | unknown
  modelValue?: string | number | boolean | Record<string, unknown> | Array<unknown> | null | Ref<unknown>
  props?: Record<string, unknown>
  emits?: string[]
  /**
   * Дополнительные слушатели:
   *   { click: (evt) => void, focus: (evt) => void, ... }
   * или же ключи могут быть уже в формате onSomething:
   *   { onClick: (evt) => void }
   */
  listeners?: Record<string, (...args: unknown[]) => void>
}

/**
 * A helper function to determine a "tag name" for a VNode:
 * - If it's a native HTML element (a string like 'div'), return that.
 * - If it's a component, try to extract name/__name, etc.
 */
function getNodeTag(node: VNode): string {
  if (typeof node.type === 'string') {
    // Native HTML element
    return node.type
  }

  // Otherwise, assume it's a component
  const comp = node.type as DefineComponent
  return comp?.name || comp?.__name || 'AnonymousComponent'
}

/**
 * A more advanced serializer that tries to show nested elements or components recursively.
 */
function serializeVNode(node: VNode, depth = 0): string {
  if (!node) return ''

  // 1) If it's a text node (child is a plain string):
  if (typeof node.children === 'string') {
    return node.children
  }

  // 2) If there's an array of child nodes, we will recurse:
  const childArray = Array.isArray(node.children) ? node.children : []
  const tagName = getNodeTag(node)
  const indent = '  '.repeat(depth)

  // Attempt to build a basic "props" string
  const propsEntries = node.props
    ? Object.entries(node.props)
    : []

  const propsString = propsEntries
    .map(([key, val]) => {
      // We can refine this logic as needed
      if (typeof val === 'string') {
        return ` ${key}="${val}"`
      }
      else if (typeof val === 'number' || typeof val === 'boolean') {
        return ` :${key}="${val}"`
      }
      else if (typeof val === 'function') {
        // Or you might want `[Function]` here instead of the raw .toString()
        return ` :${key}="${val.toString()}"`
      }
      else {
        // Fallback to JSON
        return ` :${key}='${JSON.stringify(val)}'`
      }
    })
    .join('')

  if (childArray.length) {
    // If there are nested children, recurse
    const childrenSerialized = childArray
      .map(child => (isVNode(child) ? serializeVNode(child, depth + 1) : ''))
      .join('')
    return `${indent}<${tagName}${propsString}>${childrenSerialized}</${tagName}>\n`
  }
  else {
    // No children
    return `${indent}<${tagName}${propsString} />\n`
  }
}

/**
 * This function handles arrays of VNodes (the slot VNode array)
 * by mapping over them and serializing each one in turn.
 */
function serializeSlotVNodes(vnodes: VNodeArrayChildren): string {
  return vnodes
    .map(node => (isVNode(node) ? serializeVNode(node) : ''))
    .join('')
}

export function useEnhancedPreview(
  props: UseEnhancedPreviewProps,
  emit: (event: string, ...args: unknown[]) => void,
) {
  const copyButtonText = ref('📋 Copy')
  const isFrozen = ref(false)
  const frozenCode = ref('')

  const mergedProps = toRefs(props)
  const slots = useSlots()

  // Список "разрешённых" Vue-событий (прокидываем через emit)
  const customEmits = computed(() => props.emits || [])
  const emitEvent = (eventName: string, ...args: unknown[]) => {
    if (customEmits.value.includes(eventName)) {
      emit(eventName, ...args)
    }
  }

  // Следим за props (на случай v-model:xxx и т.д.)
  const stopWatcher: WatchStopHandle = watch(
    () => mergedProps.props?.value,
    (newProps) => {
      Object.entries(newProps ?? []).forEach(([key, value]) => {
        // e.g. if key === 'v-model:foo', then event is 'update:foo'
        emitEvent(`update:${key.replace('v-model:', '')}`, value)
      })
    },
    { deep: true },
  )

  // Динамические пропсы (учёт v-model, v-model:checked и т.д.)
  const dynamicProps = computed(() => {
    const processedProps: Record<string, unknown> = {
      ...mergedProps.props?.value,
    }

    // Поддержка v-model (modelValue)
    if (mergedProps.modelValue?.value !== undefined) {
      processedProps.modelValue = mergedProps.modelValue.value
      processedProps['onUpdate:modelValue'] = (newVal: unknown) => {
        emit('update:modelValue', newVal)
      }
    }

    // Поддержка "v-model:checked", "v-model:foo", и т.п.
    for (const [key, value] of Object.entries(mergedProps.props?.value ?? {})) {
      if (key.startsWith('v-model:')) {
        const modelName = key.replace('v-model:', '')
        if (isRef(value)) {
          processedProps[modelName] = value.value
          processedProps[`onUpdate:${modelName}`] = (newVal: unknown) => {
            value.value = newVal
          }
        }
        else {
          processedProps[modelName] = value
        }
      }
    }

    return processedProps
  })

  /**
   * Дополнительные слушатели (listeners).
   * В Vue 3 формат: onClick, onFocus, onInput и т.д.
   * Если ключи в `props.listeners` — это `click`, `focus` (без on),
   * то трансформируем в onClick, onFocus.
   */
  const dynamicListeners = computed<Record<string, (...args: unknown[]) => void>>(() => {
    const result: Record<string, (...args: unknown[]) => void> = {}
    const userListeners = mergedProps.listeners?.value || {}

    // 1) Добавляем emitEvent-события (для случаев, когда eventName объявлен в emits)
    customEmits.value.forEach((eventName) => {
      // В шаблонах Vue: @foo -> onFoo
      const capitalized = eventName.charAt(0).toUpperCase() + eventName.slice(1)
      result[`on${capitalized}`] = (...args: unknown[]) => {
        emitEvent(eventName, ...args)
      }
    })

    // 2) Мёржим с пользовательскими слушателями (переданными через props.listeners)
    //    Для удобства поддержим оба варианта: 'click' / 'onClick'
    for (const [key, handler] of Object.entries(userListeners)) {
      if (!key.startsWith('on')) {
        // Превращаем 'click' -> 'onClick'
        const capitalized = key.charAt(0).toUpperCase() + key.slice(1)
        result[`on${capitalized}`] = handler
      }
      else {
        // если уже 'onClick', то просто прокидываем
        result[key] = handler
      }
    }

    return result
  })

  // Рендерим компонент
  const renderedComponent = computed<VNode>(() => {
    // Вместе: dynamicProps + dynamicListeners
    const allProps = {
      ...dynamicProps.value,
      ...dynamicListeners.value,
    }

    // Если компонент — строка (HTML-тег)
    if (typeof mergedProps.component.value === 'string') {
      return h(mergedProps.component.value, allProps, slots)
    }
    // Иначе Vue-компонент
    return h(mergedProps.component.value as Component, allProps, slots)
  })

  /**
   * Для генерации кода — учитываем слоты и то, что сейчас "заморожено" или нет
   */
  const slotContents = computed<Record<string, string>>(() => {
    const result: Record<string, string> = {}
    for (const slotName of Object.keys(slots)) {
      const vnodes = slots[slotName]?.() || []
      result[slotName] = serializeSlotVNodes(vnodes)
    }
    return result
  })

  const generatedCode = computed(() => {
    if (isFrozen.value) {
      // If code is frozen, we return the stored version
      return frozenCode.value
    }

    function formatValue(key: string, value: unknown) {
      if (typeof value === 'function') {
        return `  :${key}="\n    ${value.toString()}\n  "`
      }
      if (typeof value === 'boolean' || typeof value === 'number') {
        return `  :${key}="${value}"`
      }
      else if (typeof value === 'string') {
        return `  ${key}="${value}"`
      }
      else if (typeof value === 'object') {
        return `  :${key}="${JSON.stringify(value)}"`
      }
      return `  :${key}="${value}"`
    }

    // Пропы
    const propLines = Object.entries(dynamicProps.value)
      .map(([key, value]) => formatValue(key, value))
      .join('\n')

    // События из emits
    const eventLines = (props.emits || [])
      .map(event => `  @${event}="handler"`)
      .join('\n')

    // Слоты
    const slotLines = Object.keys(slotContents.value)
      .map((slotName) => {
        const content = slotContents.value[slotName] || '...'
        return `  <template #${slotName}>${content}</template>`
      })
      .join('\n')

    // Identify component name (if available)
    const componentName
      = props.name
        || (typeof props.component !== 'string'
          && ((props.component as DefineComponent).name
            || (props.component as DefineComponent).__name))
          || 'UnknownComponent'

    // Construct final code
    return `<${componentName}
${propLines}
${eventLines ? `${eventLines}\n` : ''}>
${slotLines ? slotLines + '\n' : ''}
</${componentName}>`
  })

  // Копирование кода
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode.value)
      copyButtonText.value = '✅ Copied!'
      setTimeout(() => {
        copyButtonText.value = '📋 Copy'
      }, 5000)
    }
    catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Freeze/Unfreeze
  const toggleFreeze = () => {
    if (!isFrozen.value) {
      frozenCode.value = generatedCode.value
    }
    isFrozen.value = !isFrozen.value
  }

  onUnmounted(() => {
    stopWatcher()
  })

  return {
    copyButtonText,
    isFrozen,
    toggleFreeze,
    copyCode,
    renderedComponent,
    generatedCode,
    dynamicProps,
  }
}
