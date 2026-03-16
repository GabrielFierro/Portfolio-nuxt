<script setup lang="ts">
  defineProps<{
    title: string
    description: string
    tech: string[]
    type?: string
    year?: string
    github?: string
    demo?: string
    featured?: boolean
  }>()
</script>

<template>
  <div
    class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:-translate-y-1 hover:shadow-xl transition duration-300"
  >
    <div class="flex justify-between items-start mb-2">
      <div class="flex items-center gap-2">
        <span
          v-if="featured"
          class="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
        >
          ⭐ Featured
        </span>

        <h3 class="text-xl font-semibold text-primary">
          {{ title }}
        </h3>
      </div>

      <span class="text-xs text-gray-400">
        {{ year }}
      </span>
    </div>

    <p class="text-gray-600 dark:text-gray-400 mb-4">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="t in tech"
        :key="t"
        class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/80"
      >
        {{ t }}
      </span>
    </div>

    <div class="flex gap-3 mt-8">
      <a
        v-if="github"
        :href="github"
        target="_blank"
        class="text-sm px-3 py-1 rounded-lg border border-gray-300 dark:text-white dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 transition"
      >
        GitHub
      </a>

      <a
        v-if="demo"
        :href="demo"
        target="_blank"
        class="text-sm px-3 py-1 rounded-lg bg-primary text-white hover:opacity-90 transition"
      >
        Live Demo
      </a>
    </div>
  </div>
</template>
