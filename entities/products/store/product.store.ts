import { defineStore } from 'pinia'
import { ProductApi } from '../api/product.api'

export const useProductStore = defineStore('product-store', {
  state: (): Partial<{}> => ({}),
  getters: {},
  actions: {
    getProductList() {},
  },
})
