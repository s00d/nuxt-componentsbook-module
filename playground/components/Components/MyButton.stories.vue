<script setup>
import MyButton from './MyButton.vue'
import { useCodeGenerator } from '#imports'

const { renderedComponent: renderedComponent1, generatedCode: generatedCode1, copyToClipboard: copyToClipboard1 } = useCodeGenerator(MyButton, { label: 'Click Me' })
const { renderedComponent: renderedComponent2, generatedCode: generatedCode2, copyToClipboard: copyToClipboard2 } = useCodeGenerator(MyButton, { label: 'Primary', variant: 'primary' })
const { renderedComponent: renderedComponent3, generatedCode: generatedCode3, copyToClipboard: copyToClipboard3 } = useCodeGenerator(MyButton, { label: 'Secondary', variant: 'secondary' })
const { renderedComponent: renderedComponent4, generatedCode: generatedCode4, copyToClipboard: copyToClipboard4 } = useCodeGenerator(MyButton, { label: 'Danger', variant: 'danger' })
const { renderedComponent: renderedComponent5, generatedCode: generatedCode5, copyToClipboard: copyToClipboard5 } = useCodeGenerator(MyButton, { label: 'Small', size: 'sm' })
const { renderedComponent: renderedComponent6, generatedCode: generatedCode6, copyToClipboard: copyToClipboard6 } = useCodeGenerator(MyButton, { label: 'Medium', size: 'md' })
const { renderedComponent: renderedComponent7, generatedCode: generatedCode7, copyToClipboard: copyToClipboard7 } = useCodeGenerator(MyButton, { label: 'Large', size: 'lg' })
</script>

<template>
  <p>
    The <code>MyButton</code> component is used to display a button with different styles and sizes.
  </p>

  <h2>🛠 Usage Examples</h2>

  <h3>🟢 Simple Button</h3>
  <component :is="renderedComponent1" />
  <CodeBlock
    :generated-code="generatedCode1"
    :copy-to-clipboard="copyToClipboard1"
  />

  <h3>🔹 Different Styles</h3>
  <div class="button-group">
    <div>
      <component :is="renderedComponent2" />
      <CodeBlock
        :generated-code="generatedCode2"
        :copy-to-clipboard="copyToClipboard2"
      />
    </div>

    <div>
      <component :is="renderedComponent3" />
      <CodeBlock
        :generated-code="generatedCode3"
        :copy-to-clipboard="copyToClipboard3"
      />
    </div>

    <div>
      <component :is="renderedComponent4" />
      <CodeBlock
        :generated-code="generatedCode4"
        :copy-to-clipboard="copyToClipboard4"
      />
    </div>
  </div>

  <h3>🔹 Different Sizes</h3>
  <div class="button-group">
    <div>
      <component :is="renderedComponent5" />
      <CodeBlock
        :generated-code="generatedCode5"
        :copy-to-clipboard="copyToClipboard5"
      />
    </div>

    <div>
      <component :is="renderedComponent6" />
      <CodeBlock
        :generated-code="generatedCode6"
        :copy-to-clipboard="copyToClipboard6"
      />
    </div>

    <div>
      <component :is="renderedComponent7" />
      <CodeBlock
        :generated-code="generatedCode7"
        :copy-to-clipboard="copyToClipboard7"
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
