<template>
  <div class="code-container">
    <a
      v-if="showFrozen"
      class="freeze-link"
      href="#"
      @click.prevent="$emit('toggle-freeze')"
    >
      {{ isFrozen ? '❄️ Unfreeze' : '❄️ Freeze Code' }}
    </a>
    <a
      class="copy-link"
      href="#"
      @click.prevent="copyCode"
    >
      {{ copyButtonText }}
    </a>

    <!-- Стараемся, чтобы внутри <pre> не было лишних пробелов/переносов -->
    <pre class="enhanced-preview__code"><code v-html="highlightedCode" /></pre>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import * as prettier from 'prettier/standalone'
import * as htmlParser from 'prettier/parser-html'
import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('xml', xml)

const props = defineProps<{
  code: string
  showFrozen: boolean
  isFrozen: boolean
}>()

defineEmits(['copy', 'toggle-freeze'])

const formattedCode = ref('')
const highlightedCode = ref('')
const copyButtonText = ref('📋 Copy')

async function copyCode() {
  try {
    await navigator.clipboard.writeText(formattedCode.value)
    copyButtonText.value = '✅ Copied!'
    setTimeout(() => {
      copyButtonText.value = '📋 Copy'
    }, 5000)
  }
  catch (err) {
    console.error('Failed to copy:', err)
  }
}

function removeLeadingIndent(str: string): string {
  const lines = str.split('\n')
  let minIndent = Infinity

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const match = line.match(/^(\s+)/)
    if (match) {
      minIndent = Math.min(minIndent, match[1].length)
    }
    else {
      minIndent = 0
      break
    }
  }
  if (minIndent === Infinity) return str

  return lines
    .map(line => (!line.trim() ? '' : line.slice(minIndent)))
    .join('\n')
}

watchEffect(async () => {
  try {
    const normalizedCode = removeLeadingIndent(props.code)
    const fc = await prettier.format(normalizedCode, {
      parser: 'html',
      plugins: [htmlParser],
    })
    const result = hljs.highlight(fc, { language: 'xml', ignoreIllegals: true })
    formattedCode.value = fc
    highlightedCode.value = result.value
  }
  catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
/*
  Основной контейнер для кода.
  Используем тёмный фон, небольшую тень и закруглённые углы.
*/
.code-container {
  background: #2f3136;
  color: #ccc;
  position: relative;
  border-radius: 6px;
  padding: 16px;
  margin-top: 8px;
  overflow: auto;
  border: 1px solid #444;
  /* Лёгкая тень для «карточного» вида */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  font-family: 'Fira Code', 'Courier New', monospace; /* Пример шрифта */
}

/* Блок с подсвеченным кодом */
.enhanced-preview__code {
  /* Убираем лишние отступы, задаём перенос, если строка длинная */
  margin-top: 16px;
  font-size: 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Переопределяем потенциальные padding и margin внутри hljs */
.enhanced-preview__code .hljs {
  padding: 0 !important;
  margin: 0 !important;
}

/* Кнопки (copy & freeze) */
.freeze-link,
.copy-link {
  position: absolute;
  top: 16px;
  padding: 4px 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  /* Фон и цвет текста можно адаптировать под свою палитру */
  background-color: #3b82f6; /* Пример: оттенок синего */
  color: #fff;
}

/* Кнопка «Copy» правее */
.copy-link {
  right: 16px;
}

/* Кнопка «Freeze» левее */
.freeze-link {
  right: 96px;
}

/* Hover-состояние кнопок */
.copy-link:hover,
.freeze-link:hover {
  background-color: #1e40af; /* Потемнее синий */
  color: #fff;
}
</style>
