<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { Motion } from 'motion-v'
  import TechStack from './TechStack.vue'

  const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-24 px-6 md:px-12 bg-white dark:bg-backgroundDark">
    <div class="max-w-6xl mx-auto text-center">
      <Motion
        :initial="{ opacity: 0, y: 40 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        :viewport="{ once: true }"
      >
        <h2 class="text-5xl font-bold mb-10 text-gray-900 dark:text-white">
          {{ t('about.title') }}
        </h2>
      </Motion>

      <div class="grid gap-4 items-center">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2, duration: 0.6 }"
          :viewport="{ once: true }"
          class="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          <p>{{ t('about.paragraph1') }}</p>
          <p>{{ t('about.paragraph2') }}</p>
        </Motion>
        <TechStack />
      </div>
    </div>
  </section>
</template>
