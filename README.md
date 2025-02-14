# Components book Module for Nuxt

## Overview
This module provides a Storybook-like experience for Nuxt components, allowing you to document and test your Vue components using `.stories.vue` files. It scans a specified directory for story files, generates dynamic routes, and creates an interactive UI for viewing and testing components.

## Features
- Automatically scans and registers `.stories.vue` files as pages.
- Generates Vue files dynamically for each story.
- Extracts and displays component props in a structured table.
- Provides hot reloading with file watching.
- Adds a Nuxt DevTools tab for easy component exploration.

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
    routePrefix: '/componentsbook', // Prefix for generated routes
  },
})
```

### 2. Creating a Story
Create a `.stories.vue` file in your components directory:

```vue
<script setup>
import MyComponent from './MyComponent.vue';
</script>

<template>
  <MyComponent propA="Hello" :propB="42" />
</template>
```

### 3. Running the Components book
Start your Nuxt development server:

```bash
npm run dev
```

Visit `/componentsbook` in your browser to see the list of stories.

## How It Works
1. The module scans the specified `componentsDir` for `.stories.vue` files.
2. It generates dynamic Vue pages for each story and registers them with Nuxt.
3. A layout (`componentsbook-layout`) is added to encapsulate the story viewer.
4. A prop table is generated for each component based on its script setup.
5. File watching via `chokidar` enables automatic updates when stories are modified.
6. A DevTools tab is added for quick access in Nuxt development mode.

## DevTools Integration
When running in development mode, a new DevTools tab called **Components Book** is available, providing an iframe-based UI to explore component stories.

## API Endpoints
- `GET /__componentsbook_devtools_api__/api/files`: Returns a JSON list of available story files.

## Contributing
Feel free to submit issues and pull requests to improve the module.

## License
MIT License.

