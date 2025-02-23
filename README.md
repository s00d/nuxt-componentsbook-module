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
- 🔄 **Supports dynamic prop manipulation, slot usage, and an optional props editor.**
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
    // Directory where `.stories.vue` files are located:
    componentsDir: 'components',
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

## Using `EnhancedPreview`

The `EnhancedPreview` component is the recommended way to embed and test your components interactively. It allows for:

- **Dynamic prop manipulation** (via either your own UI or the optional built-in Props Editor)
- **Event handling** (e.g., `@click="..."`)
- **Slots** usage (e.g., `<template #append>` or other named slots)
- **v-model** binding
- **Automatic code snippet generation** for copy-paste usage examples

### Basic Example

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

- `v-model` automatically binds the parent’s `modelValue` ref.
- `:props` passes other props directly to the component.
- `:emits` declares which events the component might emit.
- The slot `#append` is injected into `<slot name="append">` if your component uses it.

---

## `componentPropsMeta` for Automatic Props Editing

You can optionally provide `componentPropsMeta` to each `<EnhancedPreview>`. This activates an **inline props editor** (`<PropsEditor>`) where each prop is automatically mapped to a **text field**, **select**, **checkbox**, or **number** input.

### 1. Defining `componentPropsMeta`

For each prop, specify a `fieldType`:

- `text` → a simple text `<input>`
- `select` → a `<select>`, must also provide an `options: string[]`
- `checkbox` → a `<input type="checkbox" />`
- `number` → a `<input type="number" />`

**Example**:
```js
const componentPropsMeta = {
  label: { fieldType: 'text' },
  variant: {
    fieldType: 'select',
    options: ['primary', 'secondary', 'danger']
  },
  disabled: { fieldType: 'checkbox' },
  size: {
    fieldType: 'select',
    options: ['sm', 'md', 'lg']
  },
}
```

Then pass it to `<EnhancedPreview ... />`:

```vue
<EnhancedPreview
  :component="MyButton"
  :props="{ label: 'Click Me', variant: 'primary', disabled: false, size: 'md' }"
  :componentPropsMeta="componentPropsMeta"
/>
```

The built-in Props Editor appears, letting users **interactively** change these props. The underlying component updates live, and the code snippet also reflects the new props.

### 2. Optional Usage

- If you **omit** or pass `null` for `componentPropsMeta`, **no props editor** is shown.
- You can combine `componentPropsMeta` with your **own** manual controls in the `.stories.vue` file. Both approaches update the same reactive data, so they stay in sync.

### 3. Example with Manual + Automatic Controls

```vue
<script setup>
import { ref } from '#imports'
import MyButton from './MyButton.vue'
import EnhancedPreview from '~/components/EnhancedPreview.vue'

const label = ref('Click Me')
const variant = ref('primary')
const size = ref('md')

// Metadata:
const buttonPropsMeta = {
  label: { fieldType: 'text' },
  variant: {
    fieldType: 'select',
    options: ['primary', 'secondary', 'danger']
  },
  size: {
    fieldType: 'select',
    options: ['sm', 'md', 'lg']
  },
}
</script>

<template>
  <label>
    Label
    <input v-model="label" type="text" />
  </label>
  <label>
    Variant
    <select v-model="variant">
      <option value="primary">Primary</option>
      <option value="secondary">Secondary</option>
      <option value="danger">Danger</option>
    </select>
  </label>
  <label>
    Size
    <select v-model="size">
      <option value="sm">Small</option>
      <option value="md">Medium</option>
      <option value="lg">Large</option>
    </select>
  </label>

  <EnhancedPreview
    :component="MyButton"
    :props="{ label, variant, size }"
    :componentPropsMeta="buttonPropsMeta"
  />
</template>
```

Now you have **two** ways to set props: manually via your own inputs, or via the auto-generated editor. They both affect the same variables.

### 4. Custom Types or Advanced Logic

If you need other field types (like color pickers, sliders, multiple checkboxes, etc.), you can fork or extend the `PropsEditor.vue` to handle them. The module itself provides a **basic** structure, but you have **full control** to expand it.

---

# Advanced Usage: `useEnhancedPreview`

For users needing **complete** control—like custom watchers, advanced store bindings, or specialized events—the `useEnhancedPreview` composable is available. It:
- Lets you dynamically attach **listeners** or **v-model** watchers.
- Returns a `renderedComponent` you can put anywhere.
- Generates code snippets, can freeze/unfreeze them, etc.

Below is a short summary (for deeper details, see the [Advanced Examples](#)):

```ts
import { useEnhancedPreview } from 'nuxt-componentsbook-module'
// ...
const {
  renderedComponent,
  generatedCode,
  isFrozen,
  toggleFreeze,
  copyCode
} = useEnhancedPreview(myProps, myEmit, {
  fullVueFile: true,
  kebabCase: true,
  // ...
})
```

Then in your template:

```vue
<component :is="renderedComponent" />
<PreviewSpoiler>
  <PreviewCodeBlock :code="generatedCode" />
</PreviewSpoiler>
```

---

## How It Works
1. **The module scans** the specified `componentsDir` for `.stories.vue` files.
2. **Generates dynamic Vue pages** for each story and registers them with Nuxt.
3. **Provides a UI layout** for previewing and testing components interactively.
4. **Supports real-time editing** with automatic updates when files are modified.
5. **Enhances DevTools**, adding a **Components Book** tab for quick navigation.

---

## nuxt-i18n-micro Integration

When using **nuxt-i18n-micro**, you might want to ensure that locale prefixes (like `/en/`) are **not** applied to the Components Book routes. Doing so can break the generated routes. Therefore:

1. **Load `nuxt-componentsbook-module` first**
2. **Load `nuxt-i18n-micro` second**

in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-componentsbook-module', // order matters
    'nuxt-i18n-micro',
  ],
})
```

---

## 🛠 DevTools Integration

When running in development mode, a **Components Book** tab appears in Nuxt DevTools, providing an **iframe-based UI** for exploring stories. It offers a quick overview of all `.stories.vue` files, letting you jump directly to a desired component’s page.

---

## More Resources
- **[Live Demo](https://s00d.github.io/nuxt-componentsbook-module/componentsbook)** – See the module in action.
- **[Usage Examples](https://github.com/s00d/nuxt-componentsbook-module/tree/main/playground/components)** – Additional `.stories.vue` files for more patterns and ideas.

## 🤝 Contributing
Please feel free to submit issues and pull requests to improve this module.

## 📜 License
[MIT License](https://opensource.org/licenses/MIT)

---

**Enjoy a lighter, simpler alternative to Storybook** directly inside your Nuxt application!
