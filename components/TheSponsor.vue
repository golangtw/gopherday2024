<script setup lang="ts">
import type { Sponsor } from '~/constants/sponsors'

const props = defineProps<{
  sponsor: Sponsor
  showDetail?: boolean
  logoClass?: string
}>()

defineOptions({
  inheritAttrs: false
})

const { locale } = useI18n()
function st (field: keyof NonNullable<Sponsor['locales']>[string]) {
  return props.sponsor.locales?.[locale.value]?.[field] ?? props.sponsor[field]
}
</script>

<template>
  <NuxtLink :href="st('link')" :title="st('name')" target="_blank" class="no-underline!">
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
            :src="`/sponsors/${sponsor.id}.png`"
            height="72"
            fit="contain"
            background="white"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
      <div v-if="showDetail && st('name')" class="py-5 px-6 space-y-3">
        <div class="text-sky-600 font-semibold text-2xl">
          {{ st('name') }}
        </div>
        <div class="text-sky-900 whitespace-break-spaces">
          {{ st('info') }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
