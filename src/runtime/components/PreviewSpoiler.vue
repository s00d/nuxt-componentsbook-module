<template>
  <div
    ref="spoilerHeader"
    class="spoiler-header"
    @click.prevent="toggle"
  >
    <a
      class="toggle-link"
      href="#"
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
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 12px 16px;
  margin-top: 16px;
  cursor: pointer; /* Чтобы при наведении на шапку показывался «рука» */
  transition: background-color 0.2s ease-in-out; /* Плавная смена фона */
}

/* Эффект наведения для всей «шапки» спойлера */
.spoiler-header:hover {
  background-color: #e6f2ff;
}

/* Сама ссылка, без эффекта hover */
.toggle-link {
  text-decoration: none;
  font-weight: 500;
  color: #007bff;
  font-size: 14px;
  border-radius: 4px;
  padding: 2px 4px;
}

/* Убираем hover-эффект у ссылки, чтобы он не перебивал общий hover */
.toggle-link:hover {
  /* Пусто или закомментировано – эффекта здесь не будет */
}

/* Содержимое, показывающееся после клика */
.spoiler-content {
  margin-top: 8px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}
</style>
