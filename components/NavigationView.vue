<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="w-full">
    <div
      class="
        <md:(w-full p-6 flex flex-col items-end bg-white/90 backdrop-blur flex gap-2 text-xl)
        md:(mx-auto my-4 h-12 px-10 flex rounded-full shadow-sm ring-gray-100 ring-1 justify-center items-center gap-[50px] bg-white/90 backdrop-blur)
      "
    >
      <div class="md:hidden absolute top-0 left-0 h-px scale-y-50 content-empty w-full bg-gradient-to-r from-primary to-secondary" />
      <NuxtLink :to="localePath('/')" class="font-worksans italic text-primary hover:text-brand" active-class="text-secondary!">
        GOPHERDAY
      </NuxtLink>
      <!-- <a href="mailto:sponsor@golang.tw" class="text-primary hover:text-brand" active-class="text-secondary!">
        {{ $t('sponsor_us') }}
      </a> -->
      <NuxtLink :to="localePath('/sponsor')" class="text-primary hover:text-brand" active-class="text-secondary!">
        {{ $t('sponsor') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/traffic')" class="text-primary hover:text-brand" active-class="text-secondary!">
        {{ $t('traffic') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/team')" class="text-primary hover:text-brand" active-class="text-secondary!">
        {{ $t('team') }}
      </NuxtLink>
      <NuxtLink :to="localePath('/cfp')" class="text-primary hover:text-brand" active-class="text-secondary!">
        {{ $t('cfp') }}
      </NuxtLink>
      <I18nSwitcher />
    </div>
  </div>
</template>
