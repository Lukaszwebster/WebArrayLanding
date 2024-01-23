<script setup lang="ts">
const icons = ['/linkedinIcon.png', '/facebookIcon.png', '/instagramIcon.png', '/twitterIcon.png', '/googleIcon.png', '/youtubeIcon.png']
</script>

<template>
  <div>
    <section class="mx-[0.9375rem] mt-[2.211875rem] flex flex-col">
      <button type="button" class="mx-auto rounded-[2rem] bg-[#F89E52] px-[1.3125rem] py-[1.4375rem] text-[1.125rem] text-[#FFF1E7] font-500 sm:py-[0.75rem]">
        Social Media Marketing That Works
      </button>
      <h1 class="mt-1.25rem text-center text-[2.2rem] text-[#2A2A2A] font-700 sm:text-[4.5rem]">
        <span class="block">Save Time</span><span class="block">Build Connections</span><span class="block">Increase Profits</span>
      </h1>
      <div class="mt-[2rem] flex justify-center gap-[0.4875rem]">
        <div class="flex flex-col gap-[0.4875rem]">
          <img src="/bakeryTop.png" alt="">
          <img src="/bakeryBottom.png" alt="">
        </div>
        <img src="/beachRight.png" alt="">
      </div>
      <div class="mt-[2rem] flex justify-center gap-[1.25rem]">
        <button v-for="(icon, index) in icons" :key="index">
          <img :src="icon" alt="">
        </button>
      </div>
      <button type="button" class="mx-auto mt-[2.5rem] w-full rounded-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-white sm:max-w-[14.4375rem]">
        View Our Plans
      </button>
    </section>
  </div>
</template>
