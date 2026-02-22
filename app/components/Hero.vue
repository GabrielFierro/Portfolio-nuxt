<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { Mail, MapPin } from 'lucide-vue-next'

  const { t } = useI18n()
</script>

<template>
  <section class="hero min-h-screen">
    <div class="hero-content text-left">
      <div>
        <p
          class="inline-flex items-center rounded-md bg-primary px-3 py-1 text-md font-semibold text-white"
        >
          {{ t('hero.title') }}
        </p>
        <h1 class="text-5xl font-bold my-4">{{ t('hero.fullName') }}</h1>
        <h5 class="text-2xl font-semibold">
          {{ t('hero.subtitle') }}
        </h5>
        <div class="flex items-center gap-2 mt-4 font-semibold">
          <Mail class="w-5 h-5" />
          <span>fierrogabriel13@gmail.com</span>
        </div>
        <div class="flex items-center gap-2 mt-4 font-semibold">
          <MapPin class="w-5 h-5" />
          <span>Argentina</span>
        </div>
      </div>
    </div>
  </section>
</template>
