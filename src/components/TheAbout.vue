<template>
  <section class="relative flex flex-col items-center bg-[#292F3E] px-[0.9375rem] pb-[4rem] pt-[11.548775rem] md:px-[2rem] xl:px-[7.5rem] lg:pt-[4rem] md:pb-[7.5rem] xl:pt-[12.4775rem]">
    <div class="flex justify-center">
      <div class="2xl:max-w-[90rem] absolute mx-[0.9375rem] mt-[5.625rem] flex items-center rounded-[1.25rem] bg-#1D1D25 -top-[11rem] md:mx-[2rem] lg:max-w-[75rem]">
        <AppMarquee />
      </div>
    </div>
    <div class="max-w-[90rem] w-full flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:flex-row-reverse lg:gap-[2rem]">
      <TheInfoSquares />
      <div class="mx-auto flex flex-col lg:mx-0">
        <div class="lg:max-w-[24rem] xl:max-w-none">
          <div class="mt-[1.25rem] flex flex-col text-center text-[2rem] text-white font-700 xl:mt-0 lg:text-left">
            <span class="mt-[4.8444375rem] text-[1rem] text-[#FFD437] font-500 xl:mt-0 xs:text-[1.25rem]">Social Media Management is</span>
            <div class="mt-[1.25rem] text-[2rem] leading-[3.425625rem] xs:text-[2.85625rem]">
              <h2>
                Building
                Brands
              </h2>
              <h2>
                Creating
                Connections
              </h2>
              <h2>
                Driving Sales
              </h2>
            </div>
          </div>
          <div class="md:leading-[2.04rem]">
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
        </div>
        <div class="mt-[0.98875rem] flex flex-col md:mt-[2.25rem] md:flex-row md:items-center lg:justify-start md:justify-center lg:gap-[2rem] md:gap-[2rem]">
          <button type="button" class="mx-auto w-full rounded-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-white lg:mx-0 md:mx-0 sm:max-w-[14.4375rem]">
            Contact Us
          </button>
          <button type="button" class="mt-[1.5531rem] text-[#3486FA] md:mt-0">
            How We Can Help
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
