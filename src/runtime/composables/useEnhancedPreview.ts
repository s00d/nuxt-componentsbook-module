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
  type WatchStopHandle,
  type Component,
  type DefineComponent,
  type VNode,
  type VNodeArrayChildren,
  type Ref,
} from 'vue'

interface UseEnhancedPreviewProps {
  title?: string
  name?: string
  component: DefineComponent | string | unknown
  modelValue?:
    | string
    | number
    | boolean
    | Record<string, unknown>
    | Array<unknown>
    | null
    | Ref<unknown>
  props?: Record<string, unknown>
  emits?: string[]
  listeners?: Record<string, (...args: unknown[]) => void>
}

interface CodeGenOptions {
  fullVueFile?: boolean
  kebabCase?: boolean
  withComments?: boolean
  eventNameToHandler?: Record<string, string>
  specialDirectives?: Record<string, string>
  slotProps?: Record<string, string[]>
}

/** Утилиты */

function getNodeTag(node: VNode): string {
  if (typeof node.type === 'string') {
    return node.type
  }
  const comp = node.type as DefineComponent
  return comp?.name || comp?.__name || 'AnonymousComponent'
}

function serializeVNode(node: VNode, depth = 0): string {
  if (!node) return ''
  if (typeof node.children === 'string') {
    return node.children
  }
  const childArray = Array.isArray(node.children) ? node.children : []
  const tagName = getNodeTag(node)
  const indent = '  '.repeat(depth)

  const propsString = node.props
    ? Object.entries(node.props)
        .map(([key, val]) => {
          if (typeof val === 'string') {
            return ` ${key}="${val}"`
          }
          else if (typeof val === 'number' || typeof val === 'boolean') {
            return ` :${key}="${val}"`
          }
          else if (typeof val === 'function') {
            return ` :${key}="${val.toString()}"`
          }
          else {
            return ` :${key}='${JSON.stringify(val)}'`
          }
        })
        .join('')
    : ''

  if (childArray.length) {
    const childrenSerialized = childArray
      .map(child => (isVNode(child) ? serializeVNode(child, depth + 1) : ''))
      .join('')
    return `${indent}<${tagName}${propsString}>${childrenSerialized}</${tagName}>\n`
  }
  else {
    return `${indent}<${tagName}${propsString} />\n`
  }
}

function serializeSlotVNodes(vnodes: VNodeArrayChildren): string {
  return vnodes
    .map(node => (isVNode(node) ? serializeVNode(node) : ''))
    .join('')
}

function prettyStringify(value: unknown, indent = 2): string {
  try {
    return JSON.stringify(value, null, indent)
  }
  catch {
    return String(value)
  }
}

function toKebabCase(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export function useEnhancedPreview(
  props: UseEnhancedPreviewProps,
  emit: (event: string, ...args: unknown[]) => void,
  options: CodeGenOptions = {},
) {
  const {
    fullVueFile = false,
    kebabCase = true,
    withComments = false,
    eventNameToHandler = {},
    specialDirectives = {},
    slotProps = {},
  } = options

  const copyButtonText = ref('📋 Copy')
  const isFrozen = ref(false)
  const frozenCode = ref('')

  const mergedProps = toRefs(props)
  const slots = useSlots()

  const customEmits = computed(() => props.emits || [])
  const emitEvent = (eventName: string, ...args: unknown[]) => {
    if (customEmits.value.includes(eventName)) {
      emit(eventName, ...args)
    }
  }

  // Watch для v-model:xxx
  const stopWatcher: WatchStopHandle = watch(
    () => mergedProps.props?.value,
    (newProps) => {
      Object.entries(newProps ?? []).forEach(([key, value]) => {
        if (key.startsWith('v-model:')) {
          const eventName = 'update:' + key.replace('v-model:', '')
          emitEvent(eventName, value)
        }
      })
    },
    { deep: true },
  )

  // Формируем dynamicProps
  const dynamicProps = computed(() => {
    const processedProps: Record<string, unknown> = {
      ...mergedProps.props?.value,
    }

    // v-model (modelValue)
    if (mergedProps.modelValue?.value !== undefined) {
      processedProps.modelValue = mergedProps.modelValue.value
      processedProps['onUpdate:modelValue'] = (newVal: unknown) => {
        emit('update:modelValue', newVal)
      }
    }

    // v-model:foo
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

  // Слушатели + emits
  const dynamicListeners = computed<Record<string, (...args: unknown[]) => void>>(() => {
    const result: Record<string, (...args: unknown[]) => void> = {}
    const userListeners = mergedProps.listeners?.value || {}

    // emits
    customEmits.value.forEach((eventName) => {
      const capitalized = eventName.charAt(0).toUpperCase() + eventName.slice(1)
      result[`on${capitalized}`] = (...args: unknown[]) => {
        emitEvent(eventName, ...args)
      }
    })

    // Пользовательские слушатели
    for (const [key, handler] of Object.entries(userListeners)) {
      if (!key.startsWith('on')) {
        const capitalized = key.charAt(0).toUpperCase() + key.slice(1)
        result[`on${capitalized}`] = handler
      }
      else {
        result[key] = handler
      }
    }

    return result
  })

  // Собираем итоговый VNode
  const renderedComponent = computed<VNode>(() => {
    const allProps = {
      ...dynamicProps.value,
      ...dynamicListeners.value,
    }
    if (typeof mergedProps.component.value === 'string') {
      return h(mergedProps.component.value, allProps, slots)
    }
    return h(mergedProps.component.value as Component, allProps, slots)
  })

  // Сериализация слотов
  const slotContents = computed<Record<string, string>>(() => {
    const result: Record<string, string> = {}
    for (const slotName of Object.keys(slots)) {
      const vnodes = slots[slotName]?.() || []
      result[slotName] = serializeSlotVNodes(vnodes)
    }
    return result
  })

  // ----------------------------------
  // Генерация КОДА
  // ----------------------------------

  const generatedCode = computed(() => {
    if (isFrozen.value) {
      return frozenCode.value
    }

    // Имя компонента
    const compName
      = props.name
        || (typeof props.component === 'string'
          ? props.component
          : (props.component as DefineComponent)?.name
            || (props.component as DefineComponent)?.__name)
          || 'UnknownComponent'

    // Собираем (onUpdate:xxx) => для v-model
    const onUpdates: Record<string, boolean> = {}
    Object.keys(dynamicProps.value).forEach((k) => {
      if (k.startsWith('onUpdate:')) {
        onUpdates[k.slice('onUpdate:'.length)] = true
      }
    })

    // Массив для будущих v-model переменных (только если fullVueFile=true)
    const vModelVars: Array<{
      key: string
      varName: string
      initialValue: unknown
    }> = []

    /** Проверяем, не занята ли переменная (чтобы не было дублей) */
    const usedVarNames = new Set<string>()
    function getUniqueVarName(base: string): string {
      let candidate = base
      let i = 2
      while (usedVarNames.has(candidate)) {
        candidate = base + i
        i++
      }
      usedVarNames.add(candidate)
      return candidate
    }

    /**
     * Генерация строки пропса/директивы
     * Возвращает null, если проп нужно пропустить
     */
    function propToTemplateAttr(key: string, val: unknown): string | null {
      // 1) Спец-директива
      if (specialDirectives[key]) {
        return `${specialDirectives[key]}="${String(val)}"`
      }

      // 2) Пара (modelValue + onUpdate:modelValue) => v-model
      if (key === 'modelValue' && onUpdates['modelValue']) {
        // В режиме fullVueFile -> заведём отдельную переменную
        if (fullVueFile) {
          const varName = getUniqueVarName('componentValue')
          vModelVars.push({
            key,
            varName,
            initialValue: val,
          })
          // В template => v-model="componentValue"
          return `v-model="${varName}"`
        }
        else {
          // Обычное поведение: v-model="(текущее значение)"
          return `v-model="${String(val)}"`
        }
      }

      // 3) Пара (foo + onUpdate:foo) => v-model:foo
      if (onUpdates[key]) {
        if (fullVueFile) {
          const varName = getUniqueVarName(key)
          vModelVars.push({
            key,
            varName,
            initialValue: val,
          })
          return `v-model:${key}="${varName}"`
        }
        else {
          return `v-model:${key}="${String(val)}"`
        }
      }

      // 4) Пропуск onUpdate:... (чтобы не было :on-update:model-value)
      if (key.startsWith('onUpdate:')) {
        return null
      }

      // 6) Вычисляем имя атрибута
      const attrName = kebabCase ? toKebabCase(key) : key

      // 7) Форматируем значение
      if (typeof val === 'function') {
        const fnText = val.toString().replace(/^/gm, '  ')
        return `:${attrName}="\n${fnText}\n"`
      }
      else if (typeof val === 'object' && val !== null) {
        const json = prettyStringify(val, 2).replace(/^/gm, '    ')
        return `:${attrName}="\n${json}\n  "`
      }
      else if (typeof val === 'boolean' || typeof val === 'number') {
        return `:${attrName}="${val}"`
      }
      else if (typeof val === 'string') {
        return `${attrName}="${val}"`
      }
      return `:${attrName}="${String(val)}"`
    }

    // Собираем пропы
    const propLines: string[] = []
    Object.entries(dynamicProps.value).forEach(([key, val]) => {
      const line = propToTemplateAttr(key, val)
      if (line) {
        if (withComments) {
          propLines.push(`  <!-- prop: ${key} -->`)
        }
        propLines.push(`  ${line}`)
      }
    })

    // Собираем события из emits (не считая update:..., уже учтено в v-model)
    const eventLines: string[] = []
    for (const eventName of props.emits || []) {
      if (eventName.startsWith('update:')) {
        continue
      }
      const handlerName = eventNameToHandler[eventName] || 'handler'
      if (withComments) {
        eventLines.push(`  <!-- event: ${eventName} -->`)
      }
      const eventAttr = kebabCase ? toKebabCase(eventName) : eventName
      eventLines.push(`  @${eventAttr}="${handlerName}"`)
    }

    // Слоты
    const slotLines: string[] = []
    for (const [slotName, content] of Object.entries(slotContents.value)) {
      const propsArr = slotProps[slotName] || []
      const slotPropsString = propsArr.length
        ? `{ ${propsArr.join(', ')} }`
        : ''
      if (content.trim()) {
        slotLines.push(
          `        <template #${slotName}${
            slotPropsString ? `="${slotPropsString}"` : ''
          }>`,
        )
        const indented = content
          .split('\n')
          .map(line => '    ' + line)
          .join('\n')
        slotLines.push(indented)
        slotLines.push(`  </template>`)
      }
      else {
        slotLines.push(
          `  <template #${slotName}${
            slotPropsString ? `="${slotPropsString}"` : ''
          }></template>`,
        )
      }
    }

    // Формируем итоговый тег
    let tagCode = ''
    const allAttrs = [...propLines, ...eventLines]
    if (slotLines.length === 0) {
      // Нет слотов => самозакрывающийся
      tagCode = `   <${compName}\n      ${allAttrs.join('\n      ')}\n      />`
    }
    else {
      tagCode = `   <${compName}\n      ${allAttrs.join('\n      ')}\n      >\n`
      tagCode += slotLines.join('\n      ') + '\n'
      tagCode += `      </${compName}>`
    }

    // Если fullVueFile = true => оборачиваем <template> + <script setup>
    if (fullVueFile) {
      // Формируем блок объявлений в <script setup> для v-model переменных
      let scriptLines: string[] = []
      if (vModelVars.length) {
        scriptLines = vModelVars.map(({ varName, initialValue }) => {
          // Превращаем initialValue в сериализованную строку
          // (Например, "Some text", 123, { foo: "bar" }, ...)
          const valueSerialized
            = typeof initialValue === 'string'
              ? JSON.stringify(initialValue)
              : prettyStringify(initialValue, 0)
          return `const ${varName} = ref(${valueSerialized})`
        })
      }

      // При желании можно добавить заглушку для "handler"
      // (вдруг есть события)
      let hasAnyEvent = false
      for (const eventName of props.emits || []) {
        if (!eventName.startsWith('update:')) {
          hasAnyEvent = true
          break
        }
      }

      const handlerBlock = hasAnyEvent
        ? `
function handler(...args) {
  console.log('Event from ${compName}', ...args)
}
`.trim()
        : ''

      const finalScript = `
<script setup>
import ${compName} from '@/components/${compName}.vue'
import { ref } from 'vue'

// Auto-generated model refs:
${scriptLines.join('\n')}

${handlerBlock}
</script>`.trim()

      return `
<template>
  ${tagCode}
</template>

${finalScript}
      `.trim()
    }
    else {
      return tagCode
    }
  })

  // Копирование
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

  // Freeze/unfreeze
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
