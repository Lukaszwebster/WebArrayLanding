<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter'
import { vIntersectionObserver } from '@vueuse/components'

defineProps<{
  start: number
  end: number
  suffix?: string
  duration?: number
  color: string
}>()
const isInitialized = ref(false)
const counter = ref()

function startCounting() {
  counter.value.start()
}

function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
  if (!isIntersecting || isInitialized.value)
    return
  startCounting()
  isInitialized.value = true
}
</script>

<template>
  <div v-intersection-observer="onIntersectionObserver">
    <Vue3autocounter ref="counter" class="text-[2.75rem] font-700" :class="color" :start-amount="start" :end-amount="end" :duration="duration" :autoinit="false" :suffix="suffix" />
  </div>
</template>
