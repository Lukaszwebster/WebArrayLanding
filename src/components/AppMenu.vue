<script setup lang="ts">
import type { MenuItems } from '~/types/menu'

defineProps<{
  items: MenuItems[]
}>()
</script>

<template>
  <div class="absolute left-0 top-[5.8rem] w-full flex flex-col bg-white px-[7.5rem]">
    <div class="flex justify-between">
      <AppMenuItems v-for="(item, index) in items " :key="index" :title="item.title" :items="item.items" class="" />
    </div>
    <button class="mx-auto max-w-[15.125rem] border">
      View All Services
    </button>
  </div>
</template>
