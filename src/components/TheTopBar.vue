<script setup lang="ts">
const navItems = [
  { name: 'Management' },
  { name: 'Marketing' },
  { name: 'Increase Sales' },
  { name: 'Services' },
  { name: 'Plans & Pricing' },
]

const isHamburgerActive = ref(false)
</script>

<template>
  <div class="wrapper relative z-20">
    <div class="item-shadow w-full translate-z-0 transition-top duration-500">
      <div class="relative w-full bg-white px-[1rem] py-[0.8rem] lg:px-[4rem] md:px-[2rem]">
        <div v-show="isHamburgerActive" class="item-shadow absolute right-0 top-14 max-w-[12rem] w-full bg-white px-[1rem] py-[2rem] md:hidden">
          <nav>
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
          <nav class="flex">
            <ul class="hidden gap-[0.8rem] lg:flex lg:gap-[1rem] lg:text-[1rem] sm:text-[0.8rem]">
              <li v-for="(item, index) in navItems" :key="index" class="rounded-[8rem] px-[0.5rem] py-[0.2rem] font-700 transition-colors duration-1000 hover:bg-purple-200 lg:px-[0.8rem]">
                <a>
                  {{ item.name }}
                </a>
              </li>
            </ul>
            <button class="hidden bg-[#F89E52] md:flex">
              Speak With Us!
            </button>
            <div class="flex items-center gap-2 sm:gap-10">
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
  box-shadow:
    0px 4px 4px -2px rgba(0, 0, 0, 0.06),
    0px 4px 8px -2px rgba(0, 0, 0, 0.1);
}

.wrapper {
  padding-top: v-bind('topBarPaddingTop');
}
</style>
