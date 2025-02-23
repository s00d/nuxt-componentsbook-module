<template>
  <section class="enhanced-preview">
    <h2>
      {{ props.title ? props.title : `🔹${componentName} Preview` }}
    </h2>

    <!-- Блок рендера компонента -->
    <div class="enhanced-preview__component">
      <!-- Редактор пропсов (при желании можно показывать по условию) -->
      <PropsEditor
        v-if="props.componentPropsMeta && showPropsEditor"
        v-model="localModelValue"
        :component-props="localProps"
        :component-props-meta="props.componentPropsMeta"
        @update:component-props="(newProps) => (localProps = { ...newProps })"
      />

      <!-- Сам компонент (dynamic VNode) -->
      <component
        :is="renderedComponent"
        v-bind="localProps"
        :model-value="localModelValue"
        @update:model-value="(val: string) => (localModelValue = val)"
      />
    </div>

    <!-- Спойлер (показать/скрыть код) -->
    <PreviewSpoiler>
      <PreviewCodeBlock
        :code="generatedCode"
        :show-frozen="true"
        :is-frozen="isFrozen"
        @toggle-freeze="toggleFreeze"
      />
    </PreviewSpoiler>
  </section>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { useEnhancedPreview } from '../composables/useEnhancedPreview'
import PreviewSpoiler from './PreviewSpoiler.vue'
import PreviewCodeBlock from './PreviewCodeBlock.vue'
import PropsEditor from './PropsEditor.vue'
import { computed, ref, watch } from '#imports'

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
  // --- ДОБАВЛЯЕМ метаданные для prop-редактора ---
  componentPropsMeta: {
    type: [Object, null],
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

/**
 * Вызов хука useEnhancedPreview с опциями CodeGenOptions.
 */
const {
  isFrozen,
  toggleFreeze,
  renderedComponent,
  generatedCode,
} = useEnhancedPreview(
  props,
  emit as (event: string, ...args: unknown[]) => void,
  {
    fullVueFile: true,
    kebabCase: true,
    withComments: false,
    // ... другие настройки
  },
)

// Для заголовка блока (если пользователь не передал — берём из компонента)
const componentName = computed(() => {
  if (props.name) return props.name
  if (typeof props.component === 'string') return props.component
  return (
    props.component?.name
    || (props.component as DefineComponent)?.__name
    || 'UnknownComponent'
  )
})

/**
 * Локальные копии пропсов и modelValue, чтобы изменять их
 */
const localProps = ref({ ...props.props })
const localModelValue = ref(props.modelValue)

/**
 * Следим за изменениями в props.props и обновляем локальные props
 */
watch(
  () => props.props,
  (newVal) => {
    // Перезаписываем локальные пропсы
    localProps.value = { ...newVal }
  },
  { deep: true },
)
/**
 * Включить/выключить редактор пропсов
 */
const showPropsEditor = ref(true)
</script>

<style scoped>
.enhanced-preview {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.enhanced-preview:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}
.enhanced-preview > h2 {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  color: #333;
}
.enhanced-preview__component {
  background-color: #fafafa;
  border-radius: 6px;
  border: 1px dashed #ccc;
  padding: 1rem;
  min-height: 32px;
  margin-bottom: 1rem;
}
</style>
