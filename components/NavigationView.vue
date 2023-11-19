<template>
  <div class="w-full">
    <div
      class="
        <md:(w-full p-6 flex flex-col items-end bg-white/90 backdrop-blur flex gap-2 text-xl)
        md:(mx-auto my-4 h-12 px-10 flex rounded-full shadow-sm ring-gray-100 ring-1 justify-center items-center gap-[50px] bg-white/90 backdrop-blur)
      "
    >
      <div class="md:hidden absolute top-0 left-0 h-px scale-y-50 content-empty w-full bg-gradient-to-r from-primary to-secondary" />
      <NuxtLink to="/" class="font-worksans italic text-primary" active-class="text-secondary!">
        GOPHERDAY
      </NuxtLink>
      <div class="text-primary" active-class="text-secondary!">
        贊助聯絡
      </div>
      <NuxtLink to="/team" class="text-primary" active-class="text-secondary!">
        籌備團隊
      </NuxtLink>
    </div>
  </div>
</template>
