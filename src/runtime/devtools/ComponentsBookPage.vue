<template>
  <div class="componentsbook-page">
    <!-- Заголовок с именем компонента -->
    <div>
      <h1>🟢 ${name} Component</h1>

      <!-- Таблица Props -->
      <div v-if="propsData.length">
        <h2>🔹 Props</h2>
        <table class="table">
          <thead class="table-thead">
            <tr class="table-header-row">
              <th class="table-header-cell">
                Prop
              </th>
              <th class="table-header-cell">
                Type
              </th>
              <th class="table-header-cell">
                Values
              </th>
              <th class="table-header-cell">
                Required
              </th>
              <th class="table-header-cell">
                Default Value
              </th>
              <th class="table-header-cell">
                Description
              </th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr
              v-for="(prop, key) in propsData"
              :key="key"
              class="table-row"
            >
              <td class="table-cell">
                <b v-text="prop.name" />
              </td>
              <td
                class="table-cell"
                v-text="prop.type ?? 'N/A'"
              />
              <td
                class="table-cell"
                v-text="prop.values ?? 'N/A'"
              />
              <td
                class="table-cell"
                v-text="prop.required ? '✅ Yes' : '❌ No'"
              />
              <td
                class="table-cell"
                v-text="prop.defaultValue ?? 'N/A'"
              />
              <td
                class="table-cell"
                v-text="prop.description ?? 'N/A'"
              />
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Таблица Events -->
      <div v-if="eventsData.length">
        <h2>🔹 Events</h2>
        <table class="table">
          <thead class="table-thead">
            <tr class="table-header-row">
              <th class="table-header-cell">
                Prop
              </th>
              <th class="table-header-cell">
                Description
              </th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr
              v-for="(event, key) in eventsData"
              :key="key"
              class="table-row"
            >
              <td class="table-cell">
                <b v-text="event.name" />
              </td>
              <td
                class="table-cell"
                v-text="event.description ?? 'N/A'"
              />
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Таблица Slots -->
      <div v-if="slotsData.length">
        <h2>🔹 Slots</h2>
        <table class="table">
          <thead class="table-thead">
            <tr class="table-header-row">
              <th class="table-header-cell">
                Slot
              </th>
              <th class="table-header-cell">
                Description
              </th>
              <th class="table-header-cell">
                Bindings
              </th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr
              v-for="(slot, key) in slotsData"
              :key="key"
              class="table-row"
            >
              <td class="table-cell">
                <b v-text="slot.name" />
              </td>
              <td
                class="table-cell"
                v-text="slot.description ?? 'N/A'"
              />
              <td
                class="table-cell"
                v-text="slot.bindings ?? 'N/A'"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Ваш компонент-демо -->
    <StoryComponent />

    <!-- Спойлер с кодом (если нужно показать исходник) -->
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

/**
 * Пример «хака» для Nuxt DevTools (если нужно).
 * Следите, чтобы этот код выполнялся только на клиенте,
 * иначе будет ошибка при сборке (document не определён).
 */
if (import.meta.client) {
  const observer = new MutationObserver(() => {
    const devTools = document.getElementById('nuxt-devtools-container')
    if (devTools) {
      console.log('[componentsbook] Remove Nuxt DevTools from DOM')
      devTools.remove()
      observer.disconnect()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })
}
</script>

<style scoped>
/* ---------------------------------------
   Основной контейнер страницы
---------------------------------------- */
.componentsbook-page {
  background-color: white;
  padding: 24px;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-y: auto;
  height: 100%;
  min-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px dashed #ccc;
}

/* Заголовки */
.componentsbook-page h1,
.componentsbook-page h2,
.componentsbook-page h3,
.componentsbook-page h4,
.componentsbook-page h5,
.componentsbook-page h6 {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #222;
  -webkit-font-smoothing: antialiased;
}

.componentsbook-page h1 {
  font-size: 1.8rem;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.3rem;
}
.componentsbook-page h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.2rem;
}
/* Можно добавить стили для h3-h6 при необходимости */

/* ---------------------------------------
   Стили для «карточных» таблиц
   с использованием КЛАССОВ
---------------------------------------- */
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

/* Шапка (thead) */
.table-thead {
  background-color: #f4f4f4;
}

/* Строка в шапке */
.table-header-row {
  border-bottom: 1px solid #ddd;
}

/* Ячейка в шапке */
.table-header-cell {
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: left;
  color: #444;
  border-bottom: 1px solid #ddd;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Тело (tbody) */
.table-body {
  /* Можно добавить свои стили, если нужно */
}

/* Строка в теле */
.table-row {
  border-bottom: 1px solid #eee;
}

/* Ячейка в теле */
.table-cell {
  padding: 12px;
  font-size: 0.95rem;
  color: #333;
  vertical-align: top;
  line-height: 1.4;
}

/* «Зебра»-эффект (опционально) */
.table-body .table-row:nth-child(even) {
  background-color: #fcfcfc;
}

/* Hover-эффект строки (опционально) */
.table-body .table-row:hover {
  background-color: #f9fafb;
}

/* Убираем нижнюю границу у последней строки */
.table-row:last-child {
  border-bottom: none;
}
</style>
