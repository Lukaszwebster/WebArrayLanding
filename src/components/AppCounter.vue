<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter'

defineProps<{
  start: number
  end: number
  suffix?: string
  duration?: number
  color: string
}>()
</script>

<template>
  <div class="">
    <Vue3autocounter :class="color" :start-amount="start" :end-amount="end" :duration="duration" :suffix="suffix" />
  </div>
</template>
