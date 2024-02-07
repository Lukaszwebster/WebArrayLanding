<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{
  title: string
  items: MenuItem[]

}>()
</script>

<template>
  <div class="flex">
    <div> {{ title }}</div>
    <div v-for="(item, index) in items" :key="index">
      {{ item.name }}
      {{ item.icon }}
    </div>
  </div>
</template>
