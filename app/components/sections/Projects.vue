<script setup lang="ts">
  import { projects } from '@/content/projects'
  import { Motion } from 'motion-v'
</script>

<template>
  <section id="projects" class="py-24 px-6 bg-gray-50 dark:bg-backgroundDark">
    <div class="max-w-6xl mx-auto">
      <Motion
        :initial="{ opacity: 0, y: 40 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="text-5xl font-bold text-center mb-16 dark:text-white">Projects</h2>
      </Motion>

      <Motion
        class="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true }"
        :transition="{ staggerChildren: 0.15 }"
      >
        <Motion
          v-for="project in projects"
          :key="project.title"
          :initial="{ opacity: 0, y: 40 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <UiProjectCard v-bind="project" />
        </Motion>
      </Motion>
    </div>
  </section>
</template>
