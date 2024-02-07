<script setup lang="ts">
import type { MenuItems } from '~/types/menu'

defineProps<{
  items: MenuItems[]
}>()
</script>

<template>
  <div>
    <div class="absolute left-0 top-[5.8rem] w-full bg-white px-[7.5rem]">
      <AppMenuItems v-for="(item, index) in items " :key="index" :title="item.title" :items="item.items" />
      <button>View All Services</button>
    </div>
  </div>
</template>
