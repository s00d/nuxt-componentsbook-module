<template>
  <div class="componentsbook-page">
    <div>
      <h1>🟢 ${name} Component</h1>

      <div v-if="propsData.length">
        <h2>🔹 Props</h2>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Values</th>
              <th>Required</th>
              <th>Default Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(prop, key) in propsData"
              :key="key"
            >
              <td><b v-text="prop.name" /></td>
              <td v-text="prop.type ?? 'N/A'" />
              <td v-text="prop.values ?? 'N/A'" />
              <td v-text="prop.required ? '✅ Yes' : '❌ No'" />
              <td v-text="prop.defaultValue ?? 'N/A'" />
              <td v-text="prop.description ?? 'N/A'" />
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="eventsData.length">
        <h2>🔹 Events</h2>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(event, key) in eventsData"
              :key="key"
            >
              <td><b v-text="event.name" /></td>
              <td v-text="event.description ?? 'N/A'" />
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="slotsData.length">
        <h2>🔹 Slots</h2>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Description</th>
              <th>Bindings</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(slot, key) in slotsData"
              :key="key"
            >
              <td><b v-text="slot.name" /></td>
              <td v-text="slot.description ?? 'N/A'" />
              <td v-text="slot.bindings ?? 'N/A'" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <StoryComponent />

    <div>
      <PreviewSpoiler
        v-if="showSource"
        hide-label="▼ Hide Component Code"
        show-label="▶ Show Component Code"
      >
        <PreviewCodeBlock
          v-if="showSource"
          :code="sourceCode"
          :is-frozen="false"
          :show-frozen="false"
          copy-button-text="📋 Copy"
          @copy="copyCode"
        />
      </PreviewSpoiler>
    </div>
  </div>
</template>

<script setup>
import StoryComponent from '${importPath}'

const propsData = ref('${propsData}')
const eventsData = ref('${eventsData}')
const slotsData = ref('${slotsData}')

const showSource = ref('${showSource}')
const sourceCode = ref('${sourceCode}')

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(sourceCode.value)
  }
  catch (err) {
    console.error('Failed to copy:', err)
  }
}

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
.componentsbook-page {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow: scroll;
  height: 100%;
  min-width: 800px;
  margin: 0 auto;
}

/* Заголовки */
.componentsbook-page h1,
.componentsbook-page h2,
.componentsbook-page h3,
.componentsbook-page h4,
.componentsbook-page h5,
.componentsbook-page h6 {
  font-weight: bold;
  margin-bottom: 1rem;
}

.componentsbook-page h1 {
  font-size: 2rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.3rem;
}

.componentsbook-page h2 {
  font-size: 1.75rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.2rem;
}

.componentsbook-page h3 {
  font-size: 1.5rem;
}

.componentsbook-page h4 {
  font-size: 1.25rem;
}

.componentsbook-page h5,
.componentsbook-page h6 {
  font-size: 1rem;
}

/* Текст */
.componentsbook-page p {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #444;
}

/* Списки */
.componentsbook-page ul,
.componentsbook-page ol {
  margin-left: 20px;
}

.componentsbook-page ul {
  list-style-type: disc;
}

.componentsbook-page ol {
  list-style-type: decimal;
}

.componentsbook-page ul li,
.componentsbook-page ol li {
  margin-bottom: 0.5rem;
}

/* Ссылки */
.componentsbook-page a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.componentsbook-page a:hover {
  text-decoration: underline;
}

/* Светлая тема для блока кода */
.componentsbook-page pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 14px;
  border: 1px solid #444;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.componentsbook-page pre code {
  display: block;
  padding: 0;
  margin: 0;
}

.componentsbook-page pre code {
  font-family: 'Courier New', monospace;
}

/* Инлайн-код */
.componentsbook-page code {
  color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

/* Блок-цитаты */
.componentsbook-page blockquote {
  border-left: 4px solid #ccc;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  color: #666;
  background: #f9f9f9;
  font-style: italic;
}

/* Таблицы */
.componentsbook-page table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.componentsbook-page th,
.componentsbook-page td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.componentsbook-page th {
  background: #f4f4f4;
  font-weight: bold;
}

/* Спойлер с кодом */
.code-spoiler {
  margin-top: 20px;
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.code-spoiler summary {
  cursor: pointer;
  font-weight: bold;
  color: #007bff;
}

.code-spoiler summary:hover {
  text-decoration: underline;
}
</style>
