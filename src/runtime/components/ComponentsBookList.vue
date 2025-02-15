<template>
  <div class="componentsbook-container">
    <!-- Боковая панель с деревом файлов -->
    <aside class="sidebar">
      <h2>
        📄 Components
        <button
          class="file-button"
          @click.stop="handleClick"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
          >
            <!-- Пример иконки троеточия -->
            <circle
              cx="5"
              cy="12"
              r="2"
              fill="currentColor"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              fill="currentColor"
            />
            <circle
              cx="19"
              cy="12"
              r="2"
              fill="currentColor"
            />
          </svg>
        </button>
      </h2>
      <ul class="file-tree">
        <TreeItem
          v-for="(node, index) in fileTree"
          :key="index"
          :node="node"
          :depth="0"
          :selected-file="`${selectedFile}.stories.vue`"
          @file-selected="selectFile"
          @file-button-click="fileButtonClick"
        />
      </ul>
    </aside>

    <!-- Iframe для отображения контента -->
    <main class="preview">
      <iframe
        v-if="selectedFile"
        :src="`/componentsbook/${selectedFile}`"
      />
      <p v-else>
        Change file
      </p>
    </main>
  </div>
</template>

<script setup>
import TreeItem from './TreeItem.vue'

const config = useRuntimeConfig()

const baseURL = config.app.baseURL.replace(/\/$/, '')

const fileTree = ref([])
const selectedFile = ref('')

// Загружаем список файлов и строим дерево
onMounted(async () => {
  try {
    const data = await $fetch('/__componentsbook_devtools_api__/api/files', {
      baseURL: baseURL,
    })
    if (Array.isArray(data)) {
      fileTree.value = buildFileTree(data)
    }
  }
  catch (error) {
    console.error('[componentsbook] Ошибка загрузки файлов:', error)
  }
})

// Формируем дерево файлов
function buildFileTree(filePaths) {
  const tree = []
  const map = {}

  filePaths.forEach((filePath) => {
    const parts = filePath.split('/')
    let current = tree

    parts.forEach((part, index) => {
      if (!map[part]) {
        const isFile = index === parts.length - 1
        const node = {
          name: part.replace(/\.stories.vue$/, ''),
          fullPath: filePath,
          isFile,
          children: isFile ? null : [],
        }
        map[part] = node
        current.push(node)
      }
      current = map[part].children
    })
  })

  return tree
}

const handleClick = () => {
  window.open(`${baseURL}/componentsbook/`, '_blank')
}

// Выбор файла -> загружаем в iframe
const selectFile = (file) => {
  selectedFile.value = file.replace(/\.stories.vue$/, '').replace(/\/index$/, '')
}

const fileButtonClick = (file) => {
  let route = file.replace(/\.stories.vue$/, '').replace(/\/index$/, '')
  // Убираем 'index', если есть
  route = route.replace(/\/index$/, '')
  window.open(`${baseURL}/componentsbook/${route}`, '_blank')
}

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

<style>
.componentsbook-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  border-right: 1px solid #ccc;
  padding: 1rem;
  overflow-y: auto;
}

.preview {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.file-tree {
  list-style: none;
  padding-left: 0;
}

/* Кнопка справа на файлах */
.file-button {
  margin-left: auto; /* чтобы «прижать» кнопку к правому краю */
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;
  width: 26px;
}

.file-button:hover {
  background-color: #e2e8f0;
  border-radius: 4px;
}
</style>
