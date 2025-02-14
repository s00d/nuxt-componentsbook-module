<template>
  <button :class="buttonClass">
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Click me',
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'danger'].includes(value),
    },
  },
  computed: {
    buttonClass() {
      return [
        'btn',
        `btn-${this.variant}`,
        `btn-${this.size}`,
      ]
    },
  },
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
