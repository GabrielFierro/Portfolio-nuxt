<script setup lang="ts">
  import TechnologyTag from '../ui/TechnologyTag.vue'
</script>

<template>
  <section class="py-16 bg-slate-150">
    <div class="mx-auto w-full max-w-6xl px-6">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center"
      >
        <TechnologyTag description="Vue.js" logo="/logos/vue.svg" />
        <TechnologyTag description="React" logo="/logos/react.svg" />
        <TechnologyTag description="TypeScript" logo="/logos/typescript.svg" />
        <TechnologyTag description="Tailwind" logo="/logos/tailwindcss.svg" />
        <TechnologyTag description="Material UI" logo="/logos/mui.svg" />
        <TechnologyTag description="Node.js" logo="/logos/nodejs.svg" />
        <TechnologyTag description="Express" logo="/logos/express.svg" />
        <TechnologyTag description="NestJS" logo="/logos/nestjs.svg" />
        <TechnologyTag description="PostgreSQL" logo="/logos/postgresql.svg" />
        <TechnologyTag description="MySQL" logo="/logos/mysql.svg" />
        <TechnologyTag description="Cypress" logo="/logos/cypress.svg" />
        <TechnologyTag description="Git" logo="/logos/git.svg" />
        <TechnologyTag description="GitHub" logo="/logos/github.svg" />
        <TechnologyTag description="Figma" logo="/logos/figma.svg" />
        <TechnologyTag description="Jira" logo="/logos/jira.svg" />
      </div>
    </div>
  </section>
</template>
