// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  devtools: { enabled: false },
  css: [
    '@unocss/reset/tailwind.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    baseURL: '/2024/'
  },
  i18n: {
    defaultLocale: 'zh-TW',
    locales: [
      {
        code: 'zh-TW',
        iso: 'zh-TW',
        file: 'zh-TW.json',
        name: '繁體中文'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      }
    ],
    langDir: 'locales/'
  }
})
