<script setup lang="ts">
import CustomTextarea from './CustomTextarea.vue'
import { ref } from '#imports'

const modelValue = ref('')
const placeholder = ref('Type here...')

const handleInput = () => {
  console.log('Text entered:', modelValue.value)
}
</script>

<template>
  <p>
    The <code>CustomTextarea</code> component provides a multi-line text input.
  </p>

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomTextarea"
    :props="{ placeholder }"
    :emits="['update:modelValue']"
    @update:model-value="handleInput"
  />
</template>
