<script setup lang="ts">
const icons = ['/linkedinIcon.png', '/facebookIcon.png', '/instagramIcon.png', '/twitterIcon.png', '/googleIcon.png', '/youtubeIcon.png']
</script>

<template>
  <div>
    <section class="mx-[0.9375rem] mx-auto mt-[2.211875rem] max-w-[76.875rem] flex flex-col justify-center lg:flex-row md:px-[2rem] xl:px-0">
      <div class="w-full flex items-center justify-between">
        <div class="mx-auto flex flex-col lg:mx-0">
          <button type="button" class="mx-auto rounded-[2rem] bg-[#F89E52] px-[1.3125rem] py-[1.4375rem] text-[0.8rem] text-[#FFF1E7] font-500 lg:mx-0 lg:max-w-[23.125rem] sm:py-[0.75rem] sm:text-[1.125rem]">
            Social Media Marketing That Works
          </button>
          <h1 class="mt-1.25rem text-center text-[2.2rem] text-[#2A2A2A] font-700 lg:text-left lg:text-[2.5rem] sm:text-[4.5rem] xl:text-[3.75rem]">
            <span class="block">Save Time</span><span class="block">Build Connections</span><span class="block">Increase Profits</span>
          </h1>
          <div class="mx-[1rem] mt-[2rem] flex justify-center gap-[0.4875rem] lg:hidden">
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
          <div class="mx-[1rem] mt-[2.5rem] flex items-center gap-[1rem] lg:mx-0 xl:gap-[2.25rem]">
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
    <section class="relative mt-[10rem] w-full bg-[#292F3E] pb-[4rem] pt-[10rem]">
      <div class="absolute mx-[1rem] mt-[5.625rem] flex items-center rounded-[1.25rem] bg-#1D1D25 -top-[11rem]">
        <AppMarquee />
      </div>
      <div class="mx-auto max-w-[690px] flex flex-col justify-center gap-[1.530625rem] md:flex-row">
        <div class="mx-auto mt-[5rem] max-w-[15.625rem] w-full flex flex-col gap-[1.530625rem]">
          <div class="mx-auto max-w-[15.625rem] w-full flex flex-col items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-white py-[4.273125rem] md:mx-0">
            <AppCounter :start="0" :end="225" :duration="2" color="text-orange" />
            <span>Offices</span>
          </div>
          <div class="mx-auto max-w-[15.625rem] w-full flex flex-col items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-white py-[4.273125rem] md:mx-0">
            <AppCounter :start="0" :end="10" :duration="2" color="text-#265FDB" />
            <span>Workers</span>
          </div>
        </div>
        <div class="mx-auto max-w-[15.625rem] w-full flex flex-col gap-[1.530625rem]">
          <div class="mx-auto max-w-[15.625rem] w-full flex flex-col items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-white py-[4.273125rem] md:mx-0">
            <AppCounter :start="0" :end="15" suffix="K" :duration="2" color="text-#57C0CE" />
            <span>Customers</span>
          </div>
          <div class="mx-auto max-w-[15.625rem] w-full flex flex-col items-center justify-center gap-[0.75rem] rounded-[1.25rem] bg-white py-[4.273125rem] md:mx-0">
            <AppCounter :start="0" :end="1300" suffix="+" :duration="2" color="text-purple" />
            <span>Projects</span>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-[22.5rem] flex flex-col items-center">
        <span class="mt-[4.8444375rem] text-[1.25rem] text-[#FFD437] font-500">Social Media Management is</span>
        <div class="mt-[1.25rem] flex flex-col text-center text-[2.85625rem] text-white font-700">
          <h2>
            Building
            Brands
          </h2>
          <h2>
            Creating
            Connections
          </h2>
          <h2>Driving Sales</h2>
        </div>
        <div>
          <p class="mt-[1.6875rem] text-center text-[1.2rem] text-[#BBB] font-300">
            Social Media is more than just posting and showing off how many
            followers you have. It's a valuable
            addition to your marketing strategy that builds trust and creates connections with potential customers to drive sales and increase your revenue.
          </p>
          <p class="mt-[1.6875rem] text-center text-[1.2rem] text-[#BBB] font-300">
            Save your time and money by
            partnering with us and start seeing results that give you the highest return on investment
          </p>
          <p class="mt-[1.6875rem] text-center text-[1.2rem] text-[#BBB] font-300">
            After all; when you grow, we grow together.
          </p>
        </div>
        <button type="button" class="mx-auto mt-[0.98875rem] w-full rounded-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-white lg:mx-0 sm:max-w-[14.4375rem]">
          Contact Us
        </button>
        <button type="button" class="mt-[1.5531rem] text-[#3486FA]">
          How We Can Help
        </button>
      </div>
    </section>
  </div>
</template>
