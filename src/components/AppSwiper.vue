<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <div>
    <swiper-container>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  </div>
</template>
