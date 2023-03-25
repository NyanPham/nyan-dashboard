import { configureStore } from '@reduxjs/toolkit'
import activeMenuSliceReducer from './slices/activeMenuSlice'
import tasksSliceReducer from './slices/tasksSlice'
import openDetailsReducer from './slices/detailsOpenSlice'

export const store = configureStore({
    reducer: {
        activeMenu: activeMenuSliceReducer,
        tasks: tasksSliceReducer,
        detailsOpen: openDetailsReducer,
    },
})
