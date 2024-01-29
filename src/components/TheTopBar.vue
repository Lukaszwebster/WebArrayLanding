<script setup lang="ts">
const navItems = [
  { name: 'Management' },
  { name: 'Marketing' },
  { name: 'Increase Sales' },
  { name: 'Services', iconSrc: '/arrow-icon.png' },
  { name: 'Plans & Pricing', iconSrc: '/arrow-icon.png' },
]

const isHamburgerActive = ref(false)
</script>

<template>
  <div class="wrapper relative z-20">
    <div class="item-shadow w-full !lg:shadow-none">
      <div class="relative mx-auto w-full px-[1rem] py-[0.8rem] lg:px-[2rem] md:px-[2rem] xl:px-[6.5625rem]">
        <div v-show="isHamburgerActive" class="item-shadow absolute right-0 top-14 max-w-[12rem] w-full bg-white px-[1rem] py-[2rem] lg:hidden">
          <nav>
            <img src="/logo.png" alt="">
            <ul class="flex flex-col gap-1 lg:text-[1rem] sm:text-[0.8rem]">
              <li v-for="(item, index) in navItems" :key="index" class="flex rounded-[8rem] py-[0.2rem] pl-[1rem] font-700 transition-colors duration-500 hover:bg-purple-100">
                <a class="w-full" @click="isHamburgerActive = false">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="relative mx-auto max-w-[90rem] flex items-center justify-between">
          <a href="/" class="flex items-center gap-[0.2rem] font-extrabold sm:gap-[0.5rem]">
            <img class="" src="/logo.png" alt="logo">
          </a>
          <nav class="flex items-center">
            <ul class="mr-[4.585rem] hidden gap-[0.8rem] gap-[1.5rem] lg:flex xl:gap-[2.190625rem] sm:text-[0.8rem] xl:text-[1rem]">
              <li v-for="(item, index) in navItems" :key="index" class="rounded-[8rem] font-700">
                <a>
                  {{ item.name }}
                </a>
                <img class="ml-[0.57125rem] inline-block" :src="item.iconSrc" alt="">
              </li>
            </ul>
            <button class="mr-[2.5rem] hidden rounded-[1.25rem] bg-[#F89E52] px-[1rem] py-[0.5rem] text-white lg:mr-0 md:flex xl:px-[2.0625rem] xl:py-[1.1875rem]">
              Speak With Us!
            </button>
            <div class="flex items-center items-center gap-2 sm:gap-10">
              <button class="lg:hidden" type="button" @click="isHamburgerActive = !isHamburgerActive">
                <img v-if="!isHamburgerActive" src="/hamburger.png" alt="">
                <img v-if="isHamburgerActive" src="/exit.png" alt="">
                <span class="sr-only">
                  {{ isHamburgerActive ? 'zamknij menu' : 'otwórz menu' }}
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-shadow {
  box-shadow: 0px 10px 15px 0px rgba(25, 25, 25, 0.1);
}
</style>
