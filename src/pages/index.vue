<script setup lang="ts">
// defineOptions({
//   name: 'IndexPage',
// })
// const user = useUserStore()
// const name = ref(user.savedName)

// const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

// const { t } = useI18n()
</script>

<template>
  <div>
    <section class="mt-[2.211875rem] flex flex-col">
      <button class="mx-auto rounded-[2rem] bg-[#F89E52] px-[1.3125rem] py-[1.4375rem] text-[1.125rem] text-[#FFF1E7] font-500">
        Social Media Marketing That Works
      </button>
      <h1 class="mt-1.25rem text-center text-[2.2rem] font-700">
        <span class="block">Save Time</span><span class="block">Build Connections</span><span class="block">Increase Profits</span>
      </h1>
    </section>

    <!-- <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div> -->
  </div>
</template>

<!-- <route lang="yaml">
meta:
  layout: default
</route> -->
