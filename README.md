[![npm version](https://img.shields.io/npm/v/nnuxt-componentsbook-module/latest?style=for-the-badge)](https://www.npmjs.com/package/nuxt-componentsbook-module)
[![npm downloads](https://img.shields.io/npm/dw/nuxt-componentsbook-module?style=for-the-badge)](https://www.npmjs.com/package/nuxt-componentsbook-module)
[![License](https://img.shields.io/npm/l/nuxt-componentsbook-module?style=for-the-badge)](https://www.npmjs.com/package/nuxt-componentsbook-module)
[![Nuxt](https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js&style=for-the-badge)](https://nuxt.com)
[![Donate](https://img.shields.io/badge/Donate-ff4081?style=for-the-badge)](https://www.donationalerts.com/r/s00d88)

# Components Book Module for Nuxt


![header](https://github.com/s00d/nuxt-componentsbook-module/blob/main/images/header.jpg?raw=true)

## Overview
This module provides a Storybook-like experience for Nuxt components, allowing you to document and test your Vue components using `.stories.vue` files. It scans a specified directory for story files, generates dynamic routes, and creates an interactive UI for viewing and testing components.

This module serves as a lightweight alternative to Storybook, designed specifically for Nuxt projects. Unlike Storybook, which can be heavy and complex to configure, this module is built with Vue and seamlessly integrates into Nuxt, making setup and usage much simpler. All stories are written using Vue components, ensuring a more intuitive and consistent development experience within your project.

![img1](https://github.com/s00d/nuxt-componentsbook-module/blob/main/images/img1.gif?raw=true)

![img2](https://github.com/s00d/nuxt-componentsbook-module/blob/main/images/img2.gif?raw=true)

## Features
- Automatically scans and registers `.stories.vue` files as pages.
- Generates Vue files dynamically for each story.
- Extracts and displays component props in a structured table.
- Provides hot reloading with file watching.
- Adds a Nuxt DevTools tab for easy component exploration.
- 📌 Supports `CodeBlock.vue` for displaying and copying generated component usage.
- 🚀 Provides `useCodeGenerator.ts` for automatic code snippet generation.

## Installation
```bash
npm install --save-dev nuxt-componentsbook-module
```

or

```bash
yarn add --dev nuxt-componentsbook-module
```

## Usage

### 1. Register the Module
Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-componentsbook-module',
  ],
  componentsBook: {
    componentsDir: 'components', // Directory where `.stories.vue` files are located
    disabled: false,
    cache: true,
  },
})
```

### 2. Creating a Story
Create a `.stories.vue` file in your components directory:

**MyInput.stories.vue**
```vue
<script setup>
  import { ref } from 'vue'
  import CustomInput from './MyInput.vue'
  import { useCodeGenerator } from '#imports'

  const modelValue = ref('')
  const label = ref('Enter Text')
  const type = ref<'text' | 'password' | 'email' | 'number'>('text')
  const placeholder = ref('Type something...')
  const disabled = ref(false)
  const readonly = ref(false)
  const helperText = ref('This is a helper text.')
  const size = ref<'sm' | 'md' | 'lg'>('md')

  const { generatedCode, copyToClipboard } = useCodeGenerator(CustomInput, {
    id: 'input',
    'v-model': modelValue,
    label,
    type,
    placeholder,
    disabled,
    readonly,
    'helper-text': helperText,
    size,
  })
</script>

<template>
  <h1>🟢 CustomInput Component</h1>
  <p>
    The <code>CustomInput</code> component is a versatile input field with multiple configurations.
  </p>

  <h2>🛠 Interactive Controls</h2>
  <div class="controls">
    <label>
      Label:
      <input v-model="label" type="text">
    </label>

    <label>
      Type:
      <select v-model="type">
        <option value="text">Text</option>
        <option value="password">Password</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
      </select>
    </label>

    <label>
      Placeholder:
      <input v-model="placeholder" type="text">
    </label>

    <label>
      <input v-model="disabled" type="checkbox"> Disabled
    </label>

    <label>
      <input v-model="readonly" type="checkbox"> Readonly
    </label>

    <label>
      Helper Text:
      <input v-model="helperText" type="text">
    </label>

    <label>
      Size:
      <select v-model="size">
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>
  </div>

  <h2>🔹 Preview</h2>
  <CustomInput
    id="input"
    v-model="modelValue"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :helper-text="helperText"
    :size="size"
  />

  <h2>📋 Generated Code</h2>
  <CodeBlock :generated-code="generatedCode" :copy-to-clipboard="copyToClipboard" />
</template>
```

### Using `renderedComponent` for Simpler Embedding

In addition to returning only `generatedCode` and `copyToClipboard`, you can have `useCodeGenerator` return a special `renderedComponent`. This allows you to embed your component dynamically via `<component :is="renderedComponent" />`. Below is an **example of how to modify** your `.stories.vue` file to use the `renderedComponent` approach:

```diff
<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from './MyInput.vue'
import { useCodeGenerator } from '#imports'

const modelValue = ref('')
const label = ref('Enter Text')
const type = ref<'text' | 'password' | 'email' | 'number'>('text')
const placeholder = ref('Type something...')
const disabled = ref(false)
const readonly = ref(false)
const helperText = ref('This is a helper text.')
const size = ref<'sm' | 'md' | 'lg'>('md')

- // Previously:
- // const { generatedCode, copyToClipboard } = useCodeGenerator(CustomInput, { ... })

+ // Now:
+ const { renderedComponent, generatedCode, copyToClipboard } = useCodeGenerator(CustomInput, {
+   'id': 'input',
+   'v-model': modelValue,
+   label,
+   type,
+   placeholder,
+   disabled,
+   readonly,
+   'helper-text': helperText,
+   size,
+ })
</script>

<template>
  ...
  <h2>🔹 Preview</h2>
- <CustomInput
-   id="input"
-   v-model="modelValue"
-   :label="label"
-   :type="type"
-   :placeholder="placeholder"
-   :disabled="disabled"
-   :readonly="readonly"
-   :helper-text="helperText"
-   :size="size"
- />
+ <component :is="renderedComponent" />

  <h2>📋 Generated Code</h2>
  <CodeBlock
    :generated-code="generatedCode"
    :copy-to-clipboard="copyToClipboard"
  />
</template>
```

> **Note**: Using `renderedComponent` is a convenient way to embed the component in a single line. However, this approach is more limited when dealing with advanced use cases—like complex slot usage or additional wrapper logic. In those scenarios, you may find the **previous, direct approach** (`<CustomInput ... />`) to be more flexible and better suited to your needs.

### 3. Running the Components Book
Start your Nuxt development server:

```bash
npm run dev
```

Visit `/componentsbook` in your browser to see the list of stories.

---

## How It Works
1. The module scans the specified `componentsDir` for `.stories.vue` files.
2. It generates dynamic Vue pages for each story and registers them with Nuxt.
3. A layout (`componentsbook-layout`) is added to encapsulate the story viewer.
4. A prop table is generated for each component based on its script setup.
5. File watching via `chokidar` enables automatic updates when stories are modified.
6. A DevTools tab is added for quick access in Nuxt development mode.

---

## 🛠 **DevTools Integration**
When running in development mode, a new DevTools tab called **Components Book** is available, providing an iframe-based UI to explore component stories.

---

## 🤝 **Contributing**
Feel free to submit issues and pull requests to improve the module.
