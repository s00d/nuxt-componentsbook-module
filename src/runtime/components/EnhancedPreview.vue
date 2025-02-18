<template>
  <render />
</template>

<script setup lang="ts">
import type { DefineComponent, VNode } from 'vue'
import { useSlots, h, computed, toRefs, isRef, ref, watch } from 'vue'

// Props
const propsDefinition = defineProps({
  title: {
    type: String,
    default: undefined,
    required: false,
  },
  name: {
    type: String,
    default: undefined,
    required: false,
  },
  component: {
    type: [Object, String],
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean, Object, Array, null],
    default: undefined,
  },
  props: {
    type: Object,
    default: () => ({}),
  },
  emits: {
    type: Array as () => string[], // Список кастомных событий
    default: () => [],
  },
})

// Статически объявляем `defineEmits`, так как Vue требует этого
const emit = defineEmits(['update:modelValue'])

// Список кастомных событий
const customEmits = computed(() => propsDefinition.emits || [])

// Функция проброса кастомных событий
const emitEvent = (eventName: string, ...args: unknown[]) => {
  if (customEmits.value.includes(eventName)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emit as any)(eventName, ...args) // Используем `as any`, чтобы избежать ошибки TypeScript
  }
}

// Reactive refs
const { component, modelValue, props, emits } = toRefs(propsDefinition)
const slots = useSlots()

// Toggle code visibility
const showCode = ref(false)

// Track copy button text
const copyButtonText = ref('📋 Copy')
const isFrozen = ref(false)
const frozenCode = ref('')

watch(props, (newProps) => {
  Object.entries(newProps).forEach(([key, value]) => {
    emitEvent(`update:${key.replace('v-model:', '')}`, value)
  })
}, { deep: true })

// Handle props, including `v-model`
const dynamicProps = computed(() => {
  const processedProps: Record<string, unknown> = {
    ...props.value,
  }

  // Handle standard v-model
  if (modelValue?.value !== undefined) {
    processedProps.modelValue = modelValue.value
    processedProps['onUpdate:modelValue'] = (newVal: unknown) => {
      emit('update:modelValue', newVal)
    }
  }

  // Handle custom v-model (e.g., `v-model:checked`)
  for (const [key, value] of Object.entries(props.value)) {
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

// Generate dynamic component with custom emits
const renderedComponent = computed<VNode>(() => {
  const eventListeners: Record<string, (...args: unknown[]) => void> = {}

  customEmits.value.forEach((eventName) => {
    eventListeners[eventName] = (...args: unknown[]) => {
      emitEvent(eventName, ...args)
    }
  })

  return h(component.value, { ...dynamicProps.value, ...eventListeners }, slots)
})

// Generate example code
const generatedCode = computed(() => {
  if (isFrozen.value) {
    return frozenCode.value
  }
  const propLines = Object.entries(dynamicProps.value)
    .map(([key, value]) => {
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
    })
    .join('\n')

  const eventLines = emits.value.map(event => `  @${event}="handler"`).join('\n')

  const slotNames = Object.keys(slots).map(slot => `  <template #${slot}>...</template>`).join('\n')

  return `<${propsDefinition.name || (component.value as DefineComponent).name || (component.value as DefineComponent).__name || 'UnknownComponent'}\n${propLines}\n${eventLines ? `${eventLines}\n` : ''}>\n${slotNames ? `${slotNames}\n` : ''}</${propsDefinition.name || (component.value as DefineComponent).name || 'UnknownComponent'}>`
})

// Copy to clipboard
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

const toggleFreeze = () => {
  if (!isFrozen.value) {
    frozenCode.value = generatedCode.value
  }
  isFrozen.value = !isFrozen.value
}

// Render function
const render = (): VNode => {
  return h(
    'section',
    { class: 'enhanced-preview' },
    [
      h('h2', (propsDefinition.title ? propsDefinition.title : ('🔹' + (propsDefinition.name || (component.value as DefineComponent).name || (component.value as DefineComponent).__name || 'UnknownComponent')) + ' Preview')),
      h('div', { class: 'enhanced-preview__component' }, [renderedComponent.value]),

      // Spoiler header with link and component name
      h('div', { class: 'spoiler-header' }, [
        h(
          'a',
          {
            class: 'toggle-link',
            href: '#',
            onClick: (e: Event) => {
              e.preventDefault()
              showCode.value = !showCode.value
            },
          },
          showCode.value ? '▼ Hide Code' : '▶ Show Code',
        ),
      ]),

      // Code block with copy button
      showCode.value
        ? h('div', { class: 'code-container' }, [
            h(
              'a',
              {
                class: 'freeze-link',
                href: '#',
                onClick: (e: Event) => {
                  e.preventDefault()
                  toggleFreeze()
                },
              },
              isFrozen.value ? '❄️ Unfreeze' : '❄️ Freeze Code',
            ),
            h(
              'a',
              {
                class: 'copy-link',
                href: '#',
                onClick: (e: Event) => {
                  e.preventDefault()
                  copyCode()
                },
              },
              copyButtonText.value,
            ),
            h('pre', { class: 'enhanced-preview__code' }, generatedCode.value),
          ])
        : null,
    ],
  )
}
</script>

<style>
.enhanced-preview {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 6px;
  background: #f8f8f8;
}

.enhanced-preview__component {
  border: 1px dashed #aaa;
  padding: 8px;
  min-height: 20px;
  background: white;
}

/* Spoiler header */
.spoiler-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 16px;
  border-top: 1px solid #ddd;
  background: #f1f1f1;
  border-radius: 6px;
}

/* Link-style buttons */
.freeze-link,
.toggle-link,
.copy-link {
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  color: #007bff;
  transition: color 0.2s ease-in-out;
}

.freeze-link:hover,
.toggle-link:hover,
.copy-link:hover {
  color: #0056b3;
}

/* Component name */
.component-name {
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

/* Code container */
.code-container {
  position: relative;
  border-radius: 6px;
  padding: 12px;
  margin-top: 8px;
  overflow: auto;
  border: 1px solid #ccc;

  background: #282c34;
  color: #abb2bf;
}

/* Copy button */
.freeze-link,
.copy-link {
  position: absolute;
  top: 10px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
}

.copy-link {
  right: 10px;
}

.freeze-link {
  right: 60px;
}

/* Code block */
.enhanced-preview__code {
  font-family: monospace;
  font-size: 14px;
  padding: 12px;
  border-radius: 6px;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 16px;
}
</style>
