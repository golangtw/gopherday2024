<script setup lang="ts">
import { Application } from '@splinetool/runtime'

const canvas = ref<HTMLCanvasElement>()
const showCanvas = ref(false)

onMounted(async () => {
  if (import.meta.client) {
    const app = new Application(canvas.value!)
    await app.load('/scene.splinecode')

    // prevent the blinking of canvas
    setTimeout(() => {
      showCanvas.value = true
    }, 100)
  }
})
</script>

<template>
  <div class="w-full aspect-[2/1] relative overflow-hidden">
    <div v-show="!showCanvas" class="absolute top-0 left-0 w-full h-full z-10 flex justify-center">
      <NuxtImg preload src="/banner.png" />
    </div>
    <canvas ref="canvas" :class="{ 'hidden!': !showCanvas}" class="absolute top-0 left-0 w-full h-full z-1 flex justify-center" />
  </div>
</template>
