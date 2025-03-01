<template>
  <div>
    <!-- Если узел — это файл -->
    <div
      v-if="node.isFile"
      :class="['file-item', { selected: isSelected }]"
      :style="indentStyle"
      @click="handleFileClick"
    >
      <span class="file-icon">
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      </span>
      <span
        class="file-name"
        v-html="node.name"
      />
    </div>

    <!-- Если узел — это папка -->
    <div v-else>
      <div
        :class="['folder-header', { expanded: isExpanded }]"
        :style="indentStyle"
        @click="toggleExpand"
      >
        <span class="chevron">
          <svg
            class="icon"
            viewBox="0 0 24 24"
          >
            <path
              v-if="isExpanded"
              d="M19 9l-7 7-7-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              v-else
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </span>
        <span class="folder-icon">
          <svg
            class="icon"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 6a2 2 0 0 0-2-2h-8L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </span>
        <span class="folder-name">{{ node.name }}</span>
      </div>

      <div
        v-if="isExpanded"
        class="folder-children"
      >
        <!-- Рекурсивно отображаем потомков -->
        <TreeItem
          v-for="child in node.children"
          :key="child.fullPath.absolutePath"
          :node="child"
          :depth="depth + 1"
          :selected-file="selectedFile"
          :default-expanded="childExpanded"
          @file-selected="handleFileSelected"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

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

const props = defineProps<{
  node: TreeNode
  depth: number
  selectedFile: string
  childExpanded?: boolean
  defaultExpanded?: boolean
}>()

const emit = defineEmits(['fileSelected'])

const isExpanded = ref(props.defaultExpanded || false)

/** Определяем, выбран ли этот файл */
const isSelected = computed(() => props.selectedFile === props.node.fullPath.relativePath)

/** Отступ слева (визуальная вложенность) */
const indentStyle = computed(() => ({
  paddingLeft: `${props.depth * 20 + 8}px`,
}))

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}

function handleFileClick() {
  emit('fileSelected', props.node.fullPath)
}

// Когда дочерний компонент сообщает о выбранном файле
function handleFileSelected(fullPath: string) {
  emit('fileSelected', fullPath)
}

// Автоматически раскрываем папку, если defaultExpanded
watch(
  () => props.defaultExpanded,
  (val) => {
    isExpanded.value = val === true
  },
  { immediate: true },
)
</script>

<style scoped>
/* Общие настройки шрифтов и цветов можно адаптировать под свой проект */
.file-item,
.folder-header {
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 14px;
  color: #334155; /* slate-700 */
  background: #fff;
  border-radius: 6px;
  border: 1px solid transparent; /* для hover/selected выделения */
  margin: 2px 0;
  padding: 4px 12px;
  cursor: pointer;
  /* Лёгкий переход для hover/expanded/selected состояний */
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

/* При наведении добавляем подсветку и небольшую тень */
.file-item:hover,
.folder-header:hover {
  background: #f1f5f9; /* slate-100 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Для выбранного файла: голубая подсветка */
.file-item.selected {
  background: #eff6ff; /* blue-50 */
  border-color: #3b82f6; /* blue-500 */
  color: #1d4ed8; /* blue-700 */
  font-weight: 500;
}

/* Заголовок папки в «расширенном» состоянии: выделяем цветом и жирностью */
.folder-header.expanded {
  font-weight: 500;
  color: #1e40af; /* blue-800 */
}

/* Иконки */
.icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  stroke: currentColor;
}

/* Иконка стрелки (chevron) рядом с папкой */
.chevron .icon {
  width: 14px;
  height: 14px;
  margin-right: 10px;
}

/* Дополнительный отступ для дочерних элементов (отображается как «ветка» дерева) */
.folder-children {
  margin-left: 12px;
  border-left: 2px solid #e2e8f0; /* slate-200 */
  padding-left: 12px;
  /* Можно добавить небольшой отступ сверху, если нужно */
  /* margin-top: 4px; */
}
</style>
