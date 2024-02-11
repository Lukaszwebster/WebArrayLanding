<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// scroll image
const scrollImage = ref<HTMLImageElement | null>(null)
let initialScrollY = 0

function handleScroll() {
  if (scrollImage.value) {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    const translateY = (scrollY - initialScrollY) * 0.1
    scrollImage.value.style.transform = `translateY(${translateY}px)`
  }
}

onMounted(() => {
  initialScrollY = window.scrollY || document.documentElement.scrollTop
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// parallax image
const parallaxContainer = ref<HTMLElement | null>(null)
const parallaxImage = ref<HTMLImageElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

function updateParallax(event: MouseEvent) {
  mouseX.value = event.clientX
  mouseY.value = event.clientY

  if (parallaxImage.value && parallaxContainer.value) {
    const boundingRect = parallaxContainer.value.getBoundingClientRect()
    const offsetX = (mouseX.value - boundingRect.left) / boundingRect.width - 0.5
    const offsetY = (mouseY.value - boundingRect.top) / boundingRect.height - 0.5

    parallaxImage.value.style.transform = `translate(${offsetX * 200}px, ${offsetY * 10}px)`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateParallax)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateParallax)
})

const bars = [
  {
    text: 'Brand Impersonation',
    class: 'bg-#FFFAF1 border-#FFD78D',
  },
  {
    text: 'Compromised Account',
    class: 'bg-#FFE border-#FFEF3E',
  },
  {
    text: 'Scams',
    class: 'bg-#FFFAF1 border-#FFD78D',

  },
  {
    text: 'Hi-jacked Posts',
    class: 'bg-#F6FCFF border-#C0D4F1',

  },
  {
    text: 'Bad Sentiment',
    class: 'bg-#FFE border-#FFEF3E',

  },
  {
    text: 'Bad Reviews',
    class: 'bg-#FFF6FA border-#FFB6D8',

  },
  {
    text: 'Competitor Envy',
    class: 'bg-#F7FFF7 border-#CFE2CF',
  },
  {
    text: 'False Media',
    class: 'bg-F6FCFF border-C0D4F1',
  },
  {
    text: 'Low Social Authority',
    class: 'bg-#FFF6F6 border-#FFAFAF',
  },
  {
    text: 'Information Inaccuracy',
    class: 'bg-#FCF9FF border-#DAC0FF',
  },
  {
    text: 'Missed Messages',
    class: 'border-#FFB6FF bg-#FFF6FF ',
  },
]

const questionsList = ['Seo quotes to inspire your campaign', 'Much easier to double your business', 'Free page speed insights tool to find out exactly', 'Seo quotes to inspire your campaign']
</script>

<template>
  <div>
    <TheHero />
    <TheAbout />
    <section class="relative mt-[6.850625rem] px-[0.9375rem] md:px-[2rem] xl:px-[7.5rem]">
      <div class="mx-auto max-w-[90rem] flex flex-col lg:flex-row lg:gap-[2.5rem]">
        <div class="lg:max-w-[25.625rem]">
          <img class="rotating-image absolute -top-[5rem] xl:left-[1rem] xxl:left-[28rem] xl:-top-[3rem]" src="/line.png" alt="">
          <img class="rotating-image absolute left-[9rem] hidden -bottom-[3rem] lg:left-[20rem] xxl:left-[48rem] md:block" src="/line3.png" alt="">
          <div class="flex flex-col justify-center lg:flex-row">
            <div class="flex flex-col items-center lg:items-start">
              <AppPageHeader wrapper-class="lg:items-start flex flex-col" title-class="!lg:max-w-none !leading-[3.425625rem]" subtitle="Our Expertise is Your Success" title="Struggling to Make Engaging Content?" />
              <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 lg:max-w-[23.1875rem] md:max-w-[42.3125rem] md:text-left">
                From the research and planning to
                creating striking images and videos
                for your posts, our service focuses on
                creating a <span class="text-[#191919] underline"> unique voice</span> for your
                brand that will <span class="text-[#191919] underline"> engage your audience</span>
                and keep them coming back for
                more!
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <AppSwiper class="mt-[2.28rem] max-w-screen md:mt-[1rem]" autoplay-delay="2000" slides-per-view="auto" space-between="20">
            <swiper-slide class="max-w-[300px]">
              <img src="/home-insurance.png" alt="">
            </swiper-slide>
            <swiper-slide class="max-w-[300px]">
              <img src="/pistachio-madness.png" alt="">
            </swiper-slide>
            <swiper-slide class="max-w-[300px]">
              <img src="/woman.png" alt="">
            </swiper-slide>
            <swiper-slide class="max-w-[300px]">
              <img src="/barber.png" alt="">
            </swiper-slide>
          </AppSwiper>
        </div>
      </div>
      <div class="mx-auto max-w-[90rem] flex justify-center lg:justify-left">
        <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.75rem] text-white md:mt-[3.48125rem] md:max-w-[12.125rem]">
          View More
        </button>
      </div>
    </section>
    <section class="px-[0.9375rem] pt-[8.28125rem] md:px-[2rem] xl:px-[7.5rem]">
      <div class="relative mx-auto max-w-[90rem] flex flex-col items-center justify-between lg:flex-row lg:gap-[6.875rem]">
        <img class="floating-image absolute bottom-[1rem] right-[4rem] hidden md:block lg:-bottom-[8rem] xl:-bottom-[1rem]" src="/line5.png" alt="">
        <div class="relative">
          <img class="rotating-image absolute right-1rem md:right-[4rem] -z-10 lg:-right-[24rem] lg:-top-[5rem] md:-top-[4rem] xl:-right-[30rem] xl:-top-[2rem]" src="/line2-hero.png" alt="">
          <img class="max-w-[17.5rem] md:max-w-[34.0625rem]" src="/phone-img.png" alt="">
        </div>
        <div class="flex flex-col items-center lg:max-w-[32.8125rem] lg:items-start">
          <AppPageHeader
            title-class="md:!text-center md:!max-w-none md:!leading-[3rem] !lg:text-left !text-[2rem] !leading-[2.4rem] !md:text-[2.5rem]"
            wrapper-class="lg:!items-start"
            class="mt-[3.75rem]"
            subtitle="Worry-Free" title=" Risking Your
            Reputation and
            Losing Sales?"
          />
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-[1.2rem] text-[#727272] font-300 leading-[2.04rem] md:max-w-[42.3125rem] md:text-center lg:text-left">
            Our 24/7 Inbox Management is your
            answer to keep up with messages
            and not miss out on potential leads.
          </p>
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 leading-[2.04rem] md:max-w-[42.3125rem] lg:text-left">
            By offering <span class="text-[#191919] underline"> quick replies</span> to your
            audience you will<span class="underline">  elevate your</span><span class="text-[#191919] underline">  brands image</span> and help you <span class="text-[#191919] underline"> get the sale</span>
          </p>
          <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white md:mt-[2.29rem] md:max-w-[17.4375rem]">
            Start Replying Faster
          </button>
        </div>
      </div>
    </section>
    <section class="mt-[7.484375rem] px-[0.9375rem] md:px-[2rem] xl:px-[7.5rem] lg:pb-[7.5rem]">
      <div class="relative mx-auto max-w-[90rem] flex flex-col items-center justify-between lg:flex-row-reverse">
        <img class="floating-image absolute left-[18rem] hidden xl:bottom-0 lg:block lg:-bottom-[2rem]" src="/line5.png" alt="">
        <img class="rotating-image absolute hidden lg:right-[30rem] xl:right-[30rem] lg:block lg:-top-[1rem] xl:-top-[3rem]" src="/line6.png" alt="">
        <img class="md:hidden" src="/success-img.png" alt="">
        <img class="hidden lg:max-w-[36.5625rem] md:flex" src="/success-img-tablet.png" alt="">
        <div class="mt-[3.75rem] flex flex-col xl:max-w-[36.5625rem] lg:items-start md:items-center">
          <AppPageHeader
            wrapper-class="!items-start !md:items-center !lg:items-start"
            subtitle-class="!text-[1.125rem]"
            subtitle="Thinking &quot;Outside The Box&quot;" title="Troubles Growing Your Audience?"
            title-class="text-left md:!text-center !lg:text-left md:!text-[2.8125rem] !text-[2.1875rem] !leading-[2.625rem] md:!leading-[3.375rem] md:!max-w-none !xl:text-[3.25rem] !xl:leading-[3.9rem]"
          />
          <p class="mt-[1.74625rem] text-[1.2rem] text-[#727272] font-300 leading-[2.04rem] md:text-center lg:text-left">
            <span class="text-[#191919] underline"> Attract new followers</span> that are
            <span class="text-[#191919] underline"> relevant </span> to your objectives by
            reaching <span class="text-[#191919] underline"> outside your social media</span>
            bubble, and you'll start to see a
            <span class="text-[#191919] underline"> quicker return on your investment.</span>
          </p>
          <p class="mt-[1.74625rem] text-[1.2rem] text-[#727272] font-300 md:text-center lg:text-left">
            Along with <span class="text-[#191919] underline"> captivating visuals</span>, our
            teams perform countless <span class="text-[#191919] underline"> hours of research and planning</span> to deliver <span class="text-[#191919] underline">optimized marketing campaigns </span>  that
            target your <span class="text-[#191919] underline"> ideal audience</span> who are
            most likely to <span class="text-[#191919] underline"> convert into leads</span>.
          </p>
          <p class="mt-[1.74625rem] text-[1.2rem] text-[#727272] font-300 md:text-center lg-text-left">
            By thoroughly planning your paid
            <span class="text-[#191919] underline"> Social Media Advertising</span> campaign,
            we are able to ensure that every
            penny of your <span class="text-[#191919] underline"> marketing budget is well spent</span>.
          </p>
          <div class="flex justify-center">
            <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white">
              Start Driving Sales
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="floating-section px-[0.9375rem] pb-[4.345625rem] md:px-[2rem] xl:px-[7.5rem] md:pb-[7.5rem] md:pt-[6.88rem]">
      <div class="relative mx-auto max-w-[90rem] flex flex-col items-center justify-between lg:flex-row lg:gap-[6.875rem]">
        <img class="rotating-image absolute bottom-[8rem] left-[2rem] hidden xl:bottom-[7rem] lg:block" src="/small-line.png" alt="">
        <img class="rotating-image absolute hidden -right-[0.8rem] -top-[7rem] lg:block" src="/large-line.png" alt="">
        <img src="/social-trolls.png" alt="">
        <img ref="scrollImage" class="absolute left-[8rem] hidden transform transition -top-[10rem] lg:block" src="/exclamation.png" alt="">
        <img id="icon1" class="floating-icon absolute left-[30rem] z-10 hidden md:block" src="/purple-dot.png" alt="">
        <img id="icon2" class="floating-icon absolute top-[4rem] hidden md:block" src="/purple-robot.png" alt="">

        <div class="z-20 flex flex-col items-center lg:max-w-[32.8125rem] lg:items-start">
          <AppPageHeader
            subtitle-class="!text-[1.125rem] !xl:text-[1.25rem]"
            title-class="!text-[2rem] !md:text-[2.8125rem] xs:!text-[2.1875rem] !lg:text-[2.8rem]  !lg:text-[3.25rem] !md:text-center !lg:text-left !md:max-w-none !md:leading-[3.375rem] !xl:leading-[3.9rem] !xl:max-w-[32.0625rem]"
            wrapper-class="!lg:items-start "
            subtitle="Keeping You Covered"
            title=" Social Gossiping
            Slowing You Down?"
          />
          <p class="max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] lg:text-left md:leading-[2.04rem]">
            Staying on top of how your brand is
            being used is an important aspect to
            <span class="text-[#191919] underline"> protect your identity and reputation.</span>
          </p>
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 lg:max-w-[31.3125rem] md:max-w-[42.3125rem] md:text-left md:leading-[2.04rem]">
            Our sophisticated <span class="text-[#191919] underline"> threat monitoring</span>
            system enables us to <span class="text-[#191919] underline"> quickly identify threats</span> towards your brand and deal with them to <span class="text-[#191919] underline"> prevent damage</span> to your
            reputation.
          </p>
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] md:text-left">
            The most common threats we
            encounter:
          </p>
          <div class="mt-[1.24rem] flex flex-wrap justify-center gap-[0.38rem] lg:justify-left">
            <TheBars v-for="(item, index) in bars" :key="index" class="z-20" :text="item.text" :bar-class="item.class" />
          </div>
          <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white md:max-w-[16.399375rem]">
            Protect Your Brand
          </button>
        </div>
      </div>
    </section>
    <section class="bg-[#292F3E] pb-[2.1875rem] pt-[7.490625rem] lg:pb-[6.91rem] md:pb-[4.271875rem]">
      <div class="mx-auto max-w-[90rem] px-[0.9375rem] md:px-[2rem] xl:px-[7.5rem]">
        <AppPageHeader
          subtitle="Visually Impressive"
          subtitle-class="!md:text-[1.125rem]"
          title="We Can't Wait To Redefine Your Brand"
          title-class="text-white !text-[2.1875rem] !md:text-[2.8125rem] !lg:text-[3.25rem] !text-center lg:max-w-[34rem] !xl:max-w-[35rem] !md:max-w-[29.4375rem] !md:leading-[3.375rem]"
        />
      </div>
      <AppSwiper class="mt-[4.375rem] max-w-screen" autoplay-delay="2000" space-between="20" slides-per-view="auto">
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper1.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper2.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper3.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper4.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper5.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper1.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper2.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper3.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper4.png" alt="">
        </swiper-slide>
        <swiper-slide class="max-w-[19.125rem] lg:max-w-[410px]">
          <img src="/swiper5.png" alt="">
        </swiper-slide>
      </AppSwiper>
      <div class="flex flex-col items-center px-[0.9375rem] lg:items-start md:px-[2rem] xl:px-[7.5rem]">
        <h2 class="mt-[1.4375rem] text-center text-[1.5rem] text-white font-700 lg:mt-[6.87rem] lg:text-left lg:text-[3.25rem] md:text-[2.8125rem]">
          What Are You Waiting For?
        </h2>
        <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white lg:hidden md:max-w-[16.42rem]">
          Protect Your Brand
        </button>
      </div>
    </section>
    <section class="relative pt-[10.4675rem]">
      <div class="mx-auto max-w-[90rem]">
        <div class="px-[0.9375rem] md:px-[2rem] xl:px-[7.5rem]">
          <img class="absolute right-0 top-[4rem] z-10 xl:-top-[2rem]" src="/company-shape.png" alt="">
          <AppPageHeader
            title-class="!text-[2rem] !text-center !md:text-[2.5rem] !max-w-none !lg:text-[3.25rem] !md:leading-[3rem] !xl:max-w-[50.4375rem] !xl:leading-[3.9rem]"
            subtitle-class="!text-[1.125rem]"
            subtitle="Our Company" title="We Create Creative Designs For Every Web Page"
            description-class="!mt-0 "
            wrapper-class="!lg:max-w-[54.375rem] lg:mx-auto"
          />
          <p class="text-center text-[#727272] lg:mx-auto xl:mt-[1.8125rem] lg:max-w-[42rem] lg:text-[1.2rem] md:leading-[1.7rem] !xl:leading-[2.0375rem]">
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.
          </p>
        </div>
        <div class="flex flex-col items-center lg:flex-row lg:gap-[5.3125rem] md:px-[2rem] xl:px-[7.5rem]">
          <img class="z-20 mt-[4.035rem] hidden md-block" src="/company-img-desktop.png" alt="">
          <img class="z-20 mt-[4.035rem] md:hidden" src="/company-img-mobile.png" alt="">
          <div class="flex flex-col items-center px-[0.9375rem] lg:items-start md:px-[2rem] xl:px-0">
            <h2 class="gradient-text mt-[3.125rem] text-center text-[3.125rem] font-700 leading-[3.75rem] lg:max-w-[19.875rem] md:max-w-[43.125rem] lg:text-left">
              All Your
              Questions Are
              Here
            </h2>
            <ul>
              <li v-for="(item, index) in questionsList" :key="index" class="mt-[1rem] flex gap-[0.9375rem] text-[1.125rem] text-#959EB6">
                <img class="h-min" src="/check-icon.png" alt="">
                {{ item }}
              </li>
            </ul>
            <button class="z-20 mt-[3.70625rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white md:max-w-[14.07125rem]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="relative px-[0.9375rem] pt-[5.051875rem] md:px-[2rem] xl:px-[7.5rem]">
      <div class="z-20 mx-auto max-w-[90rem] lg:grid lg:grid-cols-2 xl:gap-[4.4375rem]">
        <div class="relative flex justify-center">
          <img class="md:hidden" src="/bakery2.png" alt="">
          <img class="hidden md:block lg:hidden" src="/bakery2-tablet.png" alt="">
          <img class="hidden lg:flex" src="/bakery2-screen.png" alt="">
        </div>
        <div>
          <AppPageHeader
            class="mt-[3.125rem]"
            title-class="!text-[2.1875rem] !md:text-[2.8125rem] !md:max-w-none !leading-[2.625rem] !md:text-center !md:leading-[3.375rem] !xl:text-left !xl:text-[3.25rem] !xl:leading-[3.9rem]"
            subtitle-class="!text-[1.125rem] "
            subtitle="What We Do" title="We design and develop web and mobile applications for our clients worldwide"
            wrapper-class="!xl:items-start"
          />
          <p class="mt-[1.2875rem] text-center text-[#727272] leading-[1.7rem] lg:max-w-[31.125rem] lg:text-left xl:text-[1.2rem] xl:leading-[2.0375rem]">
            Lorem ipsum dolor sit amet, sed nulla ante
            amet, elementum tincidunt arcu sed laoreet,
            natoque ac eget imperdiet. Ac scelerisque
            nibh dolores consectetuer,
          </p>
        </div>
      </div>
      <div class="z-20 mx-auto max-w-[90rem] flex flex-col lg:flex-row md:flex-col-reverse lg:justify-between">
        <div class="mt-[8.724375rem] flex flex-col items-center xl:mt-0 lg:max-w-[522px] lg:items-start">
          <AppPageHeader
            subtitle="95% Accuracy" title-class="!md:leading-[3rem] !text-[2.1875rem] !md:max-w-none !leading-[2.4rem] !md:text-[2.5rem] !md:text-center !lg:text-left" subtitle-class="hidden lg:flex" title="Worldwide Best Digital Marketing Agency" wrapper-class="!lg:items-start"
            description=" Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an
            unknown printer took a galley of type and"
            description-class="leading-[1.7rem] !xl:text-[1.2rem] !xl:max-w-[27.9375rem]"
          />
          <div class="mt-[3.09375rem] hidden w-full justify-left gap-[3.875rem] md:flex">
            <div class="flex items-center gap-[0.9375rem]">
              <img src="/consultation-icon1.png" alt="">
              <span class="text-[1.125rem] font-600">Faster Order Processing</span>
            </div>
            <div class="flex items-center gap-[0.9375rem]">
              <img src="/consultation-icon2.png" alt="">
              <span class="text-[1.125rem] font-600">Processing Accuracy</span>
            </div>
          </div>
        </div>
        <TheForm class="mx-auto max-w-[482px] w-full lg:mx-0 lg:w-full md:max-w-none" />
      </div>
    </section>
    <TheSquad />
    <TheFaq />
    <section class="px-[0.9375rem] pb-[4.98625rem] pt-[10.4675rem] md:px-[2rem] xl:px-[7.5rem]">
      <div class="flex flex-col items-center">
        <h2 class="text-center text-[2rem] text-[#2A2A2A] font-700 md:text-[4.43125rem] xl:text-[6rem] xs:text-[3.29375rem] md:leading-[3.545rem]">
          Accelerate
        </h2>
        <h2 class="text-[1.2rem] text-[#FF7012] font-700 md:text-[3.075rem] xl:text-[4.5rem] xs:text-[2.04375rem]">
          Your Social Strategy
        </h2>
        <p class="text-center text-[1.25rem] font-300 leading-[1.25875rem] xl:max-w-[65.375rem] md:text-[1.4875rem] xl:text-[1.8rem] md:leading-[1.48625rem] xl:leading-[1.8rem]">
          Find out how to make social media work for you. We'll send you a PDF that explains different marketing strategies to help your business grow.
        </p>
      </div>
      <div class="relative justify-center md:hidden">
        <img class="absolute top-[5rem] -left-[5rem] -z-10" src="/form-img.png" alt="">
        <div class="input-shadow mt-[3.48875rem] rounded-b-[1.25rem]">
          <form>
            <input class="w-full border rounded-t-[1.25rem] px-[1.14rem] py-[1.2rem] outline-none" type="text" placeholder="Enter your e-mail address">
          </form>
          <button type="button" class="mx-auto w-full rounded-b-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-[1.25rem] text-white font-300">
            Download PDF
          </button>
        </div>
      </div>
      <div ref="parallaxContainer" class="relative">
        <img ref="parallaxImage" class="absolute hidden lg:left-[1rem] xxl:left-[20rem] -z-10 md:block lg:-top-[7rem] md:-left-[10rem] md:-top-[4rem]" src="/form-img.png" alt="">
        <div class="input-shadow z-10 mx-auto mt-[4.3425rem] hidden max-w-[33.46875rem] items-center justify-between gap-[1.5625rem] border border-[#EFEFEF] rounded-[1.5rem] bg-white py-[1rem] pl-[2rem] pr-[1rem] xl:max-w-[36.52375rem] md:flex">
          <img src="/label.png" alt="">
          <form class="w-full flex justify-between" @submit.prevent="submitForm">
            <input v-model="formData" class="outline-none" type="text" placeholder="Enter your e-mail">
            <button class="w-full rounded-[1.25rem] bg-[#3482FF] py-[1rem] text-[1.25rem] text-white font-300 lg:mx-0 sm:max-w-[14.4375rem]">
              Download PDF
            </button>
          </form>
        </div>
      </div>
      <p class="mx-auto mt-[3.0325rem] text-center text-[0.75rem] text-gray font-300 xl:max-w-[61.5rem] md:text-[0.8125rem] xl:text-[0.9rem] md:leading-[1.384375rem]">
        Upon supplying us with your e-mail, we will send you a link
        to download this PDF. We will also follow up with you within 5
        days to see if there is any way we can help you and we'll
        sign you up to receive updated tips and tricks for growing
        your social media but don't worry, we only send this
        newsletter once a month, and you can easily unsubscribe
        from all communications at any time.
      </p>
    </section>
  </div>
</template>

<style scoped>
.rotating-image {
  animation: rotateImage 2s infinite;
}

@keyframes rotateImage {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.floating-image {
  animation: moveLeftToRight 2s ease-in-out infinite;
}
@keyframes moveLeftToRight {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}

#icon1 {
  position: absolute;
  width: 50px;
  height: 50px;
  animation: floatAnimationDot 10s infinite alternate;
}
#icon2 {
  position: absolute;
  width: 50px;
  height: 50px;
  animation: floatAnimationRobot 10s infinite alternate;
}
@media (min-width: 768px) {
  @keyframes floatAnimationDot {
    0%,
    100% {
      transform: translate(200%, -200%);
    }
    25% {
      transform: translate(20%, -30%);
    }
    50% {
      transform: translate(100%, 400%);
    }
    75% {
      transform: translate(300%, 100%);
    }
  }

  @keyframes floatAnimationRobot {
    0%,
    100% {
      transform: translate(-200%, 200%);
    }
    25% {
      transform: translate(-200%, 300%);
    }
    50% {
      transform: translate(200%, 400%);
    }
    75% {
      transform: translate(400%, -200%);
    }
  }
}
@media (min-width: 1024px) {
  @keyframes floatAnimationDot {
    0%,
    100% {
      transform: translate(400%, -400%);
    }
    25% {
      transform: translate(200%, -30%);
    }
    50% {
      transform: translate(800%, 400%);
    }
    75% {
      transform: translate(300%, 500%);
    }
  }

  @keyframes floatAnimationRobot {
    0%,
    100% {
      transform: translate(200%, 200%);
    }
    25% {
      transform: translate(400%, 300%);
    }
    50% {
      transform: translate(800%, 1000%);
    }
    75% {
      transform: translate(400%, -200%);
    }
  }
}
@media (min-width: 1280px) {
  @keyframes floatAnimationDot {
    0%,
    100% {
      transform: translate(400%, -400%);
    }
    25% {
      transform: translate(200%, -30%);
    }
    50% {
      transform: translate(1000%, 400%);
    }
    75% {
      transform: translate(300%, 500%);
    }
  }

  @keyframes floatAnimationRobot {
    0%,
    100% {
      transform: translate(-200%, 200%);
    }
    25% {
      transform: translate(-200%, 300%);
    }
    50% {
      transform: translate(200%, 1000%);
    }
    75% {
      transform: translate(800%, -200%);
    }
  }
}

.item-shadow {
  box-shadow: 0px 15px 30px 0px rgba(61, 90, 125, 0.08);
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
.input-shadow {
  box-shadow: 0px 34px 64px 0px #141c311c;
}
</style>
