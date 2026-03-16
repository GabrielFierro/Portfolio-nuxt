<script setup lang="ts">
  defineProps<{
    description: string
    logo: string
    color: string
  }>()
</script>

<template>
  <span
    class="tech-tag w-32 inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium text-slate-800 bg-white shadow-sm transition-all duration-300"
    :style="{ borderColor: '#181717', '--hover-color': color }"
  >
    <img :src="logo" :alt="description" class="w-5 h-5 object-contain" />
    {{ description }}
  </span>
</template>

<style scoped>
  .tech-tag:hover {
    box-shadow: 0 8px 25px -5px var(--hover-color);
    transform: translateY(-2px);
    cursor: pointer;
  }
</style>
