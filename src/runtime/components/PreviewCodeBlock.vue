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
      @click.prevent="$emit('copy')"
    >
      {{ copyButtonText }}
    </a>

    <!-- Стараемся, чтобы внутри <pre> не было лишних пробелов/переносов -->
    <pre class="enhanced-preview__code"><code v-html="highlightedCode" /></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('javascript', javascript)

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

  return lines.map(line => !line.trim() ? '' : line.slice(minIndent)).join('\n')
}

const props = defineProps<{
  code: string
  showFrozen: boolean
  isFrozen: boolean
  copyButtonText: string
}>()

defineEmits(['copy', 'toggle-freeze'])

const highlightedCode = computed(() => {
  const normalizedCode = removeLeadingIndent(props.code)
  const result = hljs.highlight('javascript', normalizedCode)
  return result.value
})
</script>

<style scoped>
.code-container {
  /* Примерно светлый фон */
  background: #2f3136;
  color: #ccc;

  position: relative;
  border-radius: 6px;
  padding: 12px;
  margin-top: 8px;
  overflow: auto;
  border: 1px solid #ccc;
}

.enhanced-preview__code {
  /* Поскольку используем highlight.js, пусть сам выставляет нужный display,
     но убираем лишние отступы. */
  font-family: monospace;
  font-size: 14px;
  margin-top: 16px;
  white-space: pre-wrap; /* перенос длинных строк */
  word-wrap: break-word;
}

/* Переопределяем потенциальные padding у .hljs */
.enhanced-preview__code .hljs {
  padding: 0 !important;
  margin: 0 !important;
}

.freeze-link,
.copy-link {
  position: absolute;
  top: 10px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  color: #a5d6ff;
  transition: color 0.2s ease-in-out;
}

.freeze-link:hover,
.copy-link:hover {
  color: #007bff;
}

.copy-link {
  right: 10px;
}

.freeze-link {
  right: 80px;
}
</style>
