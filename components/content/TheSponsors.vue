<script setup lang="ts">
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
    <h3>{{ $t('sponsor_level.platinum') }}</h3>
    <div class="grid mt-4">
      <TheSponsor
        :name="$t('sponsors.iii.name')"
        url="https://www.iii.org.tw/"
        logo="/sponsors/iii.png"
        :info="$t('sponsors.iii.info')"
        :show-detail="showDetail"
        :logo-class="sponsorLogoClass"
      />
    </div>

    <h3>{{ $t('sponsor_level.gold') }}</h3>
    <div class="grid mt-4" :class="gridClass">
      <TheSponsor
        :name="$t('sponsors.circle.name')"
        url="https://www.circle.com/"
        logo="/sponsors/circle.png"
        :info="$t('sponsors.circle.info')"
        :show-detail="showDetail"
        :logo-class="sponsorLogoClass"
      />
      <TheSponsor
        :name="$t('sponsors.iscoollab.name')"
        url="https://iscoollab.com/"
        logo="/sponsors/iscoollab.png"
        :info="$t('sponsors.iscoollab.info')"
        :show-detail="showDetail"
        :logo-class="sponsorLogoClass"
      />
    </div>

    <h3>{{ $t('sponsor_level.silver') }}</h3>
    <div class="grid mt-4" :class="gridClass">
      <TheSponsor
        :name="$t('sponsors.maicoin.name')"
        url="https://www.maicoin.com/"
        logo="/sponsors/maicoin.png"
        :info="$t('sponsors.maicoin.info')"
        :show-detail="showDetail"
        :logo-class="sponsorLogoClass"
      />
      <TheSponsor
        :name="$t('sponsors.dcard.name')"
        url="https://www.dcard.tw/"
        logo="/sponsors/dcard.png"
        :info="$t('sponsors.dcard.info')"
        :show-detail="showDetail"
        :logo-class="sponsorLogoClass"
      />
    </div>

    <h3>{{ $t('sponsor_level.bronze') }}</h3>
    <div class="grid mt-4" :class="gridClass">
      <TheSponsor
        :name="$t('sponsors.tsmc.name')"
        url="https://www.tsmc.com/chinese"
        logo="/sponsors/tsmc.png"
        :info="$t('sponsors.tsmc.info')"
        :show-detail="showDetail"
        :logo-class="sponsorLogoClass"
      />
    </div>
  </div>
</template>
