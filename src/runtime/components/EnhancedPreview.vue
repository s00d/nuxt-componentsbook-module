<template>
  <section class="enhanced-preview">
    <h2>
      {{ props.title ? props.title : `🔹${componentName} Preview` }}
    </h2>

    <div class="enhanced-preview__component">
      <component :is="renderedComponent" />
    </div>
    <!-- Спойлер (показать/скрыть код) -->
    <PreviewSpoiler>
      <PreviewCodeBlock
        :code="generatedCode"
        :show-frozen="true"
        :is-frozen="isFrozen"
        :copy-button-text="copyButtonText"
        @toggle-freeze="toggleFreeze"
        @copy="copyCode"
      />
    </PreviewSpoiler>
  </section>
</template>

<script setup lang="ts">
import { computed, type DefineComponent } from 'vue'
import { useEnhancedPreview } from '../composables/useEnhancedPreview'
import PreviewSpoiler from './PreviewSpoiler.vue'
import PreviewCodeBlock from './PreviewCodeBlock.vue'

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
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
    type: Array as () => string[],
    default: () => [],
  },
})

// Объявляем события (для v-model и пр.)
const emit = defineEmits(['update:modelValue'])

// Подключаем ваш composable и передаём именно «props» (реактивный),
// а НЕ {...props} и т.п.
const {
  copyButtonText,
  isFrozen,
  toggleFreeze,
  copyCode,
  renderedComponent,
  generatedCode,
} = useEnhancedPreview(props, emit as (event: string, ...args: unknown[]) => void)

// Удобно вычислить имя компонента (или оставить внутри composable)
// Поскольку props — реактивный, можно использовать computed:
const componentName = computed(() => {
  if (props.name) return props.name
  if (typeof props.component === 'string') return props.component
  return props.component?.name
    || (props.component as DefineComponent)?.__name
    || 'UnknownComponent'
})
</script>

<style scoped>
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
</style>
