<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <section class="hero min-h-screen">
    <div class="hero-content text-center">
      <div>
        <h1 class="text-5xl font-bold">
          {{ t('hero.title') }}
        </h1>
        <p class="py-6">
          {{ t('hero.subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>
