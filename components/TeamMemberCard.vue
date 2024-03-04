<script setup lang="ts">
import { type GroupMember } from '@/constants/team'

withDefaults(defineProps<Partial<GroupMember> & {
  avatar?: string
  recruit?: boolean
}>(), {
  avatar: '/avatar.png'
})
</script>

<template>
  <div class="w-24 py-3 flex flex-col justify-start items-center gap-2.5">
    <template v-if="recruit">
      <div class="w-18 h-18 p-2.5 bg-white rounded-[40px] border border-sky-200 border-dashed flex-col justify-center items-center gap-2.5 inline-flex">
        <div class="i-tabler-plus text-sky-300 text-3xl" />
      </div>
      <div class="text-sky-300 text-sm">
        加入
      </div>
    </template>

    <template v-else>
      <div class="relative">
        <NuxtImg
          class="relative rounded-[40px]"
          width="72"
          height="72"
          :src="avatar"
          placeholder="/avatar.png"
        />
        <div v-if="isLeader" class="absolute bottom-0 right-0">
          <div class="w-5 h-5 flex justify-center items-center bg-amber-100 rounded-full">
            <div class="i-tabler-jewish-star-filled text-amber text-sm" />
          </div>
        </div>
      </div>
      <div class="flex-col justify-start items-center gap-0.5 flex">
        <div class="text-gray-500 text-sm font-semibold">
          {{ name }}
        </div>
        <div v-if="remark" class="text-secondary text-xs font-normal">
          {{ remark }}
        </div>
      </div>
    </template>
  </div>
</template>
