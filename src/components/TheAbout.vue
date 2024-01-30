<template>
  <section class="relative mt-[10rem] flex flex-col items-center bg-[#292F3E] px-[0.9375rem] pb-[4rem] pt-[11.548775rem] md:px-[2rem] xl:px-[6.5625rem] lg:pt-[4rem]">
    <div class="flex justify-center">
      <div class="2xl:max-w-[90rem] absolute mx-[0.9375rem] mt-[5.625rem] flex items-center rounded-[1.25rem] bg-#1D1D25 -top-[11rem] lg:max-w-[75rem]">
        <AppMarquee />
      </div>
    </div>
    <div class="max-w-[90rem] w-full flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:flex-row-reverse">
      <TheInfoSquares />
      <div class="mx-auto flex flex-col lg:mx-0 lg:max-w-[24rem] xl:max-w-none">
        <div class="mt-[1.25rem] flex flex-col text-center text-[2rem] text-white font-700 lg:text-left">
          <span class="mt-[4.8444375rem] text-[1rem] text-[#FFD437] font-500 xs:text-[1.25rem]">Social Media Management is</span>
          <h2>
            Building
            Brands
          </h2>
          <h2>
            Creating
            Connections
          </h2>
          <h2>Driving Sales</h2>
        </div>
        <div>
          <p class="mt-[1.6875rem] text-center text-[1.2rem] text-[#BBB] font-300 lg:text-left">
            Social Media is <span class="italic">more than just posting</span> and showing off how many
            followers you have. It's a valuable
            addition to your marketing strategy that <span class="text-[#DBDBDB] underline">builds trust</span> and <span class="text-[#DBDBDB] underline"> creates connections</span> with potential customers to <span class="text-[#DBDBDB] underline"> drive sales</span> and <span class="text-[#DBDBDB] underline"> increase your revenue</span>.
          </p>
          <p class="mt-[1.6875rem] text-center text-[1.2rem] text-[#BBB] font-300 lg:text-left">
            Save your time and money by
            partnering with us and start seeing results that give you the <span class="text-[#DBDBDB] underline"> highest return on investment</span>.
          </p>
          <p class="mt-[1.6875rem] text-center text-[1.2rem] text-[#BBB] font-300 lg:text-left">
            After all; when you grow, we grow together.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row lg:gap-[2rem]">
          <button type="button" class="mx-auto mt-[0.98875rem] w-full rounded-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-white lg:mx-0 sm:max-w-[14.4375rem]">
            Contact Us
          </button>
          <button type="button" class="mt-[1.5531rem] text-[#3486FA]">
            How We Can Help
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
