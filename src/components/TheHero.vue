<script setup lang="ts">
const icons = ['/linkedinIcon.png', '/facebookIcon.png', '/instagramIcon.png', '/twitterIcon.png', '/googleIcon.png', '/youtubeIcon.png']
</script>

<template>
  <section class="mx-auto mt-[2.211875rem] flex flex-col justify-center px-[0.9375rem] lg:flex-row md:px-[2rem] xl:px-[6.5625rem] lg:pt-[1.81rem]">
    <div class="relative max-w-[90rem] w-full flex items-center justify-between">
      <img class="absolute hidden -left-[7.8rem] -top-[10rem] -z-10 lg:block" src="/vector-hero.png" alt="">
      <img class="absolute hidden md:left-[1rem] md:top-[0] md:block lg:-left-[5rem] lg:-top-[2rem]" src="/ball-pink-screen.png" alt="">
      <img class="absolute hidden lg:left-[7rem] md:left-[10rem] md:top-[0.4rem] -z-10 md:block lg:-top-[1rem]" src="/ball-purple-screen.png" alt="">
      <img class="absolute bottom-[5rem] -left-[0.4rem] lg:left-[1.6875rem] lg:top-[31rem] md:bottom-[4rem] xl:top-[26.25rem] -z-10 lg:-left-[5rem] md:-left-[1rem]" src="/ball-white-screen.png" alt="">
      <img class="absolute top-[13.08rem] hidden md:left-[3.2rem] -z-10 md:block" src="/ball-green-screen.png" alt="">
      <img class="absolute bottom-[0.4rem] right-[6.4rem] hidden md:block lg:hidden" src="/line-hero.png" alt="">
      <img class="absolute bottom-[18rem] right-[3.8rem] hidden -z-10 md:block lg:hidden" src="/line2-hero.png" alt="">
      <div class="mx-auto max-w-[76.875rem] flex flex-col lg:mx-0 lg:pt-[1.294375rem]">
        <button type="button" class="xs:text-[0.8rem] mx-auto max-w-[23.125rem] w-full rounded-[2rem] bg-[#F89E52] px-[1.3125rem] py-[1.4375rem] text-[#FFF1E7] font-500 lg:mx-0 lg:max-w-[23.125rem] sm:py-[0.75rem] sm:text-[1.125rem]">
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
