<script setup lang="ts">
import type { MenuItems } from '~/types/menu'

defineProps<{
  items: MenuItems[]
}>()
</script>

<template>
  <div class="item-shadow absolute left-0 top-[5.8rem] w-full flex flex-col gap-[2.75rem] bg-white px-[7.5rem] pb-[3.5rem]">
    <div class="flex justify-between">
      <AppMenuItems v-for="(item, index) in items " :key="index" :title="item.title" :items="item.items" class="" />
    </div>
    <button class="mx-auto border border-[#3482FF] rounded-[1.25rem] px-[3.4375rem] py-[1.75rem] text-[#3482FF] font-400">
      View All Services
    </button>
  </div>
</template>

<style scoped>
.item-shadow {
  box-shadow: 0px 14px 44px 0px #0000000d;
}
</style>
