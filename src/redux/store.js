import { configureStore } from '@reduxjs/toolkit'
import fetchUsersSlice from './slices/fetchUsersSlice'

import modalSlice from './slices/modalSlice'



export const store = configureStore({
  reducer: {
   fetchUsersSlice,
   modalSlice,
  },
  
})
