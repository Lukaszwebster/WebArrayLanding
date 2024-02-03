<script setup lang="ts">
const firstListItems = ['Home', 'About', 'Contact', 'Service']
</script>

<template>
  <div class="flex flex-col justify-between bg-[#1F1D28] px-[0.9375rem] pt-[6.25rem] md:flex-row lg:justify-center lg:gap-[6.3125rem] md:px-[2rem] xl:px-[7.5rem] md:pb-[3.203125rem] md:text-left">
    <div class="lg:flex lg:gap-[6.3125rem]">
      <div>
        <div class="flex justify-center">
          <img src="/logoFooter.png" alt="">
        </div>
        <div class="mt-[2.100625rem] flex flex-col items-center md:items-start">
          <span class="text-[#C5C7CB]">For Support</span>
          <span class="text-[1.25rem] text-white font-700">0123 - 567 - 7650</span>
        </div>
      </div>
      <div class="mt-[1.246875rem] flex flex-col items-center justify-center lg:mt-0 md:items-start lg:justify-start">
        <h2 class="text-[1.25rem] text-white font-700">
          Primary Pages
        </h2>
        <div class="mt-[1.0625rem] flex flex-col items-center gap-[0.6875rem] md:items-start">
          <ul v-for="(item, index) in firstListItems" :key="index">
            <li class="text-[#C5C7CB]">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:flex lg:gap-[6.3125rem]">
      <div class="mt-[1.246875rem] flex flex-col items-center justify-center md:mt-0 md:items-start">
        <div>
          <h2 class="text-[1.25rem] text-white font-700">
            Primary Pages
          </h2>
          <div class="mt-[1.0625rem] flex flex-col items-center gap-[0.6875rem] md:items-start">
            <ul v-for="(item, index) in firstListItems" :key="index">
              <li class="text-[#C5C7CB]">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-[1.875rem] flex flex-col items-center gap-[1.5625rem] lg:mt-0 md:items-start">
        <div class="flex gap-[0.8125rem]">
          <img src="/phone.png" alt="">
          <span class="text-[#C5C7CB]">8 (495) 989—20—11</span>
        </div>
        <div class="flex gap-[0.8125rem]">
          <img src="/mail.png" alt="">
          <span class="text-[#C5C7CB]">contact@socialseal.com</span>
        </div>
        <div class="flex gap-[0.8125rem]">
          <img class="self-start" src="/pin.png" alt="">
          <span class="max-w-[15.28125rem] text-[#C5C7CB]">Ranelagh Place, Liverpool, L3 5UL, England</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center bg-[#24222E] py-[1.3125rem]">
    <span class="text-white"> © 2023 Social Seal. All Rights Reserved</span>
  </div>
</template>
