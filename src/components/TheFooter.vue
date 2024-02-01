<script setup lang="ts">
const firstListItems = ['Home', 'About', 'Contact', 'Service']
</script>

<template>
  <div class="bg-[#1F1D28] pt-[6.25rem]">
    <div class="flex justify-center">
      <img src="/logoFooter.png" alt="">
    </div>
    <div class="mt-[2.100625rem] flex flex-col items-center">
      <span class="text-[#C5C7CB]">For Support</span>
      <span class="text-[1.25rem] text-white font-700">0123 - 567 - 7650</span>
    </div>
    <div class="mt-[1.246875rem] flex flex-col items-center justify-center">
      <h2 class="text-[1.25rem] text-white font-700">
        Primary Pages
      </h2>
      <div class="mt-[1.0625rem] flex flex-col items-center gap-[0.6875rem]">
        <ul v-for="(item, index) in firstListItems" :key="index">
          <li class="text-[#C5C7CB]">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-[1.246875rem] flex flex-col items-center justify-center">
      <h2 class="text-[1.25rem] text-white font-700">
        Primary Pages
      </h2>
      <div class="mt-[1.0625rem] flex flex-col items-center gap-[0.6875rem]">
        <ul v-for="(item, index) in firstListItems" :key="index">
          <li class="text-[#C5C7CB]">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-[1.875rem] flex flex-col items-center gap-[1.5625rem]">
      <div class="flex gap-[0.8125rem]">
        <img src="/phone.png" alt="">
        <span class="text-[#C5C7CB]">8 (495) 989—20—11</span>
      </div>
      <div class="flex gap-[0.8125rem]">
        <img src="/mail.png" alt="">
        <span class="text-[#C5C7CB]">contact@socialseal.com</span>
      </div>
      <div class="flex gap-[0.8125rem]">
        <img src="/pin.png" alt="">
        <span class="text-[#C5C7CB]">Ranelagh Place, Liverpool, L3 5UL, England</span>
      </div>
    </div>
    <div class="mt-[1.946875rem] flex justify-center bg-[#24222E] py-[1.3125rem]">
      <span class="text-white"> © 2023 Social Seal. All Rights Reserved</span>
    </div>
  </div>
</template>
