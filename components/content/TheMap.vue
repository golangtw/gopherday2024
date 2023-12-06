<script setup lang="ts">
defineProps<{
  showMapLink?: boolean
}>()

const localePath = useLocalePath()
</script>

<template>
  <div class="not-prose my-5">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3614.274786824789!2d121.5533577!3d25.058674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abedc55b46e3%3A0xbd133bb513c72755!2z56eR5oqA5pyN5YuZ5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1700728987625!5m2!1szh-TW!2stw"
      width="100%"
      height="350"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="rounded-xl"
    />
    <div class="flex w-full flex-col gap-3 sm:(flex-row justify-between) mt-4">
      <div>
        <div class="font-semibold text-2xl mb-2">
          <a href="https://livinglabs.com.tw/" target="_blank" class="hover:text-secondary transition-color">
            Living Lab+
          </a>
        </div>
        <a href="https://maps.app.goo.gl/shDruYHZ7TBEW5Q78" target="_blank" class="text-lg text-gray-500 hover:text-secondary whitespace-pre-line transition-color">
          {{ $t('location.address') }}
        </a>
      </div>

      <div v-if="showMapLink" class="flex-shrink-0 flex sm:(items-center justify-end)">
        <NuxtLink
          :to="localePath('/map')"
          class="rounded-lg bg-primary/10 text-primary px-4 py-2.5 flex items-center gap-2 hover:bg-primary/20 transition-all w-full justify-center"
        >
          <div class="i-tabler:map-pin-2 text-lg" />
          <div class="font-semibold">
            {{ $t('map.title') }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
