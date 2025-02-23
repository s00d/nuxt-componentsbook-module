<script setup>
import MyButton from './MyButton2.vue'

// МЕТАДАННЫЕ (componentPropsMeta)
// Описываем, какие поля должны быть, какого типа, и (при необходимости) какие опции.
const buttonPropsMeta = {
  label: {
    fieldType: 'text',
  },
  variant: {
    fieldType: 'select',
    options: ['primary', 'secondary', 'danger'],
  },
  size: {
    fieldType: 'select',
    options: ['sm', 'md', 'lg'],
  },
}
</script>

<template>
  <p>
    The <code>MyButton2</code> component is used to display a button with different styles and sizes.
  </p>

  <h2>🛠 Usage Examples</h2>

  <!-- Простой пример -->
  <EnhancedPreview
    title="Simple Button"
    :component="MyButton"
    :props="{
      label: 'Click Me',
    }"
    :component-props-meta="buttonPropsMeta"
  />

  <h3>🔹 Different Styles</h3>
  <EnhancedPreview
    title="Primary Button Styles"
    :component="MyButton"
    :props="{
      label: 'Primary',
      variant: 'primary',
    }"
    :component-props-meta="buttonPropsMeta"
  />

  <EnhancedPreview
    title="Secondary Button Styles"
    :component="MyButton"
    :props="{
      label: 'Secondary',
      variant: 'secondary',
    }"
    :component-props-meta="buttonPropsMeta"
  />

  <EnhancedPreview
    title="Danger Button Styles"
    :component="MyButton"
    :props="{
      label: 'Danger',
      variant: 'danger',
    }"
    :component-props-meta="buttonPropsMeta"
  />

  <h3>🔹 Different Sizes</h3>
  <EnhancedPreview
    title="Small Button Size"
    :component="MyButton"
    :props="{
      label: 'Small',
      size: 'sm',
    }"
    :component-props-meta="buttonPropsMeta"
  />

  <EnhancedPreview
    title="Medium Button Size"
    :component="MyButton"
    :props="{
      label: 'Medium',
      size: 'md',
    }"
    :component-props-meta="buttonPropsMeta"
  />

  <EnhancedPreview
    title="Large Button Size"
    :component="MyButton"
    :props="{
      label: 'Large',
      size: 'lg',
    }"
    :component-props-meta="buttonPropsMeta"
  />
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
