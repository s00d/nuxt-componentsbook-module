<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import { ref } from '#imports'

const label = ref('Click Me')
const size = ref<'sm' | 'md' | 'lg'>('md')
const variant = ref<'primary' | 'secondary' | 'danger'>('primary')
const disabled = ref(false)

const handleClick = () => {
  console.log('Button clicked')
}
</script>

<template>
  <p>
    The <code>CustomButton</code> component is a versatile button with multiple configurations.
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

    <label>
      <input
        v-model="disabled"
        type="checkbox"
      > Disabled
    </label>
  </div>

  <EnhancedPreview
    :component="CustomButton"
    :props="{ label, size, variant, disabled }"
    :emits="['click']"
    name="lib-custom-button"
    @click="handleClick"
  />
</template>
