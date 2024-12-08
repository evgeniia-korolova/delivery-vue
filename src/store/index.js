import { products } from '@/constants/products'
import { restArray } from '@/constants/rests'
import { reactive } from 'vue'

export const store = reactive({
  isOpen: false,
  rests: restArray,
  products: products,
  toggleModal(value) {
    this.isOpen = value
  }
  
})