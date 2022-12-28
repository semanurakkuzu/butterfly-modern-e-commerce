import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './images'

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
})
