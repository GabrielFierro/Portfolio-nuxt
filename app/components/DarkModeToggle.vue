<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const isDark = ref(false)

  onMounted(() => {
    const saved = localStorage.getItem('theme')

    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      isDark.value = true
    }
  })

  function toggleDark() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')

    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
</script>

<template>
  <button
    @click="toggleDark"
    class="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition"
  >
    <span class="text-lg">
      {{ isDark ? '🌙' : '☀️' }}
    </span>
  </button>
</template>
