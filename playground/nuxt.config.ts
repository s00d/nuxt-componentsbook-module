import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: './basic',
  modules: [
    '../src/module',
  ],
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  compatibilityDate: '2025-02-14',
  componentsBook: {
    cache: false,
  },
})
