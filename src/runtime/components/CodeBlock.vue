<script setup>
import { unref, computed } from '#imports'

const props = defineProps({
  generatedCode: [String, Object], // Разрешаем ref/computed
  copyToClipboard: Function,
})

// Получаем строку из ref/computed, если надо
const codeString = computed(() => unref(props.generatedCode))
</script>

<template>
  <div class="code-container">
    <button
      class="copy-btn"
      @click="copyToClipboard"
    >
      Copy Code
    </button>
    <pre><code>{{ codeString }}</code></pre>
  </div>
</template>

<style scoped>
.code-container {
  position: relative;
  background: #2f3136;
  color: #d4d4d4; /* Светлый текст */
  padding: 16px;
  border-radius: 8px;
  font-family: "Fira Code", "Courier New", monospace; /* Пример моноширинного шрифта */
  font-size: 14px;
  overflow-x: auto; /* Горизонтальная прокрутка, если нужно */
  margin-top: 10px;
  max-width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); /* Лёгкая тень */
  box-sizing: border-box;
}

pre {
  margin: 0;
  white-space: pre-wrap; /* Перенос длинных строк */
  word-wrap: break-word;
}

/* Кнопка «Copy Code» */
.copy-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  background-color: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

/* Эффекты при наведении/нажатии */
.copy-btn:hover {
  background-color: #1e40af;
}

.copy-btn:active {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
}
</style>
