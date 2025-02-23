<script setup>
import MyButton from './MyButton4.vue'
import { ref } from '#imports'

// Реактивные пропсы
const label = ref('Click Me')
const size = ref('md')
const variant = ref('primary')

// Метаданные (какие типы инпутов рендерить в редакторе)
const componentPropsMeta = {
  label: {
    fieldType: 'text',
  },
  size: {
    fieldType: 'select',
    options: ['sm', 'md', 'lg'],
  },
  variant: {
    fieldType: 'select',
    options: ['primary', 'secondary', 'danger'],
  },
}
</script>

<template>
  <p>
    The <code>MyButton</code> component is used to display a button with different styles and sizes.
  </p>

  <h2>🛠 Interactive Controls</h2>
  <div class="controls">
    <!-- Пример: ручное редактирование -->
    <label>
      Label:
      <input
        v-model="label"
        type="text"
      >
    </label>

    <label>
      Size:
      <select v-model="size">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>

    <label>
      Variant:
      <select v-model="variant">
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="danger">Danger</option>
      </select>
    </label>
  </div>

  <!-- EnhancedPreview -->
  <EnhancedPreview
    name="MyButton"
    :component="MyButton"
    :props="{
      label,
      size,
      variant,
    }"
    :component-props-meta="componentPropsMeta"
  />
</template>

<style scoped>
.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
