<script setup lang="ts">
  import { computed } from 'vue'
  import { useSwitchLocalePath } from '#i18n'
  import { navigateTo } from '#app'

  const { locale, t } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const isEnglish = computed(() => locale.value === 'en')

  const toggleLanguage = async () => {
    const next = locale.value === 'en' ? 'es' : 'en'
    await navigateTo(switchLocalePath(next))
  }
</script>

<template>
  <button
    @click="toggleLanguage"
    :title="t('controls.switchLanguage')"
    :aria-label="t('controls.switchLanguage')"
    class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
  >
    <span v-if="isEnglish">
      <img src="/flags/us.svg" alt="us flag" width="20" height="20" />
    </span>
    <span v-else>
      <img src="/flags/es.svg" alt="es flag" width="20" height="20" />
    </span>

    <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">
      {{ isEnglish ? 'English' : 'Español' }}
    </span>
  </button>
</template>
