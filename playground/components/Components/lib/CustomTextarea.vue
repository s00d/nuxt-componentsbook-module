<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomTextarea',
  props: {
    modelValue: String,
    placeholder: String,
  },
  emits: ['update:modelValue'],
})
</script>

<style scoped>
textarea {
  width: 97%;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
