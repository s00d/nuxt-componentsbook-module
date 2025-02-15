<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from './MyInput.vue'
import { useCodeGenerator } from '#imports'

const modelValue = ref('')
const label = ref('Enter Text')
const type = ref<'text' | 'password' | 'email' | 'number'>('text')
const placeholder = ref('Type something...')
const disabled = ref(false)
const readonly = ref(false)
const helperText = ref('This is a helper text.')
const size = ref<'sm' | 'md' | 'lg'>('md')

const { generatedCode, copyToClipboard } = useCodeGenerator('CustomInput', {
  'id': 'input',
  'v-model': modelValue,
  label,
  type,
  placeholder,
  disabled,
  readonly,
  'helper-text': helperText,
  size,
})
</script>

<template>
  <h1>🟢 CustomInput Component</h1>
  <p>
    The <code>CustomInput</code> component is a versatile input field with multiple configurations.
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
      Type:
      <select v-model="type">
        <option value="text">Text</option>
        <option value="password">Password</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
      </select>
    </label>

    <label>
      Placeholder:
      <input
        v-model="placeholder"
        type="text"
      >
    </label>

    <label>
      <input
        v-model="disabled"
        type="checkbox"
      > Disabled
    </label>

    <label>
      <input
        v-model="readonly"
        type="checkbox"
      > Readonly
    </label>

    <label>
      Helper Text:
      <input
        v-model="helperText"
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
  </div>

  <h2>🔹 Preview</h2>
  <CustomInput
    id="input"
    v-model="modelValue"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :helper-text="helperText"
    :size="size"
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
