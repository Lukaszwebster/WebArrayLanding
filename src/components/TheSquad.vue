<template>
  <section class="px-[0.9375rem] pt-[5.625rem] md:px-[2rem] xl:px-[7.5rem]">
    <AppPageHeader
      title="Meet The Squad" title-class="!text-[2.1875rem] !lg:text-[3.25rem] mt-0" description="Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget." description-class="!xl:text-[1.2rem] !max-w-[36.5625rem] !lg:text-center !leading-[1.7rem] font-300 !xl:leading-[2.0375rem]"
    />
    <AppSwiper class="mt-[4.375rem] max-w-screen" autoplay-delay="2000" space-between="20" slides-per-view="1" pagination="true">
      <swiper-slide class="max-w-[360px] lg:max-w-[23.75rem] md:max-w-[330px]">
        <div class="relative">
          <img class="rounded-[1.25rem]" src="/teamMember1.png" alt="">
          <div class="absolute bottom-0 left-0 rounded-tr-[1.25rem] bg-white px-[1.875rem] pb-[1.25rem] pt-[1.5rem]">
            <p class="font-700">
              Ryan Vetrovs
            </p>
            <p class="text-[#737373]">
              CEO Kawasaki Inc.
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="max-w-[360px] lg:max-w-[23.75rem] md:max-w-[330px]">
        <div class="relative">
          <img class="rounded-[1.25rem]" src="/teamMember2.png" alt="">
          <div class="absolute bottom-0 left-0 rounded-tr-[1.25rem] bg-white px-[1.875rem] pb-[1.25rem] pt-[1.5rem]">
            <p class="font-700">
              Emerson Saris
            </p>
            <p class="text-[#737373]">
              CEO Kawasaki Inc.
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="max-w-[360px] lg:max-w-[23.75rem] md:max-w-[330px]">
        <div class="relative">
          <img class="rounded-[1.25rem]" src="/teamMember3.png" alt="">
          <div class="absolute bottom-0 left-0 rounded-tr-[1.25rem] bg-white px-[1.875rem] pb-[1.25rem] pt-[1.5rem]">
            <p class="font-700">
              Lindsey Schleifer
            </p>
            <p class="text-[#737373]">
              CEO Kawasaki Inc.
            </p>
          </div>
        </div>
      </swiper-slide>
    </AppSwiper>
  </section>
</template>
