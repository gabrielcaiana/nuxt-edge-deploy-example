// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  dir: {
    app: 'app',
  },

  tailwindcss: {
    config: {
      content: ['./app/**/*.{html,js,vue,ts}'],
    },
    viewer: true,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxthub/core'],
})