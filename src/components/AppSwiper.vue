<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <div>
    <swiper-container slides-per-view="auto">
      <swiper-slide class="mr-[24px] max-w-[300px]">
        <img src="/home-insurance.png" alt="">
      </swiper-slide>
      <swiper-slide class="max-w-[300px]">
        <img src="/pistachio-madness.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/woman.png" class="max-w-[300px]" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="/barber.png" class="max-w-[300px]" alt="">
      </swiper-slide>
    </swiper-container>
  </div>
</template>
