<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent(useRoute().path).findOne())

const localePath = useLocalePath()

function backOrGo () {
  try {
    if (history.state.back.endsWith('/agenda')) {
      useRouter().back()
      return
    }
  } catch (e) {}

  navigateTo(localePath('/agenda'))
}

useHead({
  title: data.value?.title
})
</script>

<template>
  <div class="mx-auto w-full md:w-3xl my-16 px-8">
    <a :href="localePath('/agenda')" class="my-6 flex items-center gap-1 text-gray-400 hover:-translate-x-1 duration-120" @click.prevent="backOrGo">
      <div class="i-tabler-arrow-left text-xl" />
      <span class="text-sm">
        {{ $t('back') }}
      </span>
    </a>

    <article class="prose prose-gray max-w-full">
      <ContentDoc v-slot="{ doc }">
        <h1>
          {{ doc.title }}
        </h1>

        <div class="font-semibold text-primary">
          {{ doc.time }}
        </div>

        <NuxtLink
          v-if="doc.hackmd"
          :to="doc.hackmd"
          target="_blank"
          class="not-prose rounded-lg bg-primary/10 text-primary px-3 py-2 flex items-center gap-2 hover:bg-primary/20 transition-all justify-center w-max my-4 cursor-pointer"
        >
          <div class="i-tabler:file-text text-lg" />
          <div class="font-semibold">
            {{ $t('hackmd') }}
          </div>
        </NuxtLink>

        <ContentRenderer :value="doc" />

        <div class="my-8">
          <ContentSlot :use="$slots.default" />
        </div>

        <hr>
        <div class="text-primary text-sm font-semibold my-2">
          {{ $t('speaker') }}
        </div>
        <div class="text-lg font-semibold my-1">
          {{ doc.speaker.name }}
        </div>
        <div class="font-semibold text-gray-400">
          {{ doc.speaker.title }}
        </div>
        <div class="whitespace-break-spaces">
          <p>
            {{ doc.speaker.info }}
          </p>
        </div>
      </ContentDoc>
    </article>
  </div>
</template>
