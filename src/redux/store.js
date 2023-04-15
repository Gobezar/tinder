import { configureStore } from '@reduxjs/toolkit'
import fetchUsersSlice from './slices/fetchUsersSlice'
import modalSlice from './slices/modalSlice'
import loginSlice from './slices/loginSlice'




export const store = configureStore({
  reducer: {
   fetchUsersSlice,
   modalSlice,
   loginSlice, 
  },
  
})
