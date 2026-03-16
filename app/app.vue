<script setup lang="ts">
  useHead({
    htmlAttrs: {
      class: 'dark'
    },
    title: 'Gabriel Fierro - Portfolio'
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
