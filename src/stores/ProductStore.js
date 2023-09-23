import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {

state: () => {
  return {
    products: []
  }
},
actions: {
 async  fill() {
    this.products = (await import('@/data/products.json')).default
  }
}

//getters
})