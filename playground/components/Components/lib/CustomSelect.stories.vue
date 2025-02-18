<script setup lang="ts">
import CustomSelect from './CustomSelect.vue'
import { ref } from '#imports'

const modelValue = ref('option1')
const options = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
])

const handleChange = () => {
  console.log('Selected:', modelValue.value)
}
</script>

<template>
  <p>
    The <code>CustomSelect</code> component provides a dropdown selection.
  </p>

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomSelect"
    :props="{ options }"
    :emits="['update:modelValue']"
    @update:model-value="handleChange"
  />
</template>
