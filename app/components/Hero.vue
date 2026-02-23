<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { Mail, MapPin } from 'lucide-vue-next'

  const { t } = useI18n()

  const email = 'fierrogabriel13@gmail.com'
</script>

<template>
  <section class="min-h-screen flex items-center px-6 md:px-16">
    <div class="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl mx-auto">
      <div>
        <p
          class="inline-flex items-center rounded-md bg-primary px-3 py-1 text-md font-semibold text-white"
        >
          {{ t('hero.title') }}
        </p>

        <h1 class="text-5xl md:text-6xl font-bold my-6">
          {{ t('hero.fullName') }}
        </h1>

        <h5 class="text-2xl font-semibold text-base-content/80">
          {{ t('hero.subtitle') }}
        </h5>

        <div class="mt-8 space-y-4">
          <div class="flex items-center gap-3 group">
            <Mail class="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span>
              {{ email }}
            </span>
          </div>
          <div class="flex items-center gap-3 group">
            <MapPin class="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span>Argentina</span>
          </div>

          <div class="flex items-center gap-6 pt-4">
            <a
              href="https://linkedin.com/in/gabriel-fierro-2020"
              target="_blank"
              class="p-3 rounded-full hover:bg-base-200 transition hover:-translate-y-1"
            >
              <Icon name="simple-icons:linkedin" class="w-6 h-6" />
            </a>

            <a
              href="https://github.com/tuusuario"
              target="_blank"
              class="p-3 rounded-full hover:bg-base-200 transition hover:-translate-y-1"
            >
              <Icon name="simple-icons:github" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center md:justify-end">
        <img
          src="/profile.webp"
          alt="Profile picture"
          class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl ring ring-purple-200"
        />
      </div>
    </div>
  </section>
</template>
