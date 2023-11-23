<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const title = computed(() => `${route.meta.title ? t(route.meta.title as string) + ' - ' : ''}GopherDay Taiwan 2024`)
const description = computed(() => t(route.meta.description as string ?? 'description'))

useHead({
  title,
  meta: [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description }
  ]
})
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body class="font-sans">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
