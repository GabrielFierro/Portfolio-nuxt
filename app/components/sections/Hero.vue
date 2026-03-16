<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { Mail, MapPin } from 'lucide-vue-next'
  import { Motion } from 'motion-v'

  const { t } = useI18n()

  const email = 'fierrogabriel13@gmail.com'

  const cvUrl = 'https://drive.google.com/file/d/1kH-rYPUibhtwP6CLFp1FBTAsk5-0Q1iA/view?usp=sharing'
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center px-6 md:px-16 bg-base-100 dark:bg-backgroundDark"
  >
    <Motion
      :initial="{ opacity: 0, y: 40 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
      class="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl mx-auto"
    >
      <div>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.1 }"
        >
          <p
            class="inline-flex items-center rounded-md bg-primary px-3 py-1 text-md font-semibold text-white"
          >
            {{ t('hero.title') }}
          </p>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2 }"
        >
          <h1 class="text-5xl md:text-6xl font-bold my-6 text-gray-900 dark:text-white">
            {{ t('hero.fullName') }}
          </h1>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.3 }"
        >
          <h2 class="text-2xl font-semibold text-base-content/80 dark:text-gray-300">
            {{ t('hero.subtitle') }}
          </h2>
        </Motion>

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
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.7, delay: 0.3 }"
          :whileHover="{ scale: 1.05 }"
          class="flex justify-center md:justify-end"
        >
          <NuxtImg
            src="/profile.webp"
            alt="Gabriel Fierro profile picture"
            width="320"
            height="320"
            format="webp"
            quality="80"
            fetchpriority="high"
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl ring-2 ring-primary/40 dark:ring-primary/60 dark:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          />
        </Motion>
      </div>
    </Motion>
  </section>
</template>
