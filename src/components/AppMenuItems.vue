<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{
  title: string
  items: MenuItem[]

}>()
</script>

<template>
  <div class="pt-[2.6875rem]">
    <div class="text-[1.75rem] font-300">
      {{ title }}
    </div>
    <div v-for="(item, index) in items" :key="index" class="">
      <div class="text-[1.2rem] text-[#727272] font-400">
        {{ item.name }}
      </div>
      {{ item.icon }}
    </div>
  </div>
</template>
