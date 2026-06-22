/// <reference types="vue-yandex-maps/nuxt" />
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },

      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon_current.ico' },
      ],
    }
  },

  ssr: true,
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', 'vue-yandex-maps/nuxt', 'nuxt-swiper'],

  yandexMaps: {
    apikey: 'af5a38a2-5bf8-44de-bfbe-b30e278e9df4',
  },

  build: {
    transpile: ['vue-yandex-maps'],
  },

  vite: {
    optimizeDeps: {
      exclude: ['vue-yandex-maps'],
    },
  },

  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    },
  },

})