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
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { property: 'keywords', content: 'GopherDay, Golang, Go, Taiwan, Conference, 2024' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'GopherDay Taiwan 2024' },
        { property: 'og:image', content: 'https://gopherday.golang.tw/2024/og.png' },
        { property: 'og:image:width', content: '2322' },
        { property: 'og:image:height', content: '1294' }
      ]
    },
    baseURL: '/2024/'
  },
  i18n: {
    baseUrl: 'https://gopherday.golang.tw/2024',
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
