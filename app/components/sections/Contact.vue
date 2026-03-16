<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const email = 'fierrogabriel13@gmail.com'
  const github = 'https://github.com/GabrielFierro'
  const linkedin = 'https://www.linkedin.com/in/gabriel-fierro-2020/'
  const cv = 'https://drive.google.com/file/d/1kH-rYPUibhtwP6CLFp1FBTAsk5-0Q1iA/view?usp=sharing'
</script>

<template>
  <section id="contact" class="py-24 px-6 bg-gray-50 dark:bg-backgroundDark">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-bold mb-6 dark:text-white">
        {{ t('contact.title') }}
      </h2>

      <p class="text-gray-600 dark:text-gray-400 mb-10">
        {{ t('contact.description') }}
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <a
          :href="`mailto:${email}`"
          class="px-6 py-3 rounded-xl bg-primary text-white dark:bg-primary dark:text-black hover:scale-105 transition"
        >
          {{ t('contact.email') }}
        </a>

        <a
          :href="cv"
          target="_blank"
          class="px-6 py-3 rounded-xl border border-gray-300 dark:bg-gray-200 dark:border-gray-700 hover:scale-105 transition"
        >
          {{ t('contact.downloadCV') }}
        </a>
      </div>

      <div class="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
        <a :href="github" target="_blank" class="hover:text-black dark:hover:text-white transition">
          GitHub
        </a>

        <a
          :href="linkedin"
          target="_blank"
          class="hover:text-black dark:hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
