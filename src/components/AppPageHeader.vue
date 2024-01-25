<script setup lang="ts">
defineProps<{
  subtitle?: string
  title: string
  subtitleClass?: string
  titleClass?: string
  wrapperClass?: string
}>()
</script>

<template>
  <div
    :class="wrapperClass"
    class="flex flex-col items-center"
  >
    <span :class="subtitleClass" class="text-[1.25rem] text-[#FF7012]">{{ subtitle }}</span>
    <h2 :class="titleClass" class="text-center text-[2.85625rem] font-700 md:max-w-[29.1875rem] md:text-left">
      {{ title }}
    </h2>
  </div>
</template>
