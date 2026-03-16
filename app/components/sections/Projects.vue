<script setup lang="ts">
  import { projects } from '@/content/projects'
</script>

<template>
  <section id="projects" class="py-24 px-6 bg-gray-50 dark:bg-backgroundDark">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-5xl font-bold text-center mb-16 dark:text-white">Projects</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <UiProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
      </div>
    </div>
  </section>
</template>
