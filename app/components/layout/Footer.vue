<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-6 px-6 border-t border-gray-200 dark:bg-backgroundDark dark:border-gray-800">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
      <p class="text-sm dark:text-gray-200">© {{ year }} Gabriel Fierro</p>

      <p class="text-sm dark:text-gray-300">
        {{ t('footer.builtWith') }}
      </p>
    </div>
  </footer>
</template>
