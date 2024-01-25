<script setup lang="ts">
defineProps<{
  text: string
  class: string
}>()
</script>

<template>
  <div>
    <ul class="flex content-start items-start justify-center">
      <li :class="class" class="border rounded-[2.65rem] px-[1.0625rem] py-[0.211875rem] text-[0.85rem] font-400">
        {{ text }}
      </li>
    </ul>
  </div>
</template>
