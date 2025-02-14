<script setup>
import MyButton from './MyButton.vue'
</script>

<template>
  <h1>🟢 MyButton Component</h1>
  <p>
    Компонент <code>MyButton</code> используется для отображения кнопки с различными стилями и размерами.
  </p>

  <h2>🛠 Примеры использования</h2>

  <h3>🟢 Простая кнопка</h3>
  <MyButton label="Нажми меня" />

  <h3>🔹 Разные стили</h3>
  <div class="button-group">
    <MyButton
      label="Primary"
      variant="primary"
    />
    <MyButton
      label="Secondary"
      variant="secondary"
    />
    <MyButton
      label="Danger"
      variant="danger"
    />
  </div>

  <h3>🔹 Разные размеры</h3>
  <div class="button-group">
    <MyButton
      label="Small"
      size="sm"
    />
    <MyButton
      label="Medium"
      size="md"
    />
    <MyButton
      label="Large"
      size="lg"
    />
  </div>
</template>
