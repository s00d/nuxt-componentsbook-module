<script setup>
import MyButton from './MyButton2.vue'
</script>

<template>
  <p>
    The <code>MyButton2</code> component is used to display a button with different styles and sizes.
  </p>

  <h2>🛠 Usage Examples</h2>

  <EnhancedPreview
    title="Simple Button"
    :component="MyButton"
    :props="{
      label: 'Click Me',
    }"
  />

  <h3>🔹 Different Styles</h3>
  <div class="button-group">
    <EnhancedPreview
      title="Primary Styles"
      :component="MyButton"
      :props="{
        label: 'Primary',
        variant: 'primary',
      }"
    />

    <EnhancedPreview
      title="Secondary Styles"
      :component="MyButton"
      :props="{
        label: 'Secondary',
        variant: 'secondary',
      }"
    />

    <EnhancedPreview
      title="Danger Styles"
      :component="MyButton"
      :props="{
        label: 'Danger',
        variant: 'danger',
      }"
    />
  </div>

  <h3>🔹 Different Sizes</h3>
  <div class="button-group">
    <EnhancedPreview
      title="Small Size"
      :component="MyButton"
      :props="{
        label: 'Small',
        size: 'sm',
      }"
    />

    <EnhancedPreview
      title="Medium Size"
      :component="MyButton"
      :props="{
        label: 'Medium',
        size: 'md',
      }"
    />

    <EnhancedPreview
      title="Large Size"
      :component="MyButton"
      :props="{
        label: 'Large',
        size: 'lg',
      }"
    />
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
