<template>
  <label>
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      @change="$emit('update:modelValue', value)"
    >
    <slot>{{ label }}</slot>
  </label>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomRadio',
  props: {
    modelValue: String,
    value: String,
    label: String,
  },
  emits: ['update:modelValue'],
})
</script>
