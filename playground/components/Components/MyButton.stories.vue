<script setup>
import MyButton from './MyButton.vue'
import { useCodeGenerator } from '#imports'

const example1 = useCodeGenerator('MyButton', { label: 'Click Me' })
const example2 = useCodeGenerator('MyButton', { label: 'Primary', variant: 'primary' })
const example3 = useCodeGenerator('MyButton', { label: 'Secondary', variant: 'secondary' })
const example4 = useCodeGenerator('MyButton', { label: 'Danger', variant: 'danger' })
const example5 = useCodeGenerator('MyButton', { label: 'Small', size: 'sm' })
const example6 = useCodeGenerator('MyButton', { label: 'Medium', size: 'md' })
const example7 = useCodeGenerator('MyButton', { label: 'Large', size: 'lg' })
</script>

<template>
  <h1>🟢 MyButton Component</h1>
  <p>
    The <code>MyButton</code> component is used to display a button with different styles and sizes.
  </p>

  <h2>🛠 Usage Examples</h2>

  <h3>🟢 Simple Button</h3>
  <MyButton label="Click Me" />
  <CodeBlock
    :generated-code="example1.generatedCode"
    :copy-to-clipboard="example1.copyToClipboard"
  />

  <h3>🔹 Different Styles</h3>
  <div class="button-group">
    <div>
      <MyButton
        label="Primary"
        variant="primary"
      />
      <CodeBlock
        :generated-code="example2.generatedCode"
        :copy-to-clipboard="example2.copyToClipboard"
      />
    </div>

    <div>
      <MyButton
        label="Secondary"
        variant="secondary"
      />
      <CodeBlock
        :generated-code="example3.generatedCode"
        :copy-to-clipboard="example3.copyToClipboard"
      />
    </div>

    <div>
      <MyButton
        label="Danger"
        variant="danger"
      />
      <CodeBlock
        :generated-code="example4.generatedCode"
        :copy-to-clipboard="example4.copyToClipboard"
      />
    </div>
  </div>

  <h3>🔹 Different Sizes</h3>
  <div class="button-group">
    <div>
      <MyButton
        label="Small"
        size="sm"
      />
      <CodeBlock
        :generated-code="example5.generatedCode"
        :copy-to-clipboard="example5.copyToClipboard"
      />
    </div>

    <div>
      <MyButton
        label="Medium"
        size="md"
      />
      <CodeBlock
        :generated-code="example6.generatedCode"
        :copy-to-clipboard="example6.copyToClipboard"
      />
    </div>

    <div>
      <MyButton
        label="Large"
        size="lg"
      />
      <CodeBlock
        :generated-code="example7.generatedCode"
        :copy-to-clipboard="example7.copyToClipboard"
      />
    </div>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
