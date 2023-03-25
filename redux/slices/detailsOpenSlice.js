import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const openDetailsSlice = createSlice({
    name: 'detailsOpen',
    initialState,
    reducers: {
        openDetails: (state, _) => {
            state.value = true
        },
        closeDetails: (state, _) => {
            state.value = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { openDetails, closeDetails } = openDetailsSlice.actions

export default openDetailsSlice.reducer
