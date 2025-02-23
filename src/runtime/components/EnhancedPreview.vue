<template>
  <section class="enhanced-preview">
    <h2>
      {{ props.title ? props.title : `🔹${componentName} Preview` }}
    </h2>

    <div class="enhanced-preview__component">
      <!-- Рендерим ваш компонент через dynamic VNode -->
      <component :is="renderedComponent" />
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
import { computed, type DefineComponent } from 'vue'
import { useEnhancedPreview } from '../composables/useEnhancedPreview'

// Локальные компоненты для отображения кода/спойлера (пример)
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

// События (включая v-model)
const emit = defineEmits(['update:modelValue'])

/**
 * Вызов нашего продвинутого хука с опциями CodeGenOptions.
 * Тут вы можете менять:
 *   - fullVueFile: true/false
 *   - kebabCase: true/false
 *   - skipDefaultProps: true/false
 *   - и т.д.
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
    fullVueFile: true, // Генерировать как <template> + <script setup> (false = просто тег)
    kebabCase: true, // Прописывать атрибуты в виде some-prop="..." вместо camelCase
    withComments: false, // Включаем inline-комментарии возле пропов/событий
    eventNameToHandler: {
      // Классические события мыши:
      click: 'onClick',
      dblclick: 'onDblclick',
      contextmenu: 'onContextMenu',
      mouseenter: 'onMouseEnter',
      mouseleave: 'onMouseLeave',
      mousemove: 'onMouseMove',
      mousedown: 'onMouseDown',
      mouseup: 'onMouseUp',

      // События ввода/форм:
      input: 'onInput',
      change: 'onChange',
      submit: 'onSubmit',
      reset: 'onReset',

      // Фокусировка:
      focus: 'onFocus',
      blur: 'onBlur',

      // Клавиатура:
      keydown: 'onKeydown',
      keyup: 'onKeyup',
      keypress: 'onKeypress',

      // Прочие распространённые:
      scroll: 'onScroll',
      resize: 'onResize',
      wheel: 'onWheel',

      // Перетаскивание:
      drag: 'onDrag',
      dragstart: 'onDragStart',
      dragenter: 'onDragEnter',
      dragover: 'onDragOver',
      dragleave: 'onDragLeave',
      drop: 'onDrop',
      dragend: 'onDragEnd',

      // Ваши пользовательские события:
      myCustomEvent: 'onMyCustomEvent',
      anotherEvent: 'onAnotherEvent',
    },
    specialDirectives: {
      // Условный рендер:
      if: 'v-if', // prop "if" => v-if="..."
      elseIf: 'v-else-if', // prop "elseIf" => v-else-if="..."
      else: 'v-else', // prop "else" => v-else (обычно без значения!)

      // Циклы:
      for: 'v-for', // prop "for" => v-for="...". Но тут нужна строка типа "item in items"

      // Показ/скрытие:
      show: 'v-show', // prop "show" => v-show="..."

      // Прочие:
      once: 'v-once',
      pre: 'v-pre',
      html: 'v-html',
      text: 'v-text',
    },
    slotProps: {
      // Если нужны слот-пропы: { default: ['item', 'index'] }
      // append: ['someSlotProp']
    },
  },
)

// Для заголовка блока: если пользователь не передал, то пытаемся взять из компонента
const componentName = computed(() => {
  if (props.name) return props.name
  if (typeof props.component === 'string') return props.component
  return (
    props.component?.name
    || (props.component as DefineComponent)?.__name
    || 'UnknownComponent'
  )
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
