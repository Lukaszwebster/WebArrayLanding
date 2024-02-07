<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <div class="absolute left-0 top-[5.8rem] w-full bg-white px-[7.5rem]">
      <AppMenuItems :title="title" />
      <button>View All Services</button>
    </div>
  </div>
</template>
