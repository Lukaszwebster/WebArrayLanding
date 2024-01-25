<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<template>
  <div :class="$attrs.class">
    <swiper-container v-bind="$attrs">
      <slot />
    </swiper-container>
  </div>
</template>
