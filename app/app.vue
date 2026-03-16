<script setup lang="ts">
  useSeoMeta({
    title: 'Gabriel Fierro - Fullstack Developer',
    description:
      'Fullstack developer specialized in Vue, React, TypeScript and Node.js. Portfolio with projects and experience.',
    ogTitle: 'Gabriel Fierro - Fullstack Developer',
    ogDescription: 'Fullstack developer portfolio with modern web technologies.',
    ogImage: '/preview.png',
    twitterCard: 'summary_large_image'
  })

  useHead({
    htmlAttrs: {
      class: 'dark'
    },
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Gabriel Fierro',
          url: 'https://gabrielfierro.dev',
          jobTitle: 'Fullstack Developer',
          sameAs: [
            'https://github.com/GabrielFierro',
            'https://linkedin.com/in/gabriel-fierro-2020'
          ]
        })
      }
    ]
  })

  if (import.meta.client) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
