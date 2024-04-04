import { defineNuxtPlugin } from 'nuxt/app'
import { vMaska } from 'maska'

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.directive('maska', vMaska)
})
