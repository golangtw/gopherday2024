<script setup lang="ts">
import { GROUPS } from '~/constants/team'

definePageMeta({
  title: 'team'
})
</script>

<template>
  <div class="mx-auto w-full md:w-3xl py-16 px-8">
    <h2 class="text-brand text-3xl font-semibold mb-6">
      {{ $t('team') }}
    </h2>
    <div class="grid flex-col gap-6">
      <div v-for="group in GROUPS" :key="group.name">
        <h3 class="text-gray-300 font-semibold mb-3">
          <div v-if="group.name" class="text-gradient-primary op-80">
            {{ $t("teams." + group.name) }}
          </div>
        </h3>
        <div class="flex flex-wrap gap-6">
          <TeamMemberCard
            v-for="member in group.members"
            :key="member.name"
            v-bind="member"
            :avatar="member.avatar ? `/images/team/${member.avatar === true ? member.name + '.png' : member.avatar}` : undefined"
          />
          <TeamMemberCard v-if="group.isRecruiting" recruit />
        </div>
      </div>
    </div>
  </div>
</template>
