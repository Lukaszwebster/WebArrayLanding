<script setup lang="ts">
defineProps<{
  text: string
  barClass: string
}>()
</script>

<template>
  <div :class="barClass" class="inline-block border rounded-[2.65rem] px-[1.0625rem] py-[0.211875rem] text-[0.85rem] font-400">
    {{ text }}
  </div>
</template>
