<template>
  <!-- Тот же самый параграф -->
  <p class="change-file">
    Change file
  </p>
</template>

<script setup>
if (import.meta.client) {
  const observer = new MutationObserver(() => {
    const devTools = document.getElementById('nuxt-devtools-container')
    if (devTools) {
      console.log('[componentsbook] Remove Nuxt DevTools from DOM')
      devTools.remove()
      observer.disconnect() // Останавливаем наблюдение после удаления
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
}
</script>

<style scoped>
.change-file {
  display: inline-block;
  background-color: white;
  color: #333;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 60px;
  transition: background-color 0.2s ease-in-out;
  cursor: default;
  width: 80%;
  text-align: center;
  font-weight: bold;
}
</style>
