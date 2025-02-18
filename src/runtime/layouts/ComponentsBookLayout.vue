<template>
  <div class="componentsbook-container">
    <!-- Боковая панель -->
    <aside class="sidebar">
      <h2>
        <span class="components-icon">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 14.4v3.6c0 .8-.7 1.5-1.5 1.5h-3.6c-.5 0-.9-.4-.9-.9 0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7c0 .5-.4.9-.9.9H7.5c-.8 0-1.5-.7-1.5-1.5v-1.6c0-.5-.4-.9-.9-.9-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7c.5 0 .9-.4.9-.9V7.5c0-.8.7-1.5 1.5-1.5h1.6c.5 0 .9-.4.9-.9 0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 .5.4.9.9.9h1.6c.8 0 1.5.7 1.5 1.5v3.6c0 .5.4.9.9.9 1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7c-.5 0-.9.4-.9.9z" />
          </svg>
        </span>

        Components
        <button
          class="file-button"
          @click.stop="handleClick"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
          >
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

      <!-- [Изменение для поиска] -->
      <!-- Поле ввода для строки поиска -->
      <input
        v-model="searchQuery"
        class="search-input"
        type="text"
        placeholder="Search components..."
      >

      <ul class="file-tree">
        <!-- Используем filteredTree вместо оригинального fileTree -->
        <TreeItem
          v-for="(node, index) in filteredTree"
          :key="index"
          :node="node"
          :depth="0"
          :selected-file="selectedFile + '.stories.vue'"
          :default-expanded="true"
          :child-expanded="searchQuery !== ''"
          @file-selected="selectFile"
        />
      </ul>
    </aside>

    <!-- Контентная область -->
    <main class="preview">
      <nuxt-page />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useRouter, useRuntimeConfig } from '#imports'

interface FilePath {
  layerName: string
  absolutePath: string
  relativePath: string
}

export interface TreeNode {
  name: string
  fullPath: FilePath
  isFile: boolean
  children: TreeNode[]
}

// Эта переменная будет заполнена через шаблонизацию или любым другим способом
// (например, вы генерируете файл, в котором есть `export const storyFiles = [...]`).
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
__REPLACE_IMPORT__

const router = useRouter()
const config = useRuntimeConfig()
const baseURL = config.app.baseURL.replace(/\/$/, '')

/**
 * Построение дерева (исходная логика).
 */
function buildFileTree(filePaths: FilePath[]): TreeNode[] {
  const tree: TreeNode[] = []
  const layersMap: Record<string, TreeNode> = {}

  for (const filePath of filePaths) {
    let rootNode = layersMap[filePath.layerName]
    if (!rootNode) {
      rootNode = {
        name: filePath.layerName,
        fullPath: {
          layerName: filePath.layerName,
          absolutePath: '',
          relativePath: '',
        },
        isFile: false,
        children: [],
      }
      layersMap[filePath.layerName] = rootNode
      tree.push(rootNode)
    }

    const parts = filePath.relativePath.split('/')
    let currentNode = rootNode

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1

      let child = currentNode.children.find(c => c.name === part.replace(/\.stories\.vue$/, ''))
      if (!child) {
        child = {
          name: part.replace(/\.stories\.vue$/, ''),
          fullPath: filePath,
          isFile,
          children: [],
        }
        currentNode.children.push(child)

        currentNode.children.sort((a, b) => Number(a.isFile) - Number(b.isFile))
      }

      currentNode = child
    }
  }

  return tree
}

/**
 * Фильтруем дерево по строке поиска.
 * Если в узле (папке) есть совпадения в потомках — сама папка остаётся, но фильтруем её детей.
 */
function filterTree(nodes: TreeNode[], query: string): TreeNode[] {
  const q = query.toLowerCase()

  return nodes
    .map((node) => {
      const nodeName = node.name.toLowerCase()

      // Если это файл и совпадает по имени — оставляем
      if (node.isFile) {
        if (nodeName.includes(q)) {
          return node
        }
        return null
      }

      // Если это папка — фильтруем детей
      const filteredChildren = filterTree(node.children, query)

      // Папка «проходит», если её имя подходит под запрос ИЛИ у неё есть дочерние совпадения
      if (nodeName.includes(q) || filteredChildren.length > 0) {
        // Возвращаем копию узла с отфильтрованными детьми
        return {
          ...node,
          children: filteredChildren,
        }
      }
      return null
    })
    .filter(Boolean) as TreeNode[]
}

// [Изменение для поиска] ---------------------------

// Исходное дерево (полный список без фильтра)
// buildFileTree — создаёт иерархическую структуру: [ { name: layer_0, children: [...] }, ... ]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const originalFileTree = buildFileTree(storyFiles)

/** Строка поиска */
const searchQuery = ref('')

/** Отфильтрованное дерево */
const filteredTree = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) {
    // Возвращаем весь список, если строка поиска пуста
    return originalFileTree
  }
  return filterTree(originalFileTree, query)
})

// -------------------------------------------------

/** Здесь храним текущий выбранный файл (без .stories.vue) */
const selectedFile = ref('')

/** При клике на кнопку "..." */
function handleClick() {
  window.open(`${baseURL}/componentsbook/`, '_blank')
}

/** При клике на узле дерева */
function selectFile(filePath: FilePath) {
  const noExt = filePath.relativePath.replace(/\.stories\.vue$/, '')
  selectedFile.value = noExt
  router.push(`/componentsbook/${filePath.layerName}/${noExt}`)
}
</script>

<style scoped>
.componentsbook-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 350px;
  border-right: 1px solid #ccc;
  padding: 0 1rem;
  overflow-y: auto;
}

.preview {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file-tree {
  list-style: none;
  padding-left: 0;
}

.file-button {
  margin-left: auto;
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

.icon {
  width: 16px;
  height: 16px;
}

.search-input {
  width: 100%;
  padding: 6px 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
