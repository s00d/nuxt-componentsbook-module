<script setup lang="ts">
import CustomRadio from './CustomRadio.vue'
import { ref } from '#imports'

const modelValue = ref('option1')
const options = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
])

const handleChange = () => {
  console.log('Selected radio:', modelValue.value)
}
</script>

<template>
  <p>
    The <code>CustomRadio</code> component provides radio button selection.
  </p>

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomRadio"
    :props="{ value: options[0].value, label: options[0].label }"
    :emits="['update:modelValue']"
    name="lib-custom-radio"
    @update:model-value="handleChange"
  />

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomRadio"
    :props="{ value: options[1].value, label: options[1].label }"
    :emits="['update:modelValue']"
    name="lib-custom-radio"
    @update:model-value="handleChange"
  />
</template>
