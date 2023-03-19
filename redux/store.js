import { configureStore } from '@reduxjs/toolkit'
import activeMenuSliceReducer from './slices/activeMenuSlice'

export const store = configureStore({
    reducer: {
        activeMenu: activeMenuSliceReducer,
    },
})
