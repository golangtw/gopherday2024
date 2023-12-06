<script setup lang="ts">
defineProps<{
    url: string
}>()
</script>

<template>
  <NuxtLink to="https://forms.gle/C1YivAH9gLDNJCft7" class="decoration-none!" target="_blank">
    <button class="bg-primary hover:bg-brand w-full py-3 font-semibold text-white rounded-lg my-6 flex items-center justify-center gap-1">
      <ContentSlot :use="$slots.default" unwrap="p" />
      <div class="i-tabler-external-link op-75 text-sm" />
    </button>
  </NuxtLink>
</template>
