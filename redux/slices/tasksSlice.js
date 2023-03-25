import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        activeTaskId: 1,
        tasks: [
            {
                id: 1,
                startFrom: '2015-03-26',
                title: 'Search Inspiration for projects',
                refLink: 'https://linkedin.com',
                comments: ['great', 'perfect', 'good'],
                completion: 30,
                progressColor: 'bg-sky-500',
            },
            {
                id: 2,
                startFrom: '2015-03-27',
                title: 'Website Redesign',
                refLink: 'https://linkedin.com',
                comments: ['great', 'perfect', 'good'],
                completion: 82,
                progressColor: 'bg-emerald-500',
            },
        ],
    },
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (state.value !== action.payload.value) {
                state.value = action.payload.value
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask } = tasksSlice.actions

export default tasksSlice.reducer
