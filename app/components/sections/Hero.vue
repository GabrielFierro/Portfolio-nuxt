<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { Mail, MapPin } from 'lucide-vue-next'

  const { t } = useI18n()

  const email = 'fierrogabriel13@gmail.com'

  const cvUrl = 'https://drive.google.com/file/d/1kH-rYPUibhtwP6CLFp1FBTAsk5-0Q1iA/view?usp=sharing'
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center px-6 md:px-16 bg-base-100 dark:bg-backgroundDark"
  >
    <div class="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl mx-auto">
      <div>
        <p
          class="inline-flex items-center rounded-md bg-primary px-3 py-1 text-md font-semibold text-white"
        >
          {{ t('hero.title') }}
        </p>

        <h1
          class="text-5xl md:text-6xl font-bold my-6 text-gray-900 dark:text-white dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
        >
          {{ t('hero.fullName') }}
        </h1>

        <h5 class="text-2xl font-semibold text-base-content/80 dark:text-gray-300">
          {{ t('hero.subtitle') }}
        </h5>

        <div class="mt-8 space-y-4">
          <div class="flex items-center gap-3 group">
            <Mail class="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span class="text-gray-600 dark:text-gray-400">
              {{ email }}
            </span>
          </div>
          <div class="flex items-center gap-3 group">
            <MapPin class="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span class="dark:text-gray-400">Argentina</span>
          </div>

          <div class="flex items-center gap-6 pt-4 group dark:text-white">
            <a
              href="https://linkedin.com/in/gabriel-fierro-2020"
              target="_blank"
              class="p-3 rounded-full p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-transform hover:scale-110"
            >
              <Icon name="simple-icons:linkedin" class="w-6 h-6" />
            </a>

            <a
              href="https://github.com/GabrielFierro"
              target="_blank"
              class="p-3 rounded-full p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-transform hover:scale-110"
            >
              <Icon name="simple-icons:github" class="w-6 h-6" />
            </a>
          </div>

          <div class="flex justify-start gap-4 pt-6">
            <a
              :href="cvUrl"
              target="_blank"
              class="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:scale-105 hover:shadow-lg transition-all"
            >
              {{ t('hero.download') }} CV
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center md:justify-end">
        <img
          src="/profile.webp"
          alt="Profile picture"
          class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl ring-2 ring-primary/40 dark:ring-primary/60 dark:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-300"
        />
      </div>
    </div>
  </section>
</template>
