<script setup lang="ts">
definePageMeta({
  title: 'sponsor'
})
</script>

<template>
  <div class="mx-auto w-full md:w-3xl my-16 px-8">
    <h2 class="text-brand text-3xl font-semibold mb-6">
      {{ $t('sponsor') }}
    </h2>

    <SponsorButton />

    <article class="prose prose-gray max-w-full">
      <TheSponsors show-detail />
    </article>
  </div>
</template>
