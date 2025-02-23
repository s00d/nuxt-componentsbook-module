<script setup lang="ts">
import CustomInput from './MyInput.vue'
import MyButton from './MyButton.vue'
import { ref } from '#imports'

// Модель (v-model)
const modelValue = ref('')

// Ваши пропсы (реактивные)
const label = ref('Enter Text')
const type = ref<'text' | 'password' | 'email' | 'number'>('text')
const placeholder = ref('Type something...')
const disabled = ref(false)
const readonly = ref(false)
const helperText = ref('This is a helper text.')
const size = ref<'sm' | 'md' | 'lg'>('md')
const slotLabel = ref('Label')

// Метод, реагирующий на клик
const handleClick = () => {
  console.log('click')
}

// МЕТАДАННЫЕ: описание типов полей
// (связываем название пропа -> объект { fieldType, options? })
const componentPropsMeta = {
  'label': {
    fieldType: 'text',
  },
  'type': {
    fieldType: 'select',
    options: ['text', 'password', 'email', 'number'],
  },
  'placeholder': {
    fieldType: 'text',
  },
  'disabled': {
    fieldType: 'checkbox',
  },
  'readonly': {
    fieldType: 'checkbox',
  },
  'helper-text': {
    fieldType: 'text',
  },
  'size': {
    fieldType: 'select',
    options: ['sm', 'md', 'lg'],
  },
}
</script>

<template>
  <p>
    The <code>CustomInput</code> component is a versatile input field with multiple configurations.
  </p>

  <!-- Наш EnhancedPreview -->
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
    :component-props-meta="componentPropsMeta"
    :emits="['click']"
    @click="handleClick"
  >
    <!-- Пример слота append -->
    <template #append>
      test slot
      <MyButton :label="slotLabel">
        <div>block</div>
        slot text
      </MyButton>
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
