<script setup lang="ts">
import CustomBadge from './CustomBadge.vue'
import { ref } from '#imports'

const text = ref('Badge Label')
const variant = ref<'primary' | 'secondary'>('primary')
</script>

<template>
  <p>
    The <code>CustomBadge</code> component is used for displaying small status labels.
  </p>

  <h2>🛠 Interactive Controls</h2>
  <div class="controls">
    <label>
      Text:
      <input
        v-model="text"
        type="text"
      >
    </label>

    <label>
      Variant:
      <select v-model="variant">
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
      </select>
    </label>
  </div>

  <EnhancedPreview
    :component="CustomBadge"
    :props="{ text, variant }"
    name="lib-custom-badge"
  />
</template>
