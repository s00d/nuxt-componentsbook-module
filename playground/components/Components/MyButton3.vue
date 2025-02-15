<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

interface ButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'danger'
}

export default defineComponent({
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Click me',
    },
    size: {
      type: String as () => ButtonProps['size'],
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
    variant: {
      type: String as () => ButtonProps['variant'],
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value),
    },
  },
  emits: ['click'],
  setup(props: ButtonProps, { emit }) {
    const buttonClass = computed(() => [
      'btn',
      `btn-${props.variant}`,
      `btn-${props.size}`,
    ])

    // Обработчик клика
    const handleClick = () => {
      emit('click') // Испускаем событие клика
    }

    return {
      buttonClass,
      handleClick,
    }
  },
})
</script>

<style>
.btn {
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.2s;
}

.btn-primary {
  background: #007bff;
  color: white;
}
.btn-secondary {
  background: #6c757d;
  color: white;
}
.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-sm {
  font-size: 12px;
  padding: 0.25rem 0.5rem;
}
.btn-md {
  font-size: 16px;
}
.btn-lg {
  font-size: 20px;
  padding: 0.75rem 1.5rem;
}
</style>
