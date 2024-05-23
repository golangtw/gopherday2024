<script setup lang="ts">

const { y } = useWindowScroll()
const localePath = useLocalePath()
const isWindowScrollTop = computed(() => y.value === 0)

</script>

<template>
  <div>
    <div class="w-full <md:py-10 md:h-[calc(100vh-8rem)] flex flex-col">
      <div class="flex flex-1 justify-center items-center">
        <HeroBanner class="max-h-[calc(100vh-8rem-20rem)]" />
      </div>

      <div class="md:h-80 flex flex-col items-center">
        <div class="flex items-center flex-col h-full">
          <div class="text-brand text-2xl md:text-8 leading-12 font-medium">
            {{ $t('hero.title') }}
          </div>
          <div class="text-xl md:text-8 my-2 md:(mt-6 mb-4) text-gray-600">
            {{ $t('hero.date') }}
          </div>
          <NuxtLink :to="localePath('/traffic')" class="text-lg md:text-6.5 text-gray-400 transition-all hover:text-secondary">
            {{ $t('hero.location') }}
          </NuxtLink>
          <NuxtLink
            class="bg-brand py-2 px-6 mt-4 md:(py-4 px-12 text-2xl mt-8 rounded-2xl) rounded-md font-semibold text-white hover:scale-105 transition-all"
            to="https://golang.kktix.cc/events/gopherdaytw2024"
            target="_blank"
          >
            {{ $t('buy_ticket') }}
          </NuxtLink>
        </div>

        <div
          class="hidden md:flex flex-grow flex-grow items-center py-6 transition-opacity"
          :class="{
            'opacity-100': isWindowScrollTop,
            'opacity-0': !isWindowScrollTop
          }"
        >
          <div class="i-tabler-arrow-down text-2xl text-primary" />
        </div>
      </div>
    </div>

    <div class="w-full px-4 py-6 md:py-12 opacity-80 bg-primary/10 flex-col justify-start items-center inline-flex of-x-auto">
      <div class="self-stretch justify-center items-start gap-6 inline-flex w-max md:w-full">
        <a href="https://www.iii.org.tw/" target="_blank" class="hero-sponsor sponsor-platinum">
          <NuxtImg src="/sponsors/iii.png" :height="50" />
        </a>
        <a href="https://www.circle.com/" target="_blank" class="hero-sponsor sponsor-gold">
          <NuxtImg src="/sponsors/circle.png" :height="42" />
        </a>
        <a href="https://iscoollab.com/" target="_blank" class="hero-sponsor sponsor-gold">
          <NuxtImg src="/sponsors/iscoollab.png" :height="32" />
        </a>
        <a href="https://www.dcard.tw/" target="_blank" class="hero-sponsor sponsor-silver">
          <NuxtImg src="/sponsors/dcard.png" :height="35" />
        </a>
        <a href="https://www.maicoin.com/" target="_blank" class="hero-sponsor sponsor-silver">
          <NuxtImg src="/sponsors/maicoin.png" :height="40" />
        </a>
        <a href="https://www.104.com.tw/company/1a2x6bmtvu" target="_blank" class="hero-sponsor sponsor-silver">
          <NuxtImg src="/sponsors/moway.png" :height="40" />
        </a>
        <a href="https://www.tsmc.com/chinese" target="_blank" class="hero-sponsor sponsor-bronze">
          <NuxtImg src="/sponsors/tsmc.png" :height="30" />
        </a>
        <a href="https://careers.mercari.com/culturedoc/" target="_blank" class="hero-sponsor sponsor-bronze">
          <NuxtImg src="/sponsors/mercari.png" :height="20" />
        </a>
      </div>
    </div>

    <div class="mx-auto w-full md:w-3xl my-16 px-8">
      <TheProse />
    </div>
  </div>
</template>

<style scoped>
.hero-sponsor {
  --at-apply: px-4 h-14 md:h-18 rounded-2xl justify-center items-center flex gap-2;
}
.sponsor-diamond {
  --at-apply: md:order-3;
}
.sponsor-platinum {
  --at-apply: md:order-2;
}
.sponsor-gold {
  --at-apply: md:order-4;
}
.sponsor-silver {
  --at-apply: md:order-1;
}
.sponsor-bronze {
  --at-apply: md:order-5;
}
</style>
