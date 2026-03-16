<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { experiences } from '@/content/experience'

  const { t } = useI18n()

  const expanded = ref<number | null>(null)

  const toggleExpand = (index: number) => {
    expanded.value = expanded.value === index ? null : index
  }
</script>
<template>
  <section id="experience" class="py-24 px-6 bg-white dark:bg-backgroundDark">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-5xl font-bold mb-16 text-center dark:text-white">
        {{ t('experience.title') }}
      </h2>

      <div class="relative border-l border-gray-300 dark:border-gray-700">
        <div v-for="(exp, index) in experiences" :key="index" class="mb-12 ml-6">
          <span
            class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-gray-100 dark:ring-gray-950"
          />

          <h3 class="text-xl font-semibold dark:text-white">
            {{ t(exp.role) }}
          </h3>

          <p class="text-primary font-medium">
            {{ exp.company }}
          </p>

          <time class="block mb-3 text-sm text-gray-500">
            {{ exp.period }}
          </time>

          <p class="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
            {{ t(exp.description) }}
          </p>

          <p
            v-if="expanded === index && exp.fullDescription"
            class="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line"
          >
            {{ t(exp.fullDescription) }}
          </p>

          <button
            v-if="exp.fullDescription"
            @click="toggleExpand(index)"
            class="text-sm text-primary font-medium mb-4 hover:underline"
          >
            {{ expanded === index ? t('experience.showLess') : t('experience.showMore') }}
          </button>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in exp.tech"
              :key="tech"
              class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-white/80"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
