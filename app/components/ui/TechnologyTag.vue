<script setup lang="ts">
  defineProps<{
    description: string
    logo: string
  }>()
</script>

<template>
  <span
    class="tech-tag w-32 inline-flex items-center justify-center gap-2 rounded-lg border border-black px-3 py-2 text-sm font-medium text-slate-800 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-300"
  >
    <img :src="logo" :alt="description" class="w-5 h-5 object-contain" />
    {{ description }}
  </span>
</template>

<style scoped>
  .tech-tag:hover {
    box-shadow: 0 8px 25px -5px rgba(99, 102, 241, 0.6);
    transform: translateY(-2px);
    cursor: pointer;
  }
</style>
