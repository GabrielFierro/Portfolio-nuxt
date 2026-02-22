// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/seo'],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' }
    ]
  }
})
