<script setup lang="ts">
const faqItems = [
  {
    question: 'What\'s the difference between Pro and Free?',
    answer: 'Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Acscelerisque nibh dolores consectetuer,',
  },
  {
    question: 'What\'s the difference between Pro and Free?',
    answer: 'Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Acscelerisque nibh dolores consectetuer,',
  },
  {
    question: 'What\'s the difference between Pro and Free?',
    answer: 'Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Acscelerisque nibh dolores consectetuer,',
  },
  {
    question: 'What\'s the difference between Pro and Free?',
    answer: 'Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Acscelerisque nibh dolores consectetuer,',
  },
]
const activeElement = ref()
</script>

<template>
  <section class="px-[0.9375rem] pt-[10.4675rem] md:px-[2rem] xl:px-[6.5625rem]">
    <div class="mx-auto max-w-[90rem] flex flex-col lg:flex-row">
      <div>
        <img src="/faq-img.png" alt="">
        <h2 class="text-[2.1875rem] font-700">
          All Your Questions Are Here
        </h2>
        <p class="mt-[2.45rem] text-[1.5rem]">
          & Knock Me Directly to Know More
        </p>
        <p class="text-[#727272]">
          Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed
          laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in faqItems" :key="index" class="item-shadow mx-auto mt-[1rem] border border-[#F4F4F4] rounded-[1.25rem] py-[1.875rem] pb-4 pl-[0.875rem] pr-[2.9375rem] hover:cursor-pointer lg:py-[2.5rem]" @click="activeElement === index ? activeElement = null : activeElement = index">
          <div class="flex gap-[0.8125rem]">
            <button>
              <img src="/plus.png" alt="">
              <span class="sr-only">{{ activeElement === index ? 'schowaj pytanie' : 'pokaż pytanie' }}</span>
            </button>
            <div class="flex items-center justify-between">
              <p class="font-bold">
                {{ item.question }}
              </p>
            </div>
          </div>
          <div :class="activeElement === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'" class="will-change-grid-rows grid overflow-hidden transition-all duration-500">
            <div class="min-h-0">
              <p class="mt-4 text-[0.8rem]">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.item-shadow {
  box-shadow: 0px 15px 30px 0px rgba(61, 90, 125, 0.05);
}
</style>
