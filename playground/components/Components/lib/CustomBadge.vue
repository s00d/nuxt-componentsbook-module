<template>
  <span :class="['badge', `badge-${variant}`]">
    <slot>{{ text }}</slot>
  </span>
</template>

<script lang="ts">
export default defineComponent({
  name: 'CustomBadge',
  props: {
    text: String,
    variant: {
      type: String,
      default: 'primary',
    },
  },
})
</script>

<style scoped>
.badge {
  padding: 5px 10px;
  border-radius: 10px;
}
.badge-primary {
  background: blue;
  color: white;
}
</style>
