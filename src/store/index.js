import { configureStore } from '@reduxjs/toolkit'
import products from '../pages/slices/products.slices'
export default configureStore({
  reducer:{
    products
  }
})