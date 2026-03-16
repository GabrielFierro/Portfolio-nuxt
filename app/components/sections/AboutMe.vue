<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import TechStack from './TechStack.vue'

  const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-24 px-6 md:px-12 bg-white dark:bg-backgroundDark">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-5xl font-bold mb-10 text-gray-900 dark:text-white">{{ t('about.title') }}</h2>

      <div class="grid gap-4 items-center">
        <div class="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>{{ t('about.paragraph1') }}</p>
          <p>{{ t('about.paragraph2') }}</p>
        </div>
        <TechStack />
      </div>
    </div>
  </section>
</template>
