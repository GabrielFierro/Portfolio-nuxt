<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const experiences = [
    {
      company: 'Meliorar',
      role: t('experience.meliorarRole'),
      period: 'Aug 2025 — Present',
      description: t('experience.meliorarDescription'),
      tech: [
        'Product Strategy',
        'UX/UI',
        'Figma',
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'PrismaORM',
        'Git',
        'GitHub',
        'Jira'
      ]
    },
    {
      company: 'Travellyze',
      role: t('experience.dataAnalystRole'),
      period: 'Dec 2024 — Oct 2025',
      description: t('experience.dataAnalystDescription'),
      tech: ['Python', 'Pandas', 'NumPy', 'Google Colab', 'Git', 'GitHub', 'Jira', 'Slack']
    },
    {
      company: 'Travellyze',
      role: t('experience.fullstackRole'),
      period: 'Dec 2023 — Oct 2025',
      description: t('experience.fullstackDescription'),
      tech: [
        'Vue 2/3',
        'Quasar',
        'Pinia',
        'XState',
        'Vitest',
        'NestJS',
        'MySQL',
        'Cypress',
        'Firebase',
        'Git',
        'GitHub',
        'Jira',
        'Slack'
      ]
    },
    {
      company: 'Code In Magenta',
      role: t('experience.frontendRole'),
      period: 'Aug 2020 — Oct 2020',
      description: t('experience.frontendDescription'),
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind']
    }
  ]
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
            class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-white dark:ring-gray-950"
          />

          <h3 class="text-xl font-semibold dark:text-white">
            {{ exp.role }}
          </h3>

          <p class="text-primary font-medium">
            {{ exp.company }}
          </p>

          <time class="block mb-3 text-sm text-gray-500">
            {{ exp.period }}
          </time>

          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ exp.description }}
          </p>

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
