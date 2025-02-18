<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

export default defineComponent({
  name: 'CustomButton',
  props: {
    label: {
      type: String,
      default: 'Click Me',
    },
    size: {
      type: String as () => ButtonProps['size'],
      default: 'md',
    },
    variant: {
      type: String as () => ButtonProps['variant'],
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props: ButtonProps) {
    const buttonClass = computed(() => [
      'btn',
      `btn-${props.size}`,
      `btn-${props.variant}`,
      { 'btn-disabled': props.disabled },
    ])

    return {
      buttonClass,
    }
  },
})
</script>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}
.btn-sm {
  font-size: 12px;
  padding: 5px;
}
.btn-md {
  font-size: 16px;
  padding: 10px;
}
.btn-lg {
  font-size: 20px;
  padding: 15px;
}
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.btn-danger {
  background-color: #dc3545;
  color: white;
}
.btn-disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
