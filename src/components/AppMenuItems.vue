<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{
  title: string
  description?: string
  items: MenuItem[]
}>()
</script>

<template>
  <div class="pt-[2.6875rem]">
    <div class="text-[#252541] font-300 leading-[1rem] xl:text-[1.75rem]">
      {{ title }}
    </div>
    <div class="mb-[2rem] mt-[1.5rem] h-[1px] bg-[#E5E7EC]" />
    <div class="mb-[1.5rem] lg:max-w-[10rem] xl:max-w-[17.4375rem]">
      <h2 class="text-[#727272] font-400 xl:text-[1.1rem] xl:leading-[2rem]">
        {{ description }}
      </h2>
    </div>
    <div v-for="(item, index) in items" :key="index" class="mt-[0.625rem] flex items-center gap-[0.854rem]">
      <img :src="item.icon" alt="" class="">
      <div class="text-[#727272] font-400 leading-[2rem] xl:text-[1.2rem]">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
