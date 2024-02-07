<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex justify-between">
    <div v-for="(item, index) in title" :key="index">
      {{ item.title }}
      <div v-for="(secondItem, index) in title" :key="index">
        {{ secondItem.items[index].itemName }}
      </div>
    </div>
  </div>
</template>
