<script setup lang="ts">
import CustomCheckbox from './CustomCheckbox.vue'
import { ref } from '#imports'

const modelValue = ref(false)
const label = ref('Accept Terms')

const handleChange = () => {
  console.log('Checkbox toggled:', modelValue.value)
}
</script>

<template>
  <p>
    The <code>CustomCheckbox</code> is a simple checkbox input.
  </p>

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomCheckbox"
    :props="{ label }"
    :emits="['update:modelValue']"
    name="lib-custom-checkbox"
    @update:model-value="handleChange"
  />
</template>
