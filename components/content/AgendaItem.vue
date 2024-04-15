<script setup lang="ts">
defineProps<{
  time?: string
  title: string
  speaker?: string
  speakerTitle?: string
  isActivity?: boolean
  url?: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="url && localePath(url)" :custom="!url" class="!underline-none !decoration-none">
    <div class="bg-white p-4 rounded">
      <div :class="url && 'group'">
        <div v-if="time" class="text-sm font-semibold text-primary/80 mb-2">
          {{ time }}
        </div>
        <div
          v-if="title"
          class="text-xl font-bold mb-0.5"
          :class="[
            isActivity && 'text-primary',
            url && 'text-black group-hover:text-secondary duration-120'
          ]"
        >
          {{ title }}
        </div>
        <div v-if="speaker" class="text-gray-500 mt-1">
          <span class="font-semibold">{{ speaker }}</span>
          <span v-if="speakerTitle" class="text-gray-400 <md:block">
            <span class="<md:hidden"> · </span>{{ speakerTitle }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
