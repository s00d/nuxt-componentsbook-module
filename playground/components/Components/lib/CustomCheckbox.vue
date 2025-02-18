<template>
  <label class="checkbox-container">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span class="checkmark" />
    <slot>{{ label }}</slot>
  </label>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomCheckbox',
  props: {
    modelValue: Boolean,
    label: String,
    disabled: Boolean,
  },
  emits: ['update:modelValue'],
})
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
input {
  cursor: pointer;
}
</style>
