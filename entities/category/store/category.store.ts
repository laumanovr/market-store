import { defineStore } from 'pinia'
import { CategoryApi } from '../api/category.api'

export const useCategoryStore = defineStore('category-store', {
  state: (): Partial<{}> => ({}),
  getters: {},
  actions: {
    getCategoryList() {},
  },
})
