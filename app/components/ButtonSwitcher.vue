<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useSwitchLocalePath } from '#i18n'
  const locales = ['en', 'es'] as const
  type Locale = (typeof locales)[number]

  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const isOpen = ref(false)

  const currentFlag = computed(() => {
    return locale.value === 'en' ? 'us' : 'es'
  })

  const changeLanguage = (lang: Locale) => {
    isOpen.value = true
    return switchLocalePath(lang)
  }
</script>

<template>
  <div class="relative inline-block">
    <button class="btn btn-sm flex items-center gap-2" @click="isOpen = !isOpen">
      <span :class="`fi fi-${currentFlag}`"></span>
      <span class="uppercase">{{ locale }}</span>
    </button>

    <div v-if="isOpen" class="absolute mt-2 bg-base-100 shadow rounded p-2 flex flex-col gap-2">
      <NuxtLink
        class="flex items-center gap-2 hover:bg-base-200 p-1 rounded"
        :to="changeLanguage('en')"
      >
        <span class="fi fi-us"></span>
        English
      </NuxtLink>

      <NuxtLink
        class="flex items-center gap-2 hover:bg-base-200 p-1 rounded"
        :to="changeLanguage('es')"
      >
        <span class="fi fi-es"></span>
        Español
      </NuxtLink>
    </div>
  </div>
</template>
