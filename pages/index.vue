<script setup lang="ts">
import { Application } from '@splinetool/runtime'

const canvas = ref<HTMLCanvasElement>()
const showCanvas = ref(false)
const { y } = useWindowScroll()
const isWindowScrollTop = computed(() => y.value === 0)

onMounted(async () => {
  const app = new Application(canvas.value!)
  await app.load('/scene.splinecode')

  // prevent the blinking of canvas
  setTimeout(() => {
    showCanvas.value = true
  }, 100)
})
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full <md:py-10 md:h-[calc(100vh-8rem)] flex flex-col">
      <div class="flex flex-1 justify-center items-center">
        <div class="w-full max-h-[calc(100vh-8rem-15rem)] aspect-[2/1] relative overflow-hidden">
          <div v-show="!showCanvas" class="absolute top-0 left-0 w-full h-full z-10 flex justify-center">
            <NuxtImg preload src="/placeholder.png" />
          </div>
          <canvas ref="canvas" :class="{ 'hidden!': !showCanvas}" class="absolute top-0 left-0 w-full h-full z-1 flex justify-center" />
        </div>
      </div>

      <div class="md:h-60 flex flex-col items-center">
        <div class="flex items-center flex-col h-full py-8">
          <div class="text-brand text-2xl md:text-3xl font-medium">
            {{ $t('hero.title') }}
          </div>
          <div class="text-gray-400 text-lg mt-1 md:(text-2xl mt-2)">
            {{ $t('hero.subtitle') }}
          </div>
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

    <div class="w-full py-6 md:py-12 opacity-80 bg-primary/10 flex-col justify-start items-center inline-flex">
      <div class="self-stretch justify-center items-start gap-6 inline-flex">
        <a href="mailto:sponsor@golang.tw" class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center op-30 hidden md:flex">
          <div class="i-tabler-plus text-primary text-3xl" />
        </a>

        <a href="mailto:sponsor@golang.tw" class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center hidden md:flex op-60">
          <div class="i-tabler-plus text-primary text-3xl" />
        </a>

        <a href="mailto:sponsor@golang.tw" class="w-50 h-14 md:h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center flex gap-2">
          <div class="i-tabler-heart-handshake text-pink-500 text-2xl" />
          <div class="text-primary font-semibold">
            {{ $t('sponsor') }}
          </div>
        </a>

        <a href="mailto:sponsor@golang.tw" class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center hidden md:flex op-60">
          <div class="i-tabler-plus text-primary text-3xl" />
        </a>

        <a href="mailto:sponsor@golang.tw" class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center hidden md:flex op-30">
          <div class="i-tabler-plus text-primary text-3xl" />
        </a>
      </div>
    </div>

    <div class="mx-auto w-full md:w-3xl py-16 px-8">
      <h2 class="text-brand text-2xl font-semibold mb-6">
        {{ $t('intro.title') }}
      </h2>
      <div class="text-sky-700 text-lg leading-8 w-full whitespace-pre-line">
        {{ $t('intro.content') }}
      </div>
    </div>
  </div>
</template>
