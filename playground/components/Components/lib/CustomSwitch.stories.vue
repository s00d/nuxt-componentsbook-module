<script setup lang="ts">
import CustomSwitch from './CustomSwitch.vue'
import { ref } from '#imports'

const modelValue = ref(false)

const handleToggle = () => {
  console.log('Switch toggled:', modelValue.value)
}
</script>

<template>
  <p>
    The <code>CustomSwitch</code> component acts as a toggle switch.
  </p>

  <EnhancedPreview
    v-model="modelValue"
    :component="CustomSwitch"
    :emits="['update:modelValue']"
    name="lib-custom-switch"
    @update:model-value="handleToggle"
  />
</template>
