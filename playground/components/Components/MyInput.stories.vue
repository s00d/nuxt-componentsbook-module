<script setup lang="ts">
import CustomInput from './MyInput.vue'
import MyButton from './MyButton.vue'
import { ref } from '#imports'

const modelValue = ref('')
const label = ref('Enter Text')
const type = ref<'text' | 'password' | 'email' | 'number'>('text')
const placeholder = ref('Type something...')
const disabled = ref(false)
const readonly = ref(false)
const helperText = ref('This is a helper text.')
const size = ref<'sm' | 'md' | 'lg'>('md')

const handleClick = () => {
  console.log('click')
}
</script>

<template>
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

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomInput"
    :props="{
      label,
      type,
      placeholder,
      disabled,
      readonly,
      'helper-text': helperText,
      size,
    }"
    :emits="['click']"
    @click="handleClick"
  >
    <template #append>
      test slot
      <MyButton label="test" />
    </template>
  </EnhancedPreview>
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
