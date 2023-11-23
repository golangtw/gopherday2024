<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('map.title')
})
</script>

<template>
  <div class="mx-auto w-full md:w-3xl my-16 px-8">
    <h2 class="text-brand text-2xl font-semibold mb-6">
      {{ $t('map.title') }}
    </h2>

    <TheMap />

    <hr class="my-4">

    <div class="w-full mt-4">
      <div class="font-semibold text-lg mb-2 text-primary">
        {{ $t("map.bus") }}
      </div>
      <div class="text-lg text-gray-500">
        {{ $t("map.bus_content") }}
      </div>
    </div>
    <div class="w-full mt-4">
      <div class="font-semibold text-lg mb-2 text-primary">
        {{ $t("map.mrt") }}
      </div>
      <div class="text-lg text-gray-500">
        {{ $t("map.mrt_content") }}
      </div>
    </div>
    <div class="w-full mt-4">
      <div class="font-semibold text-lg mb-2 text-primary">
        {{ $t("map.car") }}
      </div>
      <div class="text-lg text-gray-500">
        {{ $t("map.car_content") }}
      </div>
    </div>
  </div>
</template>
