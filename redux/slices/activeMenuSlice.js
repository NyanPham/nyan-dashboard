import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'tasks',
}

export const activeMenuSlice = createSlice({
    name: 'activeMenu',
    initialState,
    reducers: {
        activateMenu: (state, action) => {
            if (state.value !== action.payload.value) {
                state.value = action.payload.value
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { activateMenu } = activeMenuSlice.actions

export default activeMenuSlice.reducer
