# Components Book Module for Nuxt

![header](https://github.com/s00d/nuxt-componentsbook-module/blob/main/images/header.jpg?raw=true)

## Overview
This module provides a **Storybook-like experience** for Nuxt components, allowing you to document and test your Vue components using `.stories.vue` files. It automatically scans a specified directory for story files, generates dynamic routes, and creates an interactive UI for viewing and testing components.

Unlike Storybook, which can be complex and heavy, this module is **lightweight and seamlessly integrates into Nuxt**, making it easy to set up and use. All stories are written as standard Vue components, ensuring a **smooth and intuitive** development experience.

![img1](https://github.com/s00d/nuxt-componentsbook-module/blob/main/images/img1.gif?raw=true)
![img2](https://github.com/s00d/nuxt-componentsbook-module/blob/main/images/img2.gif?raw=true)

## Features
- 📦 **Automatic scanning of `.stories.vue` files** and registration as pages.
- ⚡ **Live reloading** with file-watching support.
- 🛠 **Extracts and displays component props** dynamically.
- 🏗 **Nuxt DevTools Integration** for quick access.
- 📋 **Built-in component previewing with `EnhancedPreview`.**
- 🔄 **Supports dynamic prop manipulation and slot usage.**
- 🚀 **Flexible component embedding with event handling support.**

## Installation
```bash
npm install --save-dev nuxt-componentsbook-module
```

or

```bash
yarn add --dev nuxt-componentsbook-module
```

## Setup

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
To document a component, create a `.stories.vue` file in your components directory:

#### **MyInput.stories.vue** (Example with `EnhancedPreview`)

```vue
<script setup>
import { ref } from '#imports'
import CustomInput from './MyInput.vue'

const modelValue = ref('')
const label = ref('Enter Text')
const type = ref<'text' | 'password' | 'email' | 'number'>('text')
const placeholder = ref('Type something...')
const disabled = ref(false)
const readonly = ref(false)
const helperText = ref('This is a helper text.')
const size = ref<'sm' | 'md' | 'lg'>('md')
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
  </div>

  <h2>🔹 Preview</h2>
  <EnhancedPreview
    v-model="modelValue"
    :component="CustomInput"
    :props="{ label, type, placeholder, disabled, readonly, 'helper-text': helperText, size }"
    :emits="['click']"
    @click="console.log('Clicked!')"
  />
</template>
```

### 3. Running the Components Book
Start your Nuxt development server:

```bash
npm run dev
```

Visit `/componentsbook` in your browser to see the list of stories.

---

## 📌 **Using `EnhancedPreview`**

The `EnhancedPreview` component is the recommended way to embed and test your components interactively. It allows for dynamic prop manipulation, event handling, and slot usage.

### **Example Usage**
```vue
<EnhancedPreview
  v-model="modelValue"
  :component="CustomInput"
  :props="{
    label: 'Enter Text',
    type: 'text',
    placeholder: 'Type something...',
    disabled: false,
    readonly: false,
    'helper-text': 'This is a helper text.',
    size: 'md',
  }"
  :emits="['click']"
  @click="handleClick"
>
  <template #append>
    test slot
  </template>
</EnhancedPreview>
```

### **Key Features of `EnhancedPreview`**
- **Supports `v-model`**: Automatically binds `v-model` values.
- **Handles events dynamically**: Passes events such as `@click`, `@hover`, and custom events.
- **Slot support**: Allows injecting content into component slots.
- **Live preview**: Updates props and re-renders instantly.
- **Code generation**: Displays and copies usage examples.

---

## How It Works
1. **The module scans** the specified `componentsDir` for `.stories.vue` files.
2. **Generates dynamic Vue pages** for each story and registers them with Nuxt.
3. **Provides a UI layout** for previewing and testing components interactively.
4. **Supports real-time editing** with automatic updates when files are modified.
5. **Enhances DevTools**, adding a new tab called **Components Book**.


## nuxt-i18n-micro integration

Below is an updated note clarifying **why you should place `nuxt-componentsbook-module` **before** `nuxt-i18n-micro`** in your `modules` array, given that in *this specific setup*, having the locale prefix added to Components Book routes can cause problems.

---

## Integration with **nuxt-i18n-micro**

### Example `nuxt.config.ts`

```ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: './basic',

  // Order here is important:
  // 1) 'nuxt-componentsbook-module' (Components Book)
  // 2) 'nuxt-i18n-micro'
  modules: [
    'nuxt-componentsbook-module',
    'nuxt-i18n-micro',
  ],
})
```

### Why the order matters here

- When **`nuxt-i18n-micro`** is **after** the Components Book module, it will attempt to apply locale prefixes (e.g., `/en/`) to the already-registered Components Book routes.
- In **this particular setup**, adding the prefix can break your story routes (for example, `/en/componentsbook/...` might conflict with how the Components Book module is generating or managing its pages).
- By listing **`nuxt-componentsbook-module` first** and **`nuxt-i18n-micro` second**, you avoid having a locale prefix automatically prepended to the Components Book routes, which prevents potential route conflicts.

---

## 🛠 **DevTools Integration**
When running in development mode, a **Components Book** tab appears in Nuxt DevTools, providing an **iframe-based UI** for exploring stories.

---

## 🤝 **Contributing**
Feel free to submit issues and pull requests to improve the module.

## 📜 License
[MIT License](https://opensource.org/licenses/MIT)

