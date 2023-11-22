<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath(locale !== 'en' ? 'en' : 'zh-TW')" class="flex flex-row items-center gap-1 text-gray">
    <div class="i-tabler-world" />{{ locale !== 'en' ? 'English' : '中文' }}
  </NuxtLink>
</template>
