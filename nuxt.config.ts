// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  site: {
    url: 'https://gabrielfierro.dev',
    name: 'Gabriel Fierro Portfolio'
  },

  app: {
    head: {
      title: 'Gabriel Fierro',
      titleTemplate: '%s | Gabriel Fierro',
      htmlAttrs: {
        lang: 'en'
      },

      meta: [
        {
          name: 'description',
          content:
            'Gabriel Fierro - Fullstack Developer specialized in Vue, React, TypeScript and Node.js. Portfolio with projects and experience.'
        },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Gabriel Fierro - Fullstack Developer' },
        {
          property: 'og:description',
          content:
            'Fullstack developer portfolio. Projects built with Vue, React, Node.js and modern web technologies.'
        },
        { property: 'og:image', content: '/preview.png' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Gabriel Fierro - Fullstack Developer' },
        {
          name: 'twitter:description',
          content: 'Fullstack developer portfolio with projects, experience and tech stack.'
        },
        { name: 'twitter:image', content: '/preview.png' }
      ],

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://gabrielfierro.dev' }
      ]
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxt/icon'],
  css: ['flag-icons/css/flag-icons.min.css'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    langDir: 'locales/',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' }
    ]
  }
})
