<script setup lang="ts">
defineProps<{
  name?: string
  url?: string
  logo: string
  hideName?: boolean
}>()
</script>

<template>
  <NuxtLink :href="url" :title="name" target="_blank">
    <div class="border rounded-lg border-sky-100 hover:border-sky-200">
      <div class="py-4 px-8 flex justify-center items-center h-24">
        <NuxtImg :src="logo" :height="50" fit="contain" background="white" />
      </div>
      <div v-if="!hideName && name" class="flex justify-center items-center font-semibold op-50 p-4 border-t">
        {{ name }}
      </div>
    </div>
  </NuxtLink>
</template>
