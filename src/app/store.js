import { configureStore } from '@reduxjs/toolkit'
import movies from '../features/moviesSlice'
import auth from '../features/authSlice'


export const store = configureStore({
  reducer: {
    movies,  
    auth,
    
  },
})