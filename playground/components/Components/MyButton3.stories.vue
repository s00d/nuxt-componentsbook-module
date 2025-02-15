<script setup>
import { ref } from 'vue'
import MyButton from './MyButton3.vue'
import { useCodeGenerator } from '#imports'

const label = ref('Click Me')
const size = ref('md')
const variant = ref('primary')

const { generatedCode, copyToClipboard } = useCodeGenerator('MyButton3', {
  label,
  size,
  variant,
})
</script>

<template>
  <h1>🟢 MyButton3 Component</h1>
  <p>
    The <code>MyButton3</code> component is used to display a button with different styles and sizes.
  </p>

  <h2>🛠 Interactive Controls</h2>
  <div class="controls">
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

  <h2>🔹 Preview</h2>
  <MyButton
    :label="label"
    :size="size"
    :variant="variant"
  />

  <h2>📋 Generated Code</h2>
  <CodeBlock
    :generated-code="generatedCode"
    :copy-to-clipboard="copyToClipboard"
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
