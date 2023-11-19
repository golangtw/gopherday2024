<script setup lang="ts">
import { Application } from '@splinetool/runtime'

const canvas = ref<HTMLCanvasElement>()
const showCanvas = ref(false)
const { y } = useWindowScroll()
const isWindowScrollTop = computed(() => y.value === 0)

onMounted(async () => {
  const app = new Application(canvas.value!)
  await app.load('./scene.splinecode')

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
            精彩議程，敬請期待
          </div>
          <div class="text-gray-400 text-lg mt-1 md:(text-2xl mt-2)">
            活動預計將在 2024 年中旬於台北舉辦
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
        <div class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center op-30 hidden md:flex">
          <div class="i-tabler-plus text-primary text-3xl" />
        </div>

        <div class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center hidden md:flex op-60">
          <div class="i-tabler-plus text-primary text-3xl" />
        </div>

        <div class="w-50 h-14 md:h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center flex gap-2">
          <div class="i-tabler-heart-handshake text-pink-500 text-2xl" />
          <div class="text-primary font-semibold">
            贊助聯絡
          </div>
        </div>

        <div class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center hidden md:flex op-60">
          <div class="i-tabler-plus text-primary text-3xl" />
        </div>

        <div class="w-50 h-18 rounded-2xl border-1 border-dashed border-primary justify-center items-center hidden md:flex op-30">
          <div class="i-tabler-plus text-primary text-3xl" />
        </div>
      </div>
    </div>

    <div class="mx-auto w-full md:w-3xl py-16 px-8">
      <h2 class="text-brand text-2xl font-semibold mb-6">
        活動介紹
      </h2>
      <div class="text-sky-700 text-lg leading-8 w-full">
        <p class="my-4">
          GopherDay 作為 GopherCon 的衍生小型活動，由 Golang Taiwan 社群精心籌備。這個活動旨在聚集對 Golang 程式語言和相關技術有濃厚興趣的軟體從業人員和愛好者。GopherDay 提供一個互動和學習的平台，讓參與者可以深入了解 Golang 的最新發展、技術創新以及最佳實踐。
        </p>
        <p class="my-4">
          在 GopherDay，我們邀請各行各業的 Golang 使用者分享他們的知識和經驗。無論您是 Golang 的新手或是資深開發者，都會在這裡找到適合您的內容。
        </p>
      </div>
    </div>
  </div>
</template>
