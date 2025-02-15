<script setup>
const props = defineProps({
  generatedCode: [String, Object], // Разрешаем ref()
  copyToClipboard: Function,
})

// Получаем строку из ref/computed
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
  background: #282c34;
  color: #abb2bf;
  padding: 15px;
  border-radius: 8px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  overflow-x: auto;
  margin-top: 10px;
  max-width: 100%;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  color: #61dafb;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.copy-btn:hover {
  color: #ffffff;
}
</style>
