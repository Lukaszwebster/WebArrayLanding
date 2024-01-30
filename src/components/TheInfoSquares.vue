<template>
  <div class="mx-auto max-w-[13.75rem] w-full flex flex-col gap-[1.875rem] lg:order-2 lg:mx-0 lg:mt-[4rem] lg:max-w-none md:max-w-[33.125rem] md:flex-row lg:justify-center">
    <div class="mx-auto w-full flex flex-col items-center gap-[1.5181rem] lg:mx-0 lg:w-auto">
      <div class="relative h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
        <img class="absolute bottom-0 left-0 z-10" src="/counter-icon.png" alt="">
        <AppCounter class="z-10" :start="0" :end="225" :duration="2" color="text-orange" />
        <span class="z-10">Offices</span>
      </div>
      <div class="relative h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
        <img class="absolute bottom-0 right-0" src="/counter-icon2.png" alt="">
        <AppCounter class="z-10" :start="0" :end="10" :duration="2" color="text-#265FDB" />
        <span class="z-10">Workers</span>
      </div>
    </div>
    <div class="mx-auto w-full flex flex-col items-center gap-[1.5181rem] lg:mx-0 lg:w-auto md:gap-[1.875rem]">
      <div class="relative h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
        <img class="absolute bottom-0 left-0" src="/counter-icon3.png" alt="">
        <AppCounter class="z-10" :start="0" :end="15" suffix="K" :duration="2" color="text-#57C0CE" />
        <span class="z-10">Customers</span>
      </div>
      <div class="relative h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center overflow-hidden rounded-[1.25rem] bg-white">
        <img class="absolute bottom-0 left-0" src="/counter-icon4.png" alt="">
        <AppCounter class="z-10" :start="0" :end="1300" suffix="+" :duration="2" color="text-purple" />
        <span class="z-10">Projects</span>
      </div>
    </div>
  </div>
</template>
