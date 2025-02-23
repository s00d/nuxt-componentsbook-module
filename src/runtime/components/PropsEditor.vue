<template>
  <div class="props-editor">
    <h3 class="props-editor__title">
      Props Editor
    </h3>

    <!-- Перебираем все ключи в localProps -->
    <template
      v-for="(val, key) in localProps"
      :key="key.toString()"
    >
      <!-- Чекбокс -->
      <label
        v-if="meta[key]?.fieldType === 'checkbox'"
        class="props-editor__row"
        :for="key.toString()"
      >
        <!-- Заголовок слева -->
        <span class="props-editor__label">
          {{ key }}
        </span>
        <!-- Чекбокс (можно сделать наоборот, если хотите: сначала input, потом текст) -->
        <input
          :id="key.toString()"
          v-model="localProps[key]"
          type="checkbox"
          :name="key.toString()"
        >
      </label>

      <!-- Селект -->
      <label
        v-else-if="meta[key]?.fieldType === 'select'"
        class="props-editor__row"
        :for="key.toString()"
      >
        <span class="props-editor__label">
          {{ key }}
        </span>
        <select
          :id="key.toString()"
          v-model="localProps[key]"
          :name="key.toString()"
        >
          <option
            v-for="option in meta[key].options"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </label>

      <!-- Числовое поле -->
      <label
        v-else-if="meta[key]?.fieldType === 'number'"
        class="props-editor__row"
        :for="key.toString()"
      >
        <span class="props-editor__label">
          {{ key }}
        </span>
        <input
          :id="key.toString()"
          v-model.number="localProps[key]"
          type="number"
          :name="key.toString()"
        >
      </label>

      <!-- По умолчанию: текстовое поле -->
      <label
        v-else
        class="props-editor__row"
        :for="key.toString()"
      >
        <span class="props-editor__label">
          {{ key }}
        </span>
        <input
          :id="key.toString()"
          v-model="localProps[key]"
          type="text"
          :name="key.toString()"
        >
      </label>
    </template>

    <!-- Редактируем v-model отдельно, как пример -->
    <label
      class="props-editor__row"
      for="modelValueInput"
    >
      <span class="props-editor__label">
        v-model
      </span>
      <input
        id="modelValueInput"
        v-model="localModelValue"
        type="text"
      >
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, reactive, watch, computed } from 'vue'

/**
 * Props:
 *  - componentProps: сами пропсы (ключ -> значение)
 *  - modelValue: текущее значение для v-model
 *  - componentPropsMeta: метаданные (ключ -> { fieldType, options? })
 */
const props = defineProps({
  componentProps: {
    type: Object,
    default: () => ({}),
  },
  modelValue: {
    type: [String, Number, Boolean, Object, Array, null],
    default: '',
  },
  componentPropsMeta: {
    type: Object,
    default: () => ({}),
  },
})

// События, чтобы сообщать изменения родителю
const emit = defineEmits([
  'update:componentProps',
  'update:modelValue',
])

// Локальные копии, чтобы не менять "props" напрямую
const localProps = reactive({ ...props.componentProps })
const localModelValue = ref(props.modelValue)

// Приводим метаданные к удобному объекту (или оставляем напрямую из props)
const meta = computed(() => props.componentPropsMeta)

/**
 * Следим за внешними изменениями в props и modelValue
 */
watch(
  () => props.componentProps,
  (newVal) => {
    Object.assign(localProps, newVal)
  },
  { deep: true },
)

watch(
  () => props.modelValue,
  (val) => {
    localModelValue.value = val
  },
)

/**
 * Отправляем наверх изменения (двусторонняя синхронизация)
 */
watch(
  localProps,
  (val) => {
    emit('update:componentProps', val)
  },
  { deep: true },
)

watch(localModelValue, (val) => {
  emit('update:modelValue', val)
})
</script>

<style scoped>
.props-editor {
  /* Ширина на всю доступную область */
  width: 100%;
  box-sizing: border-box;

  /* «Карточка» */
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  /* Отступы */
  padding: 16px 24px;
  margin: 16px 0;
}

.props-editor__title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
}

/* Строка (label + поле) */
.props-editor__row {
  display: flex;
  align-items: center;
  gap: 8px; /* Расстояние между label и input */
  margin-bottom: 16px;
}

/* Текстовая часть (название пропа) */
.props-editor__label {
  /* Фиксированная или адаптивная ширина - как удобнее */
  /* Пример: 120px или auto */
  flex: 0 0 120px;
  font-weight: 500;
  font-size: 14px;
  color: #444;
}

/* Стили для всех input/select (кроме чекбокса, который снаружи) */
.props-editor__row input:not([type="checkbox"]),
.props-editor__row select {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s ease-in-out;
}

/* Чекбокс не растягиваем, т.к. это всего лишь мал. квадратик */
.props-editor__row input[type="checkbox"] {
  flex: 0 0 auto;
  margin-right: auto; /* чтобы текст лэйбла остался справа, если нужно наоборот, уберите */
}

/* При фокусе — синий бордер */
.props-editor__row input:focus,
.props-editor__row select:focus {
  outline: none;
  border-color: #3b82f6;
}
</style>
