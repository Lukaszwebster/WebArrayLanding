<script setup lang="ts">
const icons = ['/linkedinIcon.png', '/facebookIcon.png', '/instagramIcon.png', '/twitterIcon.png', '/googleIcon.png', '/youtubeIcon.png']
</script>

<template>
  <section class="relative mx-auto mt-[2.211875rem] flex flex-col justify-center px-[0.9375rem] lg:flex-row md:px-[2rem] xl:px-[6.5625rem]">
    <img class="absolute left-[1.6875rem] hidden lg:block" src="/ball-pink-screen.png" alt="">
    <img class="absolute left-[16.75rem] hidden -top-[1.5rem] lg:block" src="/ball-purple-screen.png" alt="">
    <img class="absolute left-[0.5rem] top-[42rem] lg:left-[1.6875rem] lg:top-[31rem] xl:top-[26.25rem]" src="/ball-white-screen.png" alt="">
    <div class="max-w-[90rem] w-full flex items-center justify-between">
      <div class="mx-auto max-w-[76.875rem] flex flex-col lg:mx-0">
        <button type="button" class="mx-auto max-w-[23.125rem] w-full rounded-[2rem] bg-[#F89E52] px-[1.3125rem] py-[1.4375rem] text-[#FFF1E7] font-500 lg:mx-0 lg:max-w-[23.125rem] sm:py-[0.75rem] sm:text-[1.125rem]">
          Social Media Marketing That Works
        </button>
        <h1 class="mt-1.25rem text-center text-[2.2rem] text-[#2A2A2A] font-700 lg:text-left lg:text-[2.5rem] sm:text-[4.5rem] xl:text-[3.75rem]">
          <span class="block">Save Time</span><span class="block">Build Connections</span><span class="block">Increase Profits</span>
        </h1>
        <div class="mt-[2rem] flex justify-center gap-[0.4875rem] lg:hidden">
          <div class="flex flex-col gap-[0.4875rem]">
            <img class="" src="/bakeryTopTablet.png" alt="">
            <img class="" src="/bakeryBottomTablet.png" alt="">
          </div>
          <div>
            <img class="" src="/beachRightTablet.png" alt="">
          </div>
        </div>
        <div class="mt-[2rem] flex justify-center gap-[1.25rem] lg:justify-left">
          <button v-for="(icon, index) in icons" :key="index">
            <img :src="icon" alt="">
          </button>
        </div>
        <div class="mt-[2.5rem] flex items-center gap-[1rem] lg:mx-0 xl:gap-[2.25rem]">
          <button type="button" class="mx-auto w-full rounded-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-white lg:mx-0 sm:max-w-[14.4375rem]">
            View Our Plans
          </button>
          <button type="button" class="hidden text-[#3486FA] lg:flex">
            What We Offer
          </button>
        </div>
      </div>
      <div class="mt-[2rem] hidden justify-center gap-[0.4875rem] lg:mt-0 lg:flex">
        <div class="flex flex-col gap-[0.4875rem]">
          <img class="" src="/bakeryTopScreen.png" alt="">
          <img class="" src="/carBottomScreen.png" alt="">
        </div>
        <div>
          <img class="" src="/boatRightScreen.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
