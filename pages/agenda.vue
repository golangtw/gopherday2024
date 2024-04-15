<script setup lang="ts">
definePageMeta({
  title: 'agenda'
})
</script>

<template>
  <div class="mx-auto w-full md:w-3xl my-16 px-8">
    <TheProse />
  </div>
</template>

<style scoped>
:deep(.agenda-container) {
    --at-apply: bg-brand rounded-lg p-1 flex flex-col gap-1;
}
</style>
