<template>
  <div class="input-container">
    <!-- Слот label (если не заполнен, используется prop label) -->
    <label v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </label>

    <!-- Слот prepend -->
    <slot name="prepend" />

    <!-- Основной input -->
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :class="inputClass"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @click="$emit('click')"
    >

    <!-- Слот append -->
    <slot name="append" />

    <!-- helper-text, если есть -->
    <p
      v-if="helperText"
      class="helper-text"
    >
      {{ helperText }}
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '#imports'

interface InputProps {
  modelValue: string
  label?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  helperText?: string
  size?: 'sm' | 'md' | 'lg'
}

export default defineComponent({
  name: 'CustomInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String as () => InputProps['type'],
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    helperText: {
      type: String,
      default: '',
    },
    size: {
      type: String as () => InputProps['size'],
      default: 'md',
      validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
  },
  emits: ['update:modelValue', 'click'],
  setup(props: InputProps) {
    const inputClass = computed(() => [
      'input',
      `input-${props.size}`,
      { 'input-disabled': props.disabled },
    ])

    return {
      inputClass,
    }
  },
})
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
label {
  font-weight: bold;
}
.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.3s;
}
.input-sm {
  font-size: 12px;
  padding: 5px;
}
.input-md {
  font-size: 16px;
  padding: 10px;
}
.input-lg {
  font-size: 20px;
  padding: 15px;
}
.input-disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
.helper-text {
  font-size: 12px;
  color: gray;
}
</style>
