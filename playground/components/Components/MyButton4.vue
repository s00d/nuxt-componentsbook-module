<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from '#imports'

interface ButtonProps {
  label?: string
  /**
   * The size of the button allows only some values
   * @values sm, md, lg
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * The type of the button allows only some values
   * @values primary, secondary, danger
   */
  variant?: 'primary' | 'secondary' | 'danger'
}

const props = defineProps<ButtonProps>()

const emit = defineEmits(['click'])

const buttonClass = computed(() => [
  'btn',
  `btn-${props.variant || 'primary'}`,
  `btn-${props.size || 'md'}`,
])

const handleClick = () => {
  emit('click')
}
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
