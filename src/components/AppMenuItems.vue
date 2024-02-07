<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{
  title: string
  items: MenuItem[]

}>()
</script>

<template>
  <div class="">
    <div class="text-[1.2rem]">
      {{ title }}
    </div>
    <div v-for="(item, index) in items" :key="index" class="">
      <div class="">
        {{ item.name }}
      </div>
      {{ item.icon }}
    </div>
  </div>
</template>
