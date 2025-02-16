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
      <ul class="file-tree">
        <!-- Рекурсивный компонент TreeItem -->
        <TreeItem
          v-for="(node, index) in fileTree"
          :key="index"
          :node="node"
          :depth="0"
          :selected-file="selectedFile + '.stories.vue'"
          :default-expanded="true"
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
import { ref, useRouter, useRuntimeConfig } from '#imports'

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

const fileTree = ref<TreeNode[]>([])
const selectedFile = ref('')
const config = useRuntimeConfig()
const baseURL = config.app.baseURL.replace(/\/$/, '')

const router = useRouter()

// buildFileTree — создаёт иерархическую структуру: [ { name: layer_0, children: [...] }, ... ]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
fileTree.value = buildFileTree(storyFiles)

/**
 * Формируем дерево, где:
 *  - Корневой узел = имя слоя (layerName)
 *  - Внутри него — подпапки и файлы, полученные из relativePath.split('/')
 */
function buildFileTree(filePaths: FilePath[]): TreeNode[] {
  const tree: TreeNode[] = []
  // Это нужно, чтобы каждый layerName был отдельным корневым узлом.
  const layersMap: Record<string, TreeNode> = {}

  for (const filePath of filePaths) {
    // Проверяем, есть ли уже корневой узел для layerName
    let rootNode = layersMap[filePath.layerName]
    if (!rootNode) {
      // Создаём "папку" с именем слоя
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

    // Разбиваем relativePath на части
    // Пример: "Button/Hello.stories.vue" => ["Button", "Hello.stories.vue"]
    const parts = filePath.relativePath.split('/')

    // Начинаем с корневого узла (layerName)
    let currentNode = rootNode

    // Идём по каждой части пути
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1

      // Проверяем, есть ли уже такой дочерний узел
      let child = currentNode.children.find(c => c.name === part.replace(/\.stories\.vue$/, ''))
      if (!child) {
        child = {
          // Убираем .stories.vue, если это последний элемент
          name: part.replace(/\.stories\.vue$/, ''),
          fullPath: filePath,
          isFile,
          children: [],
        }
        currentNode.children.push(child)
      }

      currentNode = child
    }
  }

  return tree
}

/** При клике на кнопку "..." */
function handleClick() {
  window.open(`${baseURL}/componentsbook/`, '_blank')
}

/** Выбираем файл (клик на узле дерева) */
function selectFile(filePath: FilePath) {
  // filePath.relativePath = "Button/Hello.stories.vue"
  // Убираем ".stories.vue" => "Button/Hello"
  const noExt = filePath.relativePath.replace(/\.stories\.vue$/, '')
  selectedFile.value = noExt

  // Переходим на роут /componentsbook/layerName/Button/Hello
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
</style>
