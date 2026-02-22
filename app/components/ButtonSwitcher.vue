<script setup lang="ts">
  import { useSwitchLocalePath } from '#i18n'

  const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex gap-2">
    <NuxtLink class="btn btn-sm" :to="switchLocalePath('en')"> EN </NuxtLink>

    <NuxtLink class="btn btn-sm" :to="switchLocalePath('es')"> ES </NuxtLink>
  </div>
</template>
