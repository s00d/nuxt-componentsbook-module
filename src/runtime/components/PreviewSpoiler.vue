<template>
  <div
    ref="spoilerHeader"
    class="spoiler-header"
  >
    <a
      class="toggle-link"
      href="#"
      @click.prevent="toggle"
    >
      {{ show ? hideLabel : showLabel }}
    </a>
  </div>

  <div
    v-if="show"
    class="spoiler-content"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from '#imports'

defineProps({
  showLabel: {
    type: String,
    default: '▶ Show Code',
  },
  hideLabel: {
    type: String,
    default: '▼ Hide Code',
  },
})

defineEmits(['toggle'])

const show = ref(false)

// Ссылка на заголовок
const spoilerHeader = ref<HTMLElement | null>(null)

function toggle() {
  show.value = !show.value
  if (show.value) {
    nextTick(() => {
      spoilerHeader.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
}
</script>

<style scoped>
.spoiler-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 16px;
  border-top: 1px solid #ddd;
  background: #f1f1f1;
  border-radius: 6px;
}

.toggle-link {
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  color: #007bff;
  transition: color 0.2s ease-in-out;
}

.toggle-link:hover {
  color: #0056b3;
}

.spoiler-content {
  margin-top: 8px;
}
</style>
