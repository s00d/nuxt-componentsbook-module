<template>
  <label :class="['switch', `switch-${size}`, { 'switch-disabled': disabled }]">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <span :class="['slider', `slider-${color}`]" />
  </label>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomSwitch',
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    color: {
      type: String as PropType<'primary' | 'success' | 'danger' | 'warning'>,
      default: 'primary',
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
})
</script>

<style scoped>
/* Основной контейнер свитча */
.switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s ease;
}

/* Размеры свитча */
.switch-sm {
  width: 34px;
  height: 18px;
}
.switch-md {
  width: 50px;
  height: 24px;
}
.switch-lg {
  width: 64px;
  height: 32px;
}

/* Скрытый инпут */
input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

/* Стандартная стилизация переключателя */
.slider {
  position: absolute;
  inset: 0;
  background: #ccc;
  border-radius: 20px;
  transition: 0.3s;
}
.slider::before {
  content: "";
  position: absolute;
  height: 14px;
  width: 14px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  transition: 0.3s;
}

/* Размеры кружка */
.switch-sm .slider::before {
  height: 12px;
  width: 12px;
  left: 3px;
}
.switch-md .slider::before {
  height: 16px;
  width: 16px;
  left: 4px;
}
.switch-lg .slider::before {
  height: 22px;
  width: 22px;
  left: 6px;
}

/* Цвета активного состояния */
.slider-primary {
  background: #ccc;
}
input:checked + .slider-primary {
  background: #007bff;
}
input:checked + .slider-primary::before {
  transform: translate(24px, -50%);
}

/* Успешный (зеленый) */
.slider-success {
  background: #ccc;
}
input:checked + .slider-success {
  background: #28a745;
}
input:checked + .slider-success::before {
  transform: translate(24px, -50%);
}

/* Опасный (красный) */
.slider-danger {
  background: #ccc;
}
input:checked + .slider-danger {
  background: #dc3545;
}
input:checked + .slider-danger::before {
  transform: translate(24px, -50%);
}

/* Предупреждающий (желтый) */
.slider-warning {
  background: #ccc;
}
input:checked + .slider-warning {
  background: #ffc107;
}
input:checked + .slider-warning::before {
  transform: translate(24px, -50%);
}

/* Эффект disabled */
.switch-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
