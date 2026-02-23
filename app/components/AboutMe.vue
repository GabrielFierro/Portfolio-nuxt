<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import TechnologiesBadge from './TechnologiesBadge.vue'

  const { t } = useI18n()
</script>

<template>
  <section id="about" className="py-24 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-10">{{ t('about.title') }}</h2>

      <div className="grid gap-4 items-center">
        <div className="space-y-6 text-lg text-base-content/80 leading-relaxed">
          <p>{{ t('about.paragraph1') }}</p>
          <p>{{ t('about.paragraph2') }}</p>
        </div>
        <TechnologiesBadge />
      </div>
    </div>
  </section>
</template>
