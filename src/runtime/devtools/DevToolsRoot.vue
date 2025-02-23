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
/*
  Лёгкая «карточка» вокруг текста. При желании
  можно использовать другой фон, бордюр, тень и т.д.
*/
.change-file {
  display: inline-block; /* Чтобы «карточка» обрезалась по тексту */
  padding: 8px 12px;
  background-color: #f8f9fa;
  color: #333;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 16px;
  transition: background-color 0.2s ease-in-out;
  cursor: default; /* или pointer, если планируете клик */
}

/* При наведении - лёгкое изменение фона (опционально) */
.change-file:hover {
  background-color: #eef1f3;
}
</style>
