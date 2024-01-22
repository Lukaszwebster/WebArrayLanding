<script setup lang="ts">
// import _throttle from 'lodash.throttle'

// defineProps<{
//   activeSectionId: string
// }>()

const navItems = [
  { name: 'O nas', href: '#about' },
  { name: 'Oferta', href: '#offer' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#contact' },
]

const topBar = ref()
const isScrolled = ref(false)
const topBarHeight = ref(0)
const topBarPaddingTop = computed(() => {
  return isScrolled.value ? `${topBarHeight.value}px` : 0
})
function handleScroll() {
  if (window.scrollY > topBarHeight.value)
    isScrolled.value = true
  else
    isScrolled.value = false
}
// funkcja handleScroll wywoluje sie co 50ms a nie czesciej
// const throttledHandleScroll = _throttle(handleScroll, 50)
// onMounted(() => {
//   topBarHeight.value = topBar.value.offsetHeight
//   document.addEventListener('scroll', throttledHandleScroll, { passive: true })
// })
// onBeforeUnmount(() => {
//   document.removeEventListener('scroll', throttledHandleScroll)
// })

const isHamburgerActive = ref(false)
</script>

<template>
  <div class="wrapper relative z-20">
    <!-- jesli nie jest display fixed to nie dziala deklaracja top -->
    <div ref="topBar" :class="{ fixed: isScrolled }" class="item-shadow w-full translate-z-0 transition-top duration-500" :style="`top:${isScrolled ? '0px' : `-${topBarHeight}px`}`">
      <div class="relative w-full bg-white px-[1rem] py-[0.8rem] lg:px-[4rem] md:px-[2rem]">
        <div v-show="isHamburgerActive" class="item-shadow absolute right-0 top-14 max-w-[12rem] w-full bg-white px-[1rem] py-[2rem] md:hidden">
          <nav>
            <ul class="flex flex-col gap-1 lg:text-[1rem] sm:text-[0.8rem]">
              <li v-for="(item, index) in navItems" :key="index" :class="{ 'bg-purple-400 text-white': item.href === `#${activeSectionId}` }" class="flex rounded-[8rem] py-[0.2rem] pl-[1rem] font-700 transition-colors duration-500 hover:bg-purple-100">
                <a class="w-full" :href="item.href" @click="isHamburgerActive = false">
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
          <nav>
            <ul class="hidden gap-[0.8rem] md:flex lg:gap-[1rem] lg:text-[1rem] sm:text-[0.8rem]">
              <li v-for="(item, index) in navItems" :key="index" :class="{ 'bg-purple-400 text-white': item.href === `#${activeSectionId}` }" class="rounded-[8rem] px-[0.5rem] py-[0.2rem] font-700 transition-colors duration-1000 hover:bg-purple-200 lg:px-[0.8rem]">
                <a :href="item.href">
                  {{ item.name }}
                </a>
              </li>
            </ul>
            <div class="flex items-center gap-2 sm:gap-10">
              <button type="button" :class="isHamburgerActive ? 'i-ic:round-close' : 'i-ic:round-menu' " class="text-[1.8rem] text-gray-500 md:hidden sm:text-[2rem]" @click="isHamburgerActive = !isHamburgerActive">
                <img src="/hamburger.png" alt="">
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
