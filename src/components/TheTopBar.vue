<script setup lang="ts">
const isHamburgerActive = ref(false)
const activeItemIndex = ref<number | null>(null)

const menuItemsServices = [
  {
    title: 'Fundamentals',
    items: [
      {
        name: 'Strategy Planning',
        icon: 'menu/route.svg',
      },
      {
        name: 'Profile Setup',
        icon: 'menu/magic-wand.svg',
      },
      {
        name: 'Theming & Branding',
        icon: 'menu/colors.svg',
      },
      {
        name: 'Training',
        icon: 'menu/award.svg',
      },
    ],
  },
  {
    title: 'Content',
    items: [
      {
        name: 'Research & Planning',
        icon: 'menu/search-lg.svg',
      },
      {
        name: 'Post Creation',
        icon: 'menu/image.svg',
      },
      {
        name: 'Video Creation',
        icon: 'menu/video.svg',
      },
      {
        name: 'Keyword Optimization',
        icon: 'menu/line-chart-up.svg',
      },
    ],
  },
  {
    title: 'Public Relations',
    items: [
      {
        name: 'Inbox Management',
        icon: 'menu/inbox.svg',
      },
      {
        name: 'Social Listening',
        icon: 'menu/message.svg',
      },
      {
        name: 'Brand Reputation',
        icon: 'menu/activity-heart.svg',
      },
      {
        name: 'Crisis Management',
        icon: 'menu/announcement.svg',
      },
    ],
  },
  {
    title: 'Market Growth',
    items: [
      {
        name: 'Paid Advertising Setup',
        icon: 'menu/dataflow.svg',
      },
      {
        name: 'Campaign Management',
        icon: 'menu/shield-dollar.svg',
      },
      {
        name: 'Strategy Optimization',
        icon: 'menu/chart-breakout.svg',
      },
      {
        name: 'Analytics & Reporting',
        icon: 'menu/presentation.svg',
      },
    ],
  },
]

const menuItemsPlansPricing = [
  {
    title: 'Management',
    description: 'Great for those starting up in Social Media and looking for a regular management service to keep up.',
    items: [
      {
        name: 'Rates',
        icon: 'menu/route.svg',
      },
      {
        name: 'Features',
        icon: 'menu/magic-wand.svg',
      },
      {
        name: 'Sign Up',
        icon: 'menu/colors.svg',
      },
    ],
  },
  {
    title: 'Growth Plans',
    description: 'Great for those starting up in Social Media and looking for a regular management service to keep up.',
    items: [
      {
        name: 'Rates',
        icon: 'menu/search-lg.svg',
      },
      {
        name: 'Features',
        icon: 'menu/stars.svg',
      },
      {
        name: 'Sign Up',
        icon: 'menu/user-right.svg',
      },
    ],
  },
  {
    title: 'Custom Plans',
    items: [
      {
        name: 'Inbox Management',
        icon: 'menu/inbox.svg',
      },
      {
        name: 'Social Listening',
        icon: 'menu/message.svg',
      },
      {
        name: 'Brand Reputation',
        icon: 'menu/activity-heart.svg',
      },
      {
        name: 'Crisis Management',
        icon: 'menu/announcement.svg',
      },
    ],
  },
  {
    title: 'Growth',
    items: [
      {
        name: 'Paid Advertising Setup',
        icon: 'menu/dataflow.svg',
      },
      {
        name: 'Campaign Management',
        icon: 'menu/shield-dollar.svg',
      },
      {
        name: 'Strategy Optimization',
        icon: 'menu/chart-breakout.svg',
      },
      {
        name: 'Analytics & Reporting',
        icon: 'menu/presentation.svg',
      },
    ],
  },
]

const navItems = [
  { name: 'Management' },
  { name: 'Marketing' },
  { name: 'Increase Sales' },
  { name: 'Services', items: menuItemsServices, iconSrc: '/arrow-icon.svg', itemClass: 'cursor-pointer' },
  { name: 'Plans & Pricing', items: menuItemsPlansPricing, iconSrc: '/arrow-icon.svg', itemClass: 'cursor-pointer' },
]

function handleNavItemClick(index: number) {
  if (navItems[index].items) {
    if (activeItemIndex.value === index)
      activeItemIndex.value = null
    else
      activeItemIndex.value = index
  }
  else { activeItemIndex.value = null }
}
</script>

<template>
  <div v-show="activeItemIndex" :class="activeItemIndex ? 'bg-gray-200 opacity-40' : ''" class="fixed z-30 h-full w-full" @click="activeItemIndex = null" />
  <div class="wrapper relative z-40">
    <div class="item-shadow w-full !lg:shadow-none">
      <div class="relative mx-auto w-full px-[1rem] py-[0.8rem] lg:px-[2rem] lg:py-[1.46875rem] md:px-[2rem] xl:px-[7.5rem]">
        <div v-show="isHamburgerActive" class="item-shadow absolute right-0 top-14 max-w-[18.75rem] w-full bg-white py-[2rem] lg:hidden">
          <nav>
            <ul class="flex flex-col lg:text-[1rem] sm:text-[0.8rem]">
              <li v-for="(item, index) in navItems" :key="index" class="flex flex-col rounded-[8rem] transition-colors duration-500 hover:bg-purple-100">
                <a class="w-full border-t-1px py-[0.625rem] pl-[1rem] text-[#0B0B0B] font-500" @click="isHamburgerActive = false">
                  {{ item.name }}
                </a>
              </li>
              <div class="h-[1px] bg-gray-200" />
            </ul>
          </nav>
        </div>
        <div class="mx-auto max-w-[90rem] flex items-center justify-between">
          <a href="/" class="flex items-center gap-[0.2rem] font-extrabold sm:gap-[0.5rem]">
            <img class="" src="/logo.png" alt="logo">
          </a>
          <nav class="flex items-center">
            <ul class="mr-[4.585rem] hidden gap-[0.8rem] gap-[1.5rem] lg:flex xl:gap-[2.190625rem] sm:text-[0.8rem] xl:text-[1rem]">
              <li v-for="(item, index) in navItems" :key="index" class="rounded-[8rem] font-700">
                <div class="cursor-pointer select-none" :class="activeItemIndex === index ? 'text-#F89E52 ' : ''" @click="handleNavItemClick(index)">
                  <a>
                    {{ item.name }}
                  </a>
                  <svg v-if="item.items" :class="activeItemIndex === index ? 'transform rotate-180 transition-500 ' : 'transition-500'" class="ml-[0.57125rem] inline-block" width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :class="activeItemIndex === index ? 'fill-[#F89E52]' : ''" d="M14.62 1.21875C14.7867 1.40625 14.7867 1.58333 14.62 1.75L8.05754 8.3125C7.89087 8.47917 7.72421 8.47917 7.55754 8.3125L0.995041 1.75C0.828374 1.58333 0.828374 1.40625 0.995041 1.21875L1.62004 0.625C1.78671 0.4375 1.96379 0.4375 2.15129 0.625L7.80754 6.25L13.4638 0.625C13.6513 0.4375 13.8284 0.4375 13.995 0.625L14.62 1.21875Z" fill="#252541" />
                  </svg>
                </div>
                <AppMenu v-show="activeItemIndex === index" :items="item.items ? item.items : []" />
              </li>
            </ul>
            <button type="button" class="mr-[2.5rem] hidden rounded-[1.25rem] bg-[#F89E52] px-[1rem] py-[0.5rem] text-white lg:mr-0 md:flex xl:px-[2.0625rem] xl:py-[1.1875rem]">
              Speak With Us!
            </button>
            <div class="flex items-center items-center gap-2 sm:gap-10">
              <button class="lg:hidden" type="button" @click="isHamburgerActive = !isHamburgerActive">
                <img v-if="!isHamburgerActive" src="/hamburger.svg" alt="">
                <img v-if="isHamburgerActive" class="w-[1.6875rem]" src="/exit.svg" alt="">
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
