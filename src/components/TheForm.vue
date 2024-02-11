<script setup lang="ts">
const isActive = ref()
</script>

<template>
  <div class="item-shadow mt-[3rem] w-full rounded-[1.25rem] px-[1.625rem] py-[1.9375rem] xl:mt-0 xl:max-w-[30.15625rem] md:px-[2.875rem]">
    <h2 class="text-[1.5rem]">
      Free Consultation
    </h2>
    <form class="mt-[1.5625rem] flex flex-col gap-[1.25rem]" action="">
      <input class="border border-[#D5D5D5] rounded-[0.8125rem] bg-[#FBFDFF] px-[1.8125rem] py-[1.40625rem] placeholder-[#0B0B0B]" type="text" placeholder="Name">
      <input class="border border-[#D5D5D5] rounded-[0.8125rem] bg-[#FBFDFF] px-[1.8125rem] py-[1.40625rem] placeholder-[#0B0B0B]" type="text" placeholder="Email Address">
      <input class="border border-[#D5D5D5] rounded-[0.8125rem] bg-[#FBFDFF] px-[1.8125rem] py-[1.40625rem] placeholder-[#0B0B0B]" type="text" placeholder="Phone Number">
      <select class="border border-[#D5D5D5] rounded-[0.8125rem] bg-[#FBFDFF] px-[1.8125rem] py-[1.40625rem] placeholder-[#0B0B0B]">
        <option>Subject</option>
      </select>
      <button type="button" class="max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white md:max-w-none" @click="isActive = !isActive">
        Consultation
      </button>
    </form>
  </div>

  <div v-if="isActive" class="item-shadow absolute bottom-[4rem] left-[50%] w-full translate-x--50 rounded-[1.25rem] bg-white px-[1.625rem] py-[1.9375rem] xl:mt-0 xl:max-w-[31.25rem] md:px-[2.875rem]">
    <h2 class="text-center text-[1.875rem] font-500">
      What’s Your Availability
    </h2>
    <form class="mt-[1.5625rem] flex flex-col gap-[1.25rem]" action="">
      <select class="border border-[#D5D5D5] rounded-[0.8125rem] bg-[#FBFDFF] px-[1.8125rem] py-[1.40625rem] placeholder-[#0B0B0B]">
        <option>Select a time</option>
      </select>
      <select class="border border-[#D5D5D5] rounded-[0.8125rem] bg-[#FBFDFF] px-[1.8125rem] py-[1.40625rem] placeholder-[#0B0B0B]">
        <option>Select a time</option>
      </select>
      <button class="max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white md:max-w-none">
        Consultation
      </button>
    </form>
  </div>
</template>

<style scoped>
.item-shadow {
  box-shadow: 0px 15px 30px 0px rgba(61, 90, 125, 0.08);
}
</style>
