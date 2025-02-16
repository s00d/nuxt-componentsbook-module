<template>
  <p>
    Change file
  </p>
</template>

<script setup>
if (import.meta.client) {
  const observer = new MutationObserver(() => {
    const devTools = document.getElementById('nuxt-devtools-container')
    if (devTools) {
      console.log('[componentsbook] Удаляем Nuxt DevTools из DOM')
      devTools.remove()
      observer.disconnect() // Останавливаем наблюдение после удаления
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
}
</script>
