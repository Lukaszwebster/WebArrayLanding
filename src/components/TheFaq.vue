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
  <section class="px-[0.9375rem] pt-[10.4675rem] md:px-[2rem] xl:px-[7.5rem]">
    <div class="mx-auto max-w-[90rem] flex flex-col gap-[2rem] lg:flex-row xl:justify-between">
      <div>
        <img src="/faq-img.png" alt="">
        <h2 class="mt-[1.5625rem] text-center text-[2.1875rem] font-700 leading-[2.625rem] xl:max-w-[31.4375rem] md:text-left md:text-[2.8125rem] xl:text-[3.25rem] xl:leading-[3.9rem]">
          All Your Questions Are Here
        </h2>
        <p class="gradient-text mt-[2.45rem] text-center text-[1.5rem] font-500 md:mt-[1.25rem] md:text-left">
          & Knock Me Directly to Know More
        </p>
        <p class="text-[#727272] md:mt-[1.125rem] xl:max-w-[29.25rem] xl:text-[1.2rem] md:leading-[1.7rem] xl:leading-[2.0375rem]">
          Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh.
        </p>
      </div>
      <ul class="mx-auto max-w-[36.5625rem] xxl:mx-0 md:mt-[3.125rem] xl:mt-0">
        <li v-for="(item, index) in faqItems" :key="index" class="item-shadow mx-auto mb-[1rem] border border-[#F4F4F4] rounded-[1.25rem] py-[1.875rem] pl-[0.875rem] pr-[2.9375rem] hover:cursor-pointer lg:py-[2.5rem]" @click="activeElement === index ? activeElement = null : activeElement = index">
          <div class="flex gap-[0.8125rem]">
            <button>
              <img src="/plus.png" alt="">
              <span class="sr-only">{{ activeElement === index ? 'schowaj pytanie' : 'pokaż pytanie' }}</span>
            </button>
            <div class="flex items-center justify-between">
              <p class="font-bold xl:text-[1.125rem]">
                {{ item.question }}
              </p>
            </div>
          </div>
          <div :class="activeElement === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'" class="will-change-grid-rows grid overflow-hidden transition-all duration-500">
            <div class="min-h-0">
              <p class="mt-4 text-[0.8rem] xl:text-[1rem]">
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

.gradient-text {
  background-image: linear-gradient(
    90.71deg,
    #6071d9 36.51%,
    #aa676f 63.73%,
    #ccb41a 97.49%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
