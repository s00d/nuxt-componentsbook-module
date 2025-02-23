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


Because it is so flexible, you can create a near-complete “in-component Storybook experience,” connecting your **state management** (Vuex, Pinia, or custom Refs/Reactives) and a wide range of events to a single preview component.

### **Key Features of `EnhancedPreview`**
- **Supports `v-model`**: Automatically binds `v-model` values.
- **Handles events dynamically**: Passes events such as `@click`, `@hover`, and custom events.
- **Slot support**: Allows injecting content into component slots.
- **Live preview**: Updates props and re-renders instantly.
- **Code generation**: Displays and copies usage examples.


---


## Using `componentPropsMeta` for Automatic Props Editing

One powerful addition to the **Components Book** workflow is the optional `componentPropsMeta` feature. By passing a **metadata object** that describes each prop’s **input type** (`text`, `select`, `checkbox`, `number`, etc.) and any **available options**, you unlock a **dynamic Props Editor** within each `<EnhancedPreview>` block.

### 1. Basic Concept

- **What is `componentPropsMeta`?**  
  It is an **object** where **keys** match the **names of your props**, and **values** describe how you want those props to be edited. For example:

  ```js
  const componentPropsMeta = {
    label: {
      fieldType: 'text', // a simple text field
    },
    variant: {
      fieldType: 'select',
      options: ['primary', 'secondary', 'danger'], // must choose one
    },
    disabled: {
      fieldType: 'checkbox', // true/false
    },
    items: {
      fieldType: 'number', // numeric input
    },
  }
  ```

- **How does it work?**  
  When `EnhancedPreview` detects you have provided a `componentPropsMeta` object, it renders a `<PropsEditor>` panel (if enabled) that automatically creates the correct input controls for each prop:
  - `fieldType: 'text'` → A standard text input.
  - `fieldType: 'select'` → A dropdown `<select>` (requires an `options` array).
  - `fieldType: 'checkbox'` → A checkbox input (for booleans).
  - `fieldType: 'number'` → A numeric input field.

- **Optional**: If you do **not** pass `componentPropsMeta`, or you set it to `null`, then **the editor does not appear** (unless you implement your own custom logic). This is helpful for scenarios where you want a read-only or static preview.

### 2. Declaring `componentPropsMeta`

In your `.stories.vue` file (or anywhere else you configure `<EnhancedPreview>`), you can define and pass in `componentPropsMeta`. For example:

```vue
<script setup>
import MyButton from './MyButton.vue'

const buttonPropsMeta = {
  label: {
    fieldType: 'text',
  },
  variant: {
    fieldType: 'select',
    options: ['primary', 'secondary', 'danger'],
  },
  disabled: {
    fieldType: 'checkbox',
  },
  size: {
    fieldType: 'select',
    options: ['sm', 'md', 'lg'],
  },
}
</script>

<template>
  <!-- Will automatically render an editor for 'label', 'variant', 'disabled', 'size' -->
  <EnhancedPreview
    :component="MyButton"
    :props="{ label: 'Example', variant: 'primary', disabled: false, size: 'md' }"
    :componentPropsMeta="buttonPropsMeta"
  />
</template>
```

With this, an interactive panel appears (assuming the Editor is turned on in your `EnhancedPreview`), displaying:
- A **text field** for `label`
- A **select dropdown** for `variant` (with `primary`, `secondary`, `danger`)
- A **checkbox** for `disabled`
- Another **select dropdown** for `size` (`sm`, `md`, `lg`)

When the user changes these inputs, it automatically updates the live preview **and** the code snippet in real time.

### 3. Supported `fieldType` Values

The built-in `<PropsEditor>` typically recognizes the following:

| `fieldType`  | UI Control                    | Notes                                                                                    |
|--------------|-------------------------------|------------------------------------------------------------------------------------------|
| `'text'`     | A standard text `<input />`   | For general string props, placeholders, or anything that needs free text input           |
| `'select'`   | A `<select>` with `<option>`  | Must also provide an `options` array, e.g. `{ fieldType: 'select', options: ['a','b'] }` |
| `'checkbox'` | A `<input type="checkbox" />` | For boolean props (`true`/`false`)                                                       |
| `'number'`   | A `<input type="number" />`   | For numeric props (model is parsed as number)                                            |

> **Default fallback**: If a prop does not match any known `fieldType`, it defaults to a `'text'` field.

### 4. Merging with Manual Controls

Sometimes you may have your **own** fields in the story to manually set props, as well as using `componentPropsMeta`. Both will **synchronize** since they update the same reactive data under the hood. For example:

```vue
<script setup>
import MyButton from './MyButton.vue'
import { ref } from '#imports'

const label = ref('Click Me')
const variant = ref('primary')
const size = ref('md')

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
  <div>
    <!-- Manual controls -->
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
  </div>
</template>
```

Here:
- The manual `<label><input>` blocks control the same reactive `label`, `variant`, `size`.
- The `componentPropsMeta` in `EnhancedPreview` also controls the same props.
- Changing **either** the manual input or the generated editor from `PropsEditor` will reflect on the final preview.

### 5. What if I omit `componentPropsMeta`?

If you **do not** supply `componentPropsMeta` (or set it to `null`), the internal `PropsEditor` will **not** render. This is handy if you want a read-only or purely “static” preview of the component. For example:

```vue
<EnhancedPreview
  :component="MyButton"
  :props="{ label: 'Click Me', variant: 'primary' }"
  :componentPropsMeta="null" <!-- or just omit it -->
/>
```

No prop editor panel appears — it’s simply a static preview with the standard code snippet and spoiler functionality.

### 6. Advanced or Custom Field Types

By default, the provided `<PropsEditor>` handles the types `'text'`, `'select'`, `'checkbox'`, `'number'`. If you need **other** types of fields (like sliders, color pickers, radio buttons, date pickers, etc.), you can **fork** or extend the `<PropsEditor>` logic:

1. Add a new `fieldType: 'slider'`.
2. Render a `<input type="range" />`.
3. Possibly pass extra metadata in your `componentPropsMeta`, like `{ min: 0, max: 100 }`.
4. The rest of the logic remains the same (it would still emit `update:componentProps` etc.).

### 7. Putting It All Together

**`componentPropsMeta`** is a straightforward yet powerful way to turn your “static” component previews into **interactive, dynamic** experiences—very similar to how a small Storybook panel might function.

1. **Pass** the metadata object to `<EnhancedPreview :componentPropsMeta="someMetaObj" />`.
2. **Provide** matching keys for each prop you want to edit.
3. **Choose** the `fieldType` best suited for that prop. If needed, add an `options` array for `select`.
4. **Optionally** keep your existing manual controls or remove them entirely—both approaches are valid.

---

### Summary

- `componentPropsMeta` is **fully optional**.
- When provided, `<EnhancedPreview>` spawns a `<PropsEditor>` panel (if that feature is enabled).
- You can define different input types (`text`, `select`, `checkbox`, `number`) and specify **lists of options** for selects.
- If you omit or set `componentPropsMeta = null`, no in-preview editor will be shown (allowing for simpler or purely static previews).

This flexibility lets you **quickly experiment with your components’ props** and produce self-documenting usage examples that keep your team and future maintainers well-informed.

---

# Enhanced usage(useEnhancedPreview)

Below is an **advanced example** of how you can leverage `useEnhancedPreview` to gain complete control over a component’s state, events, and display. This approach requires a bit more work, but it allows you to integrate **fully custom store logic** or any other advanced patterns you need.

## Overview

The `useEnhancedPreview` composable is an **extended utility** that goes beyond a simple component preview. It provides you with:

1. **Reactive props and `v-model` binding**
2. **Event forwarding** (`emits`)
3. **Additional event listeners** (e.g., `onClick`, `onFocus`, etc.)
4. **Slot serialization** (for generating code snippets)
5. **Code copying / freezing** features

### Signature

```ts
useEnhancedPreview(
  props: UseEnhancedPreviewProps,
  emit: (event: string, ...args: unknown[]) => void,
)
```

### **Parameters**

`props` (object) includes the following fields:

| Field          | Type                                                                     | Description                                                                                                                                                                                                                                                                                                        |
|----------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **component**  | `DefineComponent \| string \| unknown`                                   | The main component to render. <br> This can be: <br> 1) A **string** representing a native HTML tag (e.g., `"button"`) <br> 2) A **Vue component** (e.g., `markRaw(MyComponent)`) <br> 3) A dynamic reference to a component loaded at runtime.                                                                    |
| **modelValue** | `string \| number \| boolean \| object \| array \| null \| Ref<unknown>` | Value used for two-way data binding. If defined, the composable automatically sets up the `v-model` logic (i.e., `modelValue` + `onUpdate:modelValue`). This can be a **ref** or a direct value.                                                                                                                   |
| **props**      | `Record<string, unknown>`                                                | Additional props that should be passed to the rendered component. This can include normal props or specialized keys like `'v-model:checked'`, `'v-model:foo'`, etc. The composable internally wires these up to update events.                                                                                     |
| **emits**      | `string[]`                                                               | An array of event names that the component might emit. If you list `['click', 'myEvent']`, for example, the composable will handle them via its internal `emitEvent` logic. You can also see these events reflected in the generated code snippet.                                                                 |
| **listeners**  | `Record<string, (...args: unknown[]) => void>`                           | A dictionary of **additional event handlers**. This can be either: <br> - Keys without `on` prefix, e.g. `{ click: () => {...} }` <br> - Keys with `on` prefix, e.g. `{ onClick: () => {...} }`. <br> These listeners are attached directly to the rendered component in Vue 3 style (`onClick`, `onFocus`, etc.). |

`emit` is a function with the signature:
```ts
(event: string, ...args: unknown[]) => void
```
Typically this is **`defineEmits`** from within the parent `<script setup>`.

---

## Returned Properties

The composable returns a set of **reactive values and computed properties** that you can integrate into your template:

| Property                | Type                                   | Description                                                                                                                                                                                                                       |
|-------------------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`renderedComponent`** | `ComputedRef<VNode>`                   | The actual Vue node that you can render via `<component :is="renderedComponent" />`. It combines all the props, events, and listeners into a single component instance.                                                           |
| **`dynamicProps`**      | `ComputedRef<Record<string, unknown>>` | Internal object of all processed props. You usually won’t render this directly, but it’s accessible if you need to debug or pass them somewhere else.                                                                             |
| **`generatedCode`**     | `ComputedRef<string>`                  | An auto-generated code snippet that shows how to use the component with the currently bound props, events, and (optionally) slot placeholders. This can be displayed to the user or used for copying to the clipboard.            |
| **`copyButtonText`**    | `Ref<string>`                          | The text on a “Copy” button. It updates automatically to `✅ Copied!` when the user copies the snippet, then reverts back to `📋 Copy`.                                                                                            |
| **`isFrozen`**          | `Ref<boolean>`                         | Indicates whether the code snippet is “frozen.” When frozen, the `generatedCode` no longer reacts to prop changes. Useful for capturing a stable snippet even while you continue changing the actual component’s props in the UI. |
| **`toggleFreeze`**      | `() => void`                           | Toggles the `isFrozen` state. If **unfrozen**, calling `toggleFreeze` captures the current code snippet and stops future updates. If **frozen**, calling it again releases the freeze.                                            |
| **`copyCode`**          | `() => Promise<void>`                  | Copies the current `generatedCode` to the user’s clipboard. Sets `copyButtonText` to “✅ Copied!” for a few seconds as feedback.                                                                                                   |

---

## Advanced Examples

Below is a **comprehensive** example of how to integrate the composable. It demonstrates:

1. **Marking a component as `markRaw`** to avoid Vue reactivity overhead.
2. **Using `reactive`** to handle multiple fields and watchers within a single object.
3. **Providing `listeners`** for custom event handling.
4. **Using `emits`** to specify which events should be recognized and forwarded.

### Example: Textarea + Badge

```vue
<script setup lang="ts">
import CustomTextarea from './CustomTextarea.vue'
import CustomBadge from './CustomBadge.vue'
import { ref, reactive, markRaw } from '#imports'
import { useEnhancedPreview } from '@/runtime/composables/useEnhancedPreview'

// We have a text area and a badge, each with their own props
const modelValue = ref('')
const placeholder = ref('Type here...')
const text = ref('Badge Label')
const variant = ref<'primary' | 'secondary'>('primary')

// Additional handler just to show we can do custom logic
const handleInput = () => {
  console.log('Text entered:', modelValue.value)
}

// Define an `emit` for v-model updates or custom emits
const emit = defineEmits(['update:modelValue'])

// 1) Setup for CustomTextarea
const {
  copyButtonText,
  isFrozen,
  toggleFreeze,
  copyCode,
  renderedComponent,
  generatedCode,
} = useEnhancedPreview(
  reactive({
    component: markRaw(CustomTextarea),    // Mark the component as raw
    modelValue,                            // Pass a ref directly
    props: {
      placeholder: placeholder.value,      // Normal prop
    },
    emits: ['update:modelValue'],          // We'll forward this event
    listeners: {
      // You can use either `update:modelValue` or `onUpdate:modelValue`
      'update:modelValue': (value) => {
        modelValue.value = value as string
      },
    },
  }),
  emit as (event: string, ...args: unknown[]) => void
)

// 2) Setup for CustomBadge
const {
  copyButtonText: copyButtonTextBadge,
  isFrozen: isFrozenBadge,
  toggleFreeze: toggleFreezeBadge,
  copyCode: copyCodeBadge,
  renderedComponent: renderedBadge,
  generatedCode: generatedCodeBadge,
} = useEnhancedPreview(
  reactive({
    component: markRaw(CustomBadge),
    // No need for modelValue here; just passing some props
    props: {
      text: text.value,
      variant: variant.value,
    },
  }),
  emit as (event: string, ...args: unknown[]) => void
)
</script>

<template>
  <!-- Render the Textarea -->
  <p>
    The <code>CustomTextarea</code> component provides a multi-line text input.
  </p>

  <component :is="renderedComponent" />

  <PreviewSpoiler>
    <PreviewCodeBlock
      :code="generatedCode"
      :show-frozen="true"
      :is-frozen="isFrozen"
      :copy-button-text="copyButtonText"
      @toggle-freeze="toggleFreeze"
      @copy="copyCode"
    />
  </PreviewSpoiler>

  <!-- Render the Badge -->
  <component :is="renderedBadge" @update:model-value="handleInput" />

  <PreviewSpoiler>
    <PreviewCodeBlock
      :code="generatedCodeBadge"
      :show-frozen="true"
      :is-frozen="isFrozenBadge"
      :copy-button-text="copyButtonTextBadge"
      @toggle-freeze="toggleFreezeBadge"
      @copy="copyCodeBadge"
    />
  </PreviewSpoiler>
</template>
```

### Explanation

1. **`markRaw(CustomTextarea)`**  
   We wrap our Vue component in `markRaw()` so that Vue **does not** convert the component object into a reactive proxy. This prevents warnings and extra overhead.

2. **Using `reactive(...)`**  
   We pass an object that bundles up our refs (`modelValue`) and literal values (`props`) together. This allows them to be watched for changes. The composable will reflect those changes in the code snippet automatically.

3. **`listeners`**  
   In the first setup, we provide a listener for `'update:modelValue'`. This ensures that whenever `CustomTextarea` emits that event, we update `modelValue.value` accordingly.
  - Alternatively, you could have used `'onUpdate:modelValue'` or `'onClick'` if you prefer the Vue 3 naming style.

4. **Multiple Instances**  
   We show `useEnhancedPreview` used **twice** — once for the textarea, once for the badge. Each instance returns a unique set of computed properties and reactive states.

5. **Rendering**  
   Instead of writing `<CustomTextarea v-model="modelValue" :placeholder="placeholder" />`, you simply do:
   ```vue
   <component :is="renderedComponent" />
   ```
   The composable **already** merges the props, the `v-model` logic, and the event listeners for you.

---

## Additional Notes

- **`modelValue` can be optional**: If you don’t need two-way binding, just omit it.
- **Merging `emits` and `listeners`**: The composable merges your declared `emits` (which you might want to track or show in `generatedCode`) and additional raw event handlers in `listeners`.
- **Slots**: Any slots passed to `<component :is="renderedComponent">` are captured and reflected in the `generatedCode` snippet. In actual usage, you might specify them inline:
  ```vue
  <component :is="renderedComponent">
    <template #append>
      <div>Some appended slot content</div>
    </template>
  </component>
  ```
- **Performance**: Mark your component with `markRaw(...)` if it’s a `DefineComponent` object to avoid Vue’s deep reactivity overhead.
- **Frozen Code**: Toggling `freeze` is useful if you need to “lock in” a snippet while continuing to change props or watchers.

---

## Recommendations

- Start with **simple usage** (just the `component` prop, maybe a `modelValue`) before introducing advanced store logic or multiple watchers.
- Always wrap large or complex component objects with **`markRaw()`** if you pass them to `useEnhancedPreview` in a reactive context.
- If you only need standard props and events, consider the simpler usage with `EnhancedPreview` in `.stories.vue`. This advanced integration is primarily for scenarios where you need deeper control.

---

### Summary

`useEnhancedPreview` is an **advanced composable** that provides a flexible, high-powered way to preview your components with interactive props, event forwarding, and snippet generation. It’s ideal when you need a level of control that goes beyond simple in-component previews, such as fully custom store integrations or specialized event handling.

By carefully configuring `props`, `modelValue`, `emits`, and `listeners`, you can build a robust, dynamic “mini Storybook” experience directly within your Nuxt app.

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

## More Resources
- **[Live Demo](https://s00d.github.io/nuxt-componentsbook-module/componentsbook)** – Explore the module in action and see various sample stories.
- **[Usage Examples](https://github.com/s00d/nuxt-componentsbook-module/tree/main/playground/components)** – View additional `.stories.vue` files illustrating different configurations and patterns.

You can use these references to learn more advanced usage patterns, get inspired by existing stories, and see how they integrate with the rest of your Nuxt app.

## 🤝 **Contributing**
Feel free to submit issues and pull requests to improve the module.

## 📜 License
[MIT License](https://opensource.org/licenses/MIT)

