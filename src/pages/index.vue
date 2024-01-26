<script setup lang="ts">
const icons = ['/linkedinIcon.png', '/facebookIcon.png', '/instagramIcon.png', '/twitterIcon.png', '/googleIcon.png', '/youtubeIcon.png']

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
    <section class="relative mx-auto mt-[2.211875rem] flex flex-col justify-center px-[0.9375rem] lg:flex-row md:px-[2rem] xl:px-[6.5625rem]">
      <img class="absolute left-[1.6875rem] hidden lg:block" src="/ball-pink-screen.png" alt="">
      <img class="absolute left-[16.75rem] hidden -top-[1.5rem] lg:block" src="/ball-purple-screen.png" alt="">
      <img class="absolute left-[0.5rem] top-[42rem] lg:left-[1.6875rem] lg:top-[31rem] xl:top-[26.25rem]" src="/ball-white-screen.png" alt="">
      <div class="max-w-[90rem] w-full flex items-center justify-between">
        <div class="mx-auto max-w-[76.875rem] flex flex-col lg:mx-0">
          <button type="button" class="mx-auto max-w-[23.125rem] w-full rounded-[2rem] bg-[#F89E52] px-[1.3125rem] py-[1.4375rem] text-[#FFF1E7] font-500 lg:mx-0 lg:max-w-[23.125rem] sm:py-[0.75rem] sm:text-[1.125rem]">
            Social Media Marketing That Works
          </button>
          <h1 class="mt-1.25rem text-center text-[2.2rem] text-[#2A2A2A] font-700 lg:text-left lg:text-[2.5rem] sm:text-[4.5rem] xl:text-[3.75rem]">
            <span class="block">Save Time</span><span class="block">Build Connections</span><span class="block">Increase Profits</span>
          </h1>
          <div class="mt-[2rem] flex justify-center gap-[0.4875rem] lg:hidden">
            <div class="flex flex-col gap-[0.4875rem]">
              <img class="" src="/bakeryTopTablet.png" alt="">
              <img class="" src="/bakeryBottomTablet.png" alt="">
            </div>
            <div>
              <img class="" src="/beachRightTablet.png" alt="">
            </div>
          </div>
          <div class="mt-[2rem] flex justify-center gap-[1.25rem] lg:justify-left">
            <button v-for="(icon, index) in icons" :key="index">
              <img :src="icon" alt="">
            </button>
          </div>
          <div class="mt-[2.5rem] flex items-center gap-[1rem] lg:mx-0 xl:gap-[2.25rem]">
            <button type="button" class="mx-auto w-full rounded-[1.25rem] bg-[#3482FF] py-[1.4375rem] text-white lg:mx-0 sm:max-w-[14.4375rem]">
              View Our Plans
            </button>
            <button type="button" class="hidden text-[#3486FA] lg:flex">
              What We Offer
            </button>
          </div>
        </div>
        <div class="mt-[2rem] hidden justify-center gap-[0.4875rem] lg:mt-0 lg:flex">
          <div class="flex flex-col gap-[0.4875rem]">
            <img class="" src="/bakeryTopScreen.png" alt="">
            <img class="" src="/carBottomScreen.png" alt="">
          </div>
          <div>
            <img class="" src="/boatRightScreen.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="relative mt-[10rem] flex flex-col items-center bg-[#292F3E] px-[0.9375rem] pb-[4rem] pt-[10rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="flex justify-center">
        <div class="absolute mx-[0.9375rem] mt-[5.625rem] flex items-center rounded-[1.25rem] bg-#1D1D25 -top-[11rem] lg:max-w-[75rem]">
          <AppMarquee />
        </div>
      </div>
      <div class="max-w-[90rem] w-full flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:flex-row-reverse">
        <div class="mx-auto max-w-[13.75rem] w-full flex flex-col gap-[1.875rem] lg:order-2 lg:mx-0 lg:mt-[4rem] lg:max-w-none md:max-w-[33.125rem] md:flex-row lg:justify-center">
          <div class="mx-auto mt-[4rem] w-full flex flex-col items-center gap-[1.5181rem] lg:mx-0 lg:w-auto">
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
        <div class="mx-auto flex flex-col lg:mx-0">
          <div class="mt-[1.25rem] flex flex-col text-center text-[2rem] text-white font-700 lg:text-left">
            <span class="mt-[4.8444375rem] text-[1.25rem] text-[#FFD437] font-500">Social Media Management is</span>
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
          <div class="flex flex-col lg:flex-row">
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
    <section class="relative mt-[6.850625rem] px-[0.9375rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="mx-auto max-w-[90rem] flex flex-col gap-[2.5rem] lg:flex-row">
        <div class="lg:max-w-[25.625rem]">
          <img class="rotating-image absolute" src="/line.png" alt="">
          <div class="flex flex-col justify-center lg:flex-row">
            <div class="flex flex-col items-center lg:items-start">
              <AppPageHeader wrapper-class="" subtitle="Our Expertise is Your Success" title="Struggling to Make Engaging Content?" />
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
          <AppSwiper class="mt-[2.28rem] max-w-screen" autoplay-delay="2000" slides-per-view="auto" space-between="20">
            <swiper-slide class="max-w-[300px]">
              <img src="/home-insurance.png" alt="">
            </swiper-slide>
            <swiper-slide class="max-w-[300px]">
              <img src="/pistachio-madness.png" alt="">
            </swiper-slide>
            <swiper-slide class="max-w-[300px]">
              <img src="/woman.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img class="max-w-[300px]" src="/barber.png" alt="">
            </swiper-slide>
          </AppSwiper>
          <div class="flex justify-center">
            <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.75rem] text-white">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="px-[0.9375rem] pt-[8.28125rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="mx-auto max-w-[90rem] flex flex-col items-center justify-between lg:flex-row lg:gap-[6.875rem]">
        <img class="max-w-[17.5rem] lg:max-w-[34.0625rem]" src="/phone-img.png" alt="">
        <div class="flex flex-col items-center lg:max-w-[32.8125rem] md:items-start">
          <AppPageHeader
            wrapper-class="lg:!items-start"
            class="mt-[3.75rem]"
            subtitle="Worry-Free" title=" Risking Your
            Reputation and
            Losing Sales?"
          />
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] md:text-left">
            Our 24/7 Inbox Management is your
            answer to keep up with messages
            and not miss out on potential leads.
          </p>
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] md:text-left">
            By offering quick replies to your
            audience you will elevate your brands image and help you get the sale.
          </p>
          <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white">
            Start Replying Faster
          </button>
        </div>
      </div>
    </section>
    <section class="mt-[7.484375rem] px-[0.9375rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="mx-auto mt-[10.65rem] max-w-[90rem] flex flex-col items-center justify-between lg:flex-row-reverse lg:gap-[6.875rem]">
        <img class="md:hidden" src="/success-img.png" alt="">
        <img class="hidden md:flex" src="/success-img-tablet.png" alt="">
        <div class="mt-[3.75rem] flex flex-col lg:items-start md:items-center">
          <AppPageHeader
            wrapper-class="!items-start"
            subtitle="Thinking &quot;Outside The Box&quot;" title="Troubles Growing Your Audience?"
            title-class="text-left !text-[2.1875rem]"
          />
          <p class="mt-[1.74625rem] text-[1.2rem] text-[#727272] font-300 md:text-center lg:text-left">
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
    <section class="px-[0.9375rem] pb-[4.345625rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="mx-auto max-w-[90rem] flex flex-col items-center justify-between lg:flex-row lg:gap-[6.875rem]">
        <img src="/social-trolls.png" alt="">
        <div class="flex flex-col items-center lg:max-w-[32.8125rem] md:items-start">
          <AppPageHeader
            wrapper-class="!lg:items-start"
            subtitle="Keeping You Covered"
            title=" Social Gossiping
            Slowing You Down?"
          />
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] md:text-left">
            Staying on top of how your brand is
            being used is an important aspect to
            <span class="text-[#191919] underline"> protect your identity and reputation.</span>
          </p>
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] md:text-left">
            Our sophisticated <span class="text-[#191919] underline"> threat monitoring</span>
            system enables us to <span class="text-[#191919] underline"> quickly identify threats</span> towards your brand and deal with them to <span class="text-[#191919] underline"> prevent damage</span> to your
            reputation.
          </p>
          <p class="mt-[1.74625rem] max-w-[22.4375rem] text-center text-[1.2rem] text-[#727272] font-300 md:max-w-[42.3125rem] md:text-left">
            The most common threats we
            encounter:
          </p>
          <TheBars v-for="(item, index) in bars" :key="index" :text="item.text" :class="item.class" />
          <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white">
            Protect Your Brand
          </button>
        </div>
      </div>
    </section>
    <section class="bg-[#292F3E] pb-[2.1875rem] pt-[7.490625rem]">
      <div class="mx-auto max-w-[90rem] px-[0.9375rem] md:px-[2rem] xl:px-[6.5625rem]">
        <AppPageHeader
          subtitle="Visually Impressive"
          title="We Can't Wait To Redefine Your Brand"
          title-class="text-white !text-[2.1875rem] !text-center"
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
      <div class="flex flex-col items-center px-[0.9375rem] md:px-[2rem] xl:px-[6.5625rem]">
        <h2 class="mt-[1.4375rem] text-center text-[1.5rem] text-white font-700">
          What Are You Waiting For?
        </h2>
        <button class="mt-[1.65rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white">
          Protect Your Brand
        </button>
      </div>
    </section>
    <section class="px-[0.9375rem] pt-[10.4675rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="mx-auto max-w-[90rem]">
        <AppPageHeader

          title-class="!text-[2rem] !text-center !md:text-[2.5rem] !max-w-none"
          subtitle="Our Company" title="We Create Creative Designs For Every Web Page"
        />
        <p class="text-center text-[#727272]">
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem
          Ipsum has been the industry's standard.
        </p>
        <div class="flex flex-col items-center lg:flex-row lg:gap-[5.3125rem]">
          <img class="mt-[4.035rem]" src="/company-img.png" alt="">
          <div class="flex flex-col items-center lg:items-start">
            <h2 class="mt-[3.125rem] text-center text-[3.125rem] font-700 lg:text-left">
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
            <button class="mt-[3.70625rem] max-w-[22.5rem] w-full flex justify-center rounded-[1.25rem] bg-[#3482FF] px-[3.4375rem] py-[1.43rem] text-white">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="px-[0.9375rem] pt-[10.4675rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="mx-auto max-w-[90rem] lg:grid lg:grid-cols-2">
        <div class="flex justify-center">
          <img class="lg:hidden" src="/bakery2.png" alt="">
          <img class="hidden lg:flex" src="/bakery2-screen.png" alt="">
        </div>
        <div>
          <AppPageHeader
            class="mt-[3.125rem]"
            title-class="!text-[2.1875rem]"
            wrapper-class="!items-start"
            subtitle="What We Do" title="We design and develop web and mobile applications for our clients worldwide"
          />
          <p class="mt-[1.2875rem] text-center text-[#727272] lg:max-w-[31.125rem] lg:text-left">
            Lorem ipsum dolor sit amet, sed nulla ante
            amet, elementum tincidunt arcu sed laoreet,
            natoque ac eget imperdiet. Ac scelerisque
            nibh dolores consectetuer,
          </p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row md:flex-col-reverse lg:justify-between">
        <div class="mt-[4.375rem] flex flex-col items-center lg:max-w-[522px] lg:items-start">
          <AppPageHeader
            subtitle="95% Accuracy" title-class="!text-[2.1875rem] !md:text-[2.5rem] !md:text-center !lg:text-left" subtitle-class="hidden lg:flex" title="Worldwide Best Digital Marketing Agency" wrapper-class="!lg:items-start"
            description=" Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an
            unknown printer took a galley of type and"
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
        <TheForm class="mx-auto max-w-[482px] w-full lg:mx-0 lg:w-full" />
      </div>
    </section>
    <section class="px-[0.9375rem] pt-[10.4675rem] md:px-[2rem] xl:px-[6.5625rem]">
      <AppPageHeader
        title="Meet The Squad" title-class="!text-[2.1875rem] !lg:text-[3.25rem]" description="Lorem ipsum dolor sit amet, sed nulla anteamet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores" description-class="!max-w-[36.5625rem] !lg:text-center"
      />
      <AppSwiper class="mt-[4.375rem] max-w-screen" autoplay-delay="2000" space-between="20" slides-per-view="1" pagination="true">
        <swiper-slide class="max-w-[360px] md:max-w-[330px]">
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
        <swiper-slide class="max-w-[360px] md:max-w-[330px]">
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
        <swiper-slide class="max-w-[360px] md:max-w-[330px]">
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
    <TheFaq />
    <section class="px-[0.9375rem] pt-[10.4675rem] md:px-[2rem] xl:px-[6.5625rem]">
      <div class="flex flex-col">
        <h2 class="text-center text-[3.29375rem] text-[#2A2A2A] font-700">
          Accelerate
        </h2>
        <h2 class="text-center text-[2.04375rem] text-[#FF7012] font-700">
          Your Social Strategy
        </h2>
        <p class="text-center">
          Find out how to make social media work for you. We'll send you a PDF that explains different marketing strategies to help your business grow.
        </p>
      </div>
      <form>
        <input type="text" placeholder="Enter your e-mail address">
      </form>
    </section>
  </div>
</template>

<style scoped>
.rotating-image {
  animation: rotateImage 5s infinite;
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
</style>
