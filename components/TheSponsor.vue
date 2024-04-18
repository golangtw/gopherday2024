<script setup lang="ts">
defineProps<{
  name?: string
  url?: string
  logo: string
  info?: string
  showDetail?: boolean
  logoClass?: string
}>()

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <NuxtLink :href="url" :title="name" target="_blank" class="no-underline!">
    <div
      class="border rounded-lg border-sky-100 hover:border-sky-200"
      v-bind="$attrs"
      :class="showDetail && 'grid md:grid-cols-[12rem_1fr]'"
    >
      <div
        class="py-5 px-8 flex justify-center items-center of-hidden"
        :class="showDetail && 'py-6!'"
      >
        <div :class="logoClass">
          <NuxtImg
            :src="logo"
            height="72"
            fit="contain"
            background="white"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
      <div v-if="showDetail && name" class="py-5 px-6 space-y-3">
        <div class="text-sky-600 font-semibold text-2xl">
          {{ name }}
        </div>
        <div class="text-sky-900 whitespace-break-spaces">
          {{ info }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
