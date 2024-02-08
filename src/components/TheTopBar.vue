<script setup lang="ts">
const navItems = [
  { name: 'Management' },
  { name: 'Marketing' },
  { name: 'Increase Sales' },
  { name: 'Services', iconSrc: '/arrow-icon.png', itemClass: 'cursor-pointer' },
  { name: 'Plans & Pricing', iconSrc: '/arrow-icon.png', itemClass: 'cursor-pointer' },
]

const isHamburgerActive = ref(false)
const isClicked = ref(false)
const clickedIndex = ref()

function toggleMenu(index: number) {
  clickedIndex.value = index
  if (clickedIndex.value === 3 || clickedIndex.value === 4)
    isClicked.value = !isClicked.value
  else
    isClicked.value = false
}

const menuItemsServices = [
  {
    title: 'Fundamentals',
    items: [
      {
        name: 'Strategy Planning',
        icon: 'menu-services/icon-menu.png',
      },
      {
        name: 'Profile Setup',
        icon: 'menu-services/icon-menu2.png',
      },
      {
        name: 'Theming & Branding',
        icon: 'menu-services/icon-menu3.png',
      },
      {
        name: 'Training',
        icon: 'menu-services/icon-menu4.png',
      },
    ],
  },
  {
    title: 'Content',
    items: [
      {
        name: 'Research & Planning',
        icon: 'menu-services/icon-menu5.png',
      },
      {
        name: 'Post Creation',
        icon: 'menu-services/icon-menu6.png',
      },
      {
        name: 'Video Creation',
        icon: 'menu-services/icon-menu7.png',
      },
      {
        name: 'Keyword Optimization',
        icon: 'menu-services/icon-menu8.png',
      },
    ],
  },
  {
    title: 'Public Relations',
    items: [
      {
        name: 'Inbox Management',
        icon: 'menu-services/icon-menu9.png',
      },
      {
        name: 'Social Listening',
        icon: 'menu-services/icon-menu10.png',
      },
      {
        name: 'Brand Reputation',
        icon: 'menu-services/icon-menu11.png',
      },
      {
        name: 'Crisis Management',
        icon: 'menu-services/icon-menu12.png',
      },
    ],
  },
  {
    title: 'Market Growth',
    items: [
      {
        name: 'Paid Advertising Setup',
        icon: 'menu-services/icon-menu13.png',
      },
      {
        name: 'Campaign Management',
        icon: 'menu-services/icon-menu14.png',
      },
      {
        name: 'Strategy Optimization',
        icon: 'menu-services/icon-menu15.png',
      },
      {
        name: 'Analytics & Reporting',
        icon: 'menu-services/icon-menu16.png',
      },
    ],
  },
]

const menuItemsPlansPricing = [
  {
    title: 'Management',
    items: [
      {
        name: 'Rates',
        icon: 'menu-plans/route.svg',
      },
      {
        name: 'Features',
        icon: 'menu-plans/magic-wand.svg',
      },
      {
        name: 'Sign Up',
        icon: 'menu-plans/colors.svg',
      },
    ],
  },
  {
    title: 'Growth Plans',
    items: [
      {
        name: 'Rates',
        icon: 'menu-plans/search-lg.svg',
      },
      {
        name: 'Features',
        icon: 'menu-plans/stars.svg',
      },
      {
        name: 'Sign Up',
        icon: 'menu-plans/user-right.svg',
      },
    ],
  },
  {
    title: 'Custom Plans',
    items: [
      {
        name: 'Inbox Management',
        icon: 'menu-plans/inbox.svg',
      },
      {
        name: 'Social Listening',
        icon: 'menu-plans/message.svg',
      },
      {
        name: 'Brand Reputation',
        icon: 'menu-plans/activity-heart.svg',
      },
      {
        name: 'Crisis Management',
        icon: 'menu-plans/announcement.svg',
      },
    ],
  },
  {
    title: 'Growth',
    items: [
      {
        name: 'Paid Advertising Setup',
        icon: 'menu-plans/dataflow.svg',
      },
      {
        name: 'Campaign Management',
        icon: 'menu-plans/shield-dollar.svg',
      },
      {
        name: 'Strategy Optimization',
        icon: 'menu-plans/chart-breakout.svg',
      },
      {
        name: 'Analytics & Reporting',
        icon: 'menu-plans/presentation.svg',
      },
    ],
  },
]

// const menuItemsServices = ['Fundamentals', 'Content', 'Public Relations', 'Market Growth']
// const menuItemsPlansPricing = ['Management', 'Growth Plans', 'Custom Plans', 'Growth']
</script>

<template>
  <div class="wrapper relative z-20">
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
                <div :class="item.itemClass" @click="toggleMenu(index)">
                  <a>
                    {{ item.name }}
                  </a>
                  <img class="ml-[0.57125rem] inline-block" :src="item.iconSrc" alt="">
                </div>
                <AppMenu v-if="isClicked && clickedIndex === index " :items="item.name === 'Services' ? menuItemsServices : menuItemsPlansPricing" />
              </li>
            </ul>
            <button class="mr-[2.5rem] hidden rounded-[1.25rem] bg-[#F89E52] px-[1rem] py-[0.5rem] text-white lg:mr-0 md:flex xl:px-[2.0625rem] xl:py-[1.1875rem]">
              Speak With Us!
            </button>
            <div class="flex items-center items-center gap-2 sm:gap-10">
              <button class="lg:hidden" type="button" @click="isHamburgerActive = !isHamburgerActive">
                <img v-if="!isHamburgerActive" src="/hamburger.png" alt="">
                <img v-if="isHamburgerActive" class="w-[1.6875rem]" src="/exit.png" alt="">
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
