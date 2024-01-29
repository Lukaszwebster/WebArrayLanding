<template>
  <div class="mx-auto max-w-[13.75rem] w-full flex flex-col gap-[1.875rem] lg:order-2 lg:mx-0 lg:mt-[4rem] lg:max-w-none md:max-w-[33.125rem] md:flex-row lg:justify-center">
    <div class="mx-auto w-full flex flex-col items-center gap-[1.5181rem] lg:mx-0 lg:w-auto">
      <div class="h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center rounded-[1.25rem] bg-white">
        <AppCounter :start="0" :end="225" :duration="2" color="text-orange" />
        <span>Offices</span>
      </div>
      <div class="h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center rounded-[1.25rem] bg-white">
        <AppCounter :start="0" :end="10" :duration="2" color="text-#265FDB" />
        <span>Workers</span>
      </div>
    </div>
    <div class="mx-auto w-full flex flex-col items-center gap-[1.5181rem] lg:mx-0 lg:w-auto md:gap-[1.875rem]">
      <div class="h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center rounded-[1.25rem] bg-white">
        <AppCounter :start="0" :end="15" suffix="K" :duration="2" color="text-#57C0CE" />
        <span>Customers</span>
      </div>
      <div class="h-[15.625rem] w-[15.625rem] flex flex-col items-center justify-center rounded-[1.25rem] bg-white">
        <AppCounter :start="0" :end="1300" suffix="+" :duration="2" color="text-purple" />
        <span>Projects</span>
      </div>
    </div>
  </div>
</template>
