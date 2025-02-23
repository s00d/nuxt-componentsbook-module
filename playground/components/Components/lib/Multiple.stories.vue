<script setup lang="ts">
import CustomTextarea from './CustomTextarea.vue'
import CustomBadge from './CustomBadge.vue'
import { ref, reactive, markRaw } from '#imports'

const modelValue = ref('')
const placeholder = ref('Type here...')
const text = ref('Badge Label')
const variant = ref<'primary' | 'secondary'>('primary')

const handleInput = () => {
  console.log('Text entered:', modelValue.value)
}

// Объявляем события (для v-model и пр.)
const emit = defineEmits(['update:modelValue'])

const {
  isFrozen,
  toggleFreeze,
  renderedComponent,
  generatedCode,
} = useEnhancedPreview(reactive({
  component: markRaw(CustomTextarea),
  modelValue: modelValue,
  props: {
    placeholder: placeholder.value,
  },
  emits: ['update:modelValue'],
  listeners: {
    'update:modelValue': (value) => { modelValue.value = value as string },
  },
}), emit as (event: string, ...args: unknown[]) => void)

const {
  isFrozen: isFrozenCustomBadge,
  toggleFreeze: toggleFreezeCustomBadge,
  renderedComponent: renderedComponentCustomBadge,
  generatedCode: generatedCodeCustomBadge,
} = useEnhancedPreview(reactive({
  component: markRaw(CustomBadge),
  props: {
    text: text.value,
    variant: variant.value,
  },
}), emit as (event: string, ...args: unknown[]) => void)
</script>

<template>
  <p>
    The <code>CustomTextarea</code> component provides a multi-line text input.
  </p>

  <component :is="renderedComponent" />

  <PreviewSpoiler>
    <PreviewCodeBlock
      :code="generatedCode"
      :show-frozen="true"
      :is-frozen="isFrozen"
      @toggle-freeze="toggleFreeze"
    />
  </PreviewSpoiler>

  <component
    :is="renderedComponentCustomBadge"
    @update:model-value="handleInput"
  />

  <PreviewSpoiler>
    <PreviewCodeBlock
      :code="generatedCodeCustomBadge"
      :show-frozen="true"
      :is-frozen="isFrozenCustomBadge"
      @toggle-freeze="toggleFreezeCustomBadge"
    />
  </PreviewSpoiler>
</template>
