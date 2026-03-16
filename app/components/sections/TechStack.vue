<script setup lang="ts">
  import TechnologyTag from '../ui/TechnologyTag.vue'
  import { Motion } from 'motion-v'
</script>

<template>
  <section class="py-16 bg-slate-150">
    <div class="mx-auto w-full max-w-6xl px-6">
      <Motion
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true }"
        :transition="{ staggerChildren: 0.05 }"
      >
        <Motion
          v-for="tech in [
            { name: 'Vue.js', logo: '/logos/vue.svg' },
            { name: 'React', logo: '/logos/react.svg' },
            { name: 'TypeScript', logo: '/logos/typescript.svg' },
            { name: 'Tailwind', logo: '/logos/tailwindcss.svg' },
            { name: 'Material UI', logo: '/logos/mui.svg' },
            { name: 'Node.js', logo: '/logos/nodejs.svg' },
            { name: 'Express', logo: '/logos/express.svg' },
            { name: 'NestJS', logo: '/logos/nestjs.svg' },
            { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
            { name: 'MySQL', logo: '/logos/mysql.svg' },
            { name: 'Cypress', logo: '/logos/cypress.svg' },
            { name: 'Git', logo: '/logos/git.svg' },
            { name: 'GitHub', logo: '/logos/github.svg' },
            { name: 'Figma', logo: '/logos/figma.svg' },
            { name: 'Jira', logo: '/logos/jira.svg' }
          ]"
          :key="tech.name"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4 }"
        >
          <TechnologyTag :description="tech.name" :logo="tech.logo" />
        </Motion>
      </Motion>
    </div>
  </section>
</template>
