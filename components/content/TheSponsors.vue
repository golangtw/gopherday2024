<script setup lang="ts">
import { TIERS, getTierSponsors } from '~/constants/sponsors'

const props = defineProps<{
  showDetail?: boolean
}>()

const gridClass = computed(() => {
  return props.showDetail ? 'gap-4' : 'grid-cols-2 md:grid-cols-4 gap-4'
})

const sponsorLogoClass = computed(() => {
  return props.showDetail ? 'h-24' : 'h-16 max-w-72'
})

</script>

<template>
  <div class="my-5">
    <template v-for="tier in TIERS" :key="tier">
      <h3>{{ $t(`sponsor_level.${tier}`) }}</h3>
      <div class="grid mt-4" :class="tier === 'platinum' ? '' : gridClass">
        <TheSponsor
          v-for="sponsor in getTierSponsors(tier)"
          :key="sponsor.name"
          :sponsor="sponsor"
          :show-detail="showDetail"
          :logo-class="sponsorLogoClass"
        />
      </div>
    </template>
  </div>
</template>
