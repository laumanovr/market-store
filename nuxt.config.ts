// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@unocss/nuxt',
  ],
  css: ['@/assets/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },
  plugins: [{ src: '~/plugins/maska', mode: 'client' }],
})
