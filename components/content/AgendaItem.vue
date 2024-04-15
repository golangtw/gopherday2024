<script setup lang="ts">
defineProps<{
  time?: string
  title: string
  speaker?: string
  speakerTitle?: string
  isActivity?: boolean
}>()
</script>

<template>
  <div class="bg-white p-4 rounded">
    <div v-if="time" class="text-sm font-semibold text-primary mb-2">
      {{ time }}
    </div>
    <div v-if="title" class="text-xl font-bold mb-0.5" :class="isActivity && 'text-secondary'">
      {{ title }}
    </div>
    <div v-if="speaker" class="text-gray-500 mt-1">
      <span class="font-semibold">{{ speaker }}</span>
      <span v-if="speakerTitle" class="text-gray-400 <md:block">
        <span class="<md:hidden"> · </span>{{ speakerTitle }}
      </span>
    </div>
  </div>
</template>
