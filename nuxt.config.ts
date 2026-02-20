// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/content'],
	i18n: {
		locales: [
			{ code: 'en', language: 'en-US' },
			{ code: 'es', language: 'es-ES' },
		],
		defaultLocale: 'en',
	},
});
