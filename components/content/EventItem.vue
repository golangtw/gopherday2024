<script setup lang="ts">

interface EventData {
  session?: undefined
  time?: string
  title?: string
  speaker?: string
  speakerTitle?: string
  isActivity?: boolean
  url?: string
}

const props = defineProps<{
  session: string
} | EventData>()

const localePath = useLocalePath()
const sessionPath = localePath(`/sessions/${props.session}`)

async function querySessionEvent (): Promise<EventData> {
  if (props.session === undefined) {
    return props
  }

  const content = await queryContent(sessionPath).findOne()
  return {
    time: content.time,
    title: content.title ?? '',
    speaker: content.speaker?.name,
    speakerTitle: content.speaker?.title,
    url: `/sessions/${props.session}`
  }
}

const { data } = useAsyncData(`event/${sessionPath}`, () => querySessionEvent()) // await querySessionEvent() // useAsyncData('session/' + (props.event ?? ''), () => querySessionEvent())
</script>

<template>
  <NuxtLink :to="data?.url" class="not-prose">
    <div class="bg-white p-4 rounded">
      <div :class="data?.url && 'group'">
        <div v-if="data?.time" class="text-sm font-semibold text-primary/80 mb-2">
          {{ data.time }}
        </div>
        <div
          v-if="data?.title"
          class="text-xl font-bold mb-0.5"
          :class="[
            data?.isActivity && 'text-primary',
            data?.url && 'text-black group-hover:text-secondary duration-120'
          ]"
        >
          {{ data.title }}
        </div>
        <div v-if="data?.speaker" class="text-gray-500 mt-1">
          <span class="font-semibold">{{ data.speaker }}</span>
          <span v-if="data?.speakerTitle" class="text-gray-400 <md:block">
            <span class="<md:hidden"> · </span>{{ data.speakerTitle }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
