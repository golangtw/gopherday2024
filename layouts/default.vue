<script setup lang="ts">
const showMenu = ref(false)

const localePath = useLocalePath()
const router = useRouter()
router.afterEach(() => {
  showMenu.value = false
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div>
    <div class="flex flex-col sticky top-0 flex z-50">
      <div class="h-12 py-3 bg-amber-50 backdrop-blur justify-center items-center gap-2.5 inline-flex">
        <NuxtLink class="text-secondary font-medium" :to="localePath('/agenda')">
          {{ $t('announcement') }}
        </NuxtLink>
      </div>
      <NavigationView class="hidden md:flex" />
    </div>

    <div class="fixed bottom-0 w-full bg-white/75 backdrop-blur flex justify-between items-center h-12 md:hidden z-50">
      <div v-if="!showMenu" class="absolute top-0 left-0 h-px scale-y-50 content-empty w-full bg-gradient-to-r from-primary to-secondary" />
      <NuxtLink :to="localePath('/')" class="font-worksans italic text-primary text-lg pl-6">
        <span class="text">GOPHERDAY </span>
        <span class="text">TAIWAN 2024</span>
      </NuxtLink>
      <button class="pr-6 w-14 h-12 text-secondary flex justify-end items-center" @click="showMenu = !showMenu">
        <div :class="showMenu ? 'i-tabler-x' : 'i-tabler-menu-deep'" class="text-xl" />
      </button>
    </div>

    <div v-if="showMenu" class="fixed bottom-12 w-full md:hidden z-50">
      <NavigationView />
    </div>

    <main>
      <slot />
    </main>

    <footer class="w-full relative">
      <div class="absolute top-0 left-0 h-px scale-y-50 content-empty w-full bg-gradient-to-r from-primary to-secondary" />

      <div class="mx-auto max-w-7xl px-8 pt-10 pb-22 md:pb-10 justify-between items-center flex flex-col gap-4 md:flex-row">
        <div class="flex-1 justify-start items-center gap-6 hidden md:flex">
          <div class="justify-start items-center gap-2 flex">
            <img src="~/assets/logo.svg" alt="Golang Taiwan">
          </div>
        </div>

        <div class="flex-1 flex gap-5 justify-center">
          <div class="text-primary">
            <a href="https://www.facebook.com/golangtaipei/" target="_blank">
              <div class="i-tabler-brand-facebook text-2xl" />
            </a>
          </div>
          <div class="text-primary">
            <a href="https://t.me/golangtw" target="_blank">
              <div class="i-tabler-brand-telegram text-2xl" />
            </a>
          </div>
          <div class="text-primary">
            <a href="https://www.meetup.com/golang-taipei-meetup" target="_blank">
              <div class="i-tabler-brand-meetup text-2xl" />
            </a>
          </div>
          <div class="text-primary">
            <a href="https://github.com/golangtw" target="_blank">
              <div class="i-tabler-brand-github text-2xl" />
            </a>
          </div>
          <div class="text-primary">
            <a href="https://www.youtube.com/channel/UCjnIy_GQAuszZurUIO3zg9Q" target="_blank">
              <div class="i-tabler-brand-youtube text-2xl" />
            </a>
          </div>
          <div class="text-primary">
            <a href="https://twitter.com/golangtw" target="_blank">
              <div class="i-tabler-brand-x text-2xl" />
            </a>
          </div>
        </div>

        <div class="flex-1 text-gray-300 text-sm text-right">
          © 2010-{{ currentYear }} Golang Taiwan
        </div>
      </div>
    </footer>
  </div>
</template>
