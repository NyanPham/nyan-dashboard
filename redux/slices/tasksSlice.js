import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeTaskId: 1,
    tasks: [
        {
            id: 1,
            phases: [
                {
                    title: 'Meeting with new client',
                    time: '2023-03-25 1:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: true,
                    image: '',
                },
                {
                    title: 'Deal with new client',
                    time: '2023-03-26 15:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                },
            ],
            startFrom: '2023-03-25',
            title: 'Search Inspiration for projects',
            description:
                'Amet minum aren torut kafein raichu kebin. Amet minum aren torut kafein raichu kebin',
            refLink: 'https://linkedin.com',
            comments: ['great', 'perfect', 'good'],
            progressColor: 'bg-sky-500',
            image: 'nature-1.jpg',
        },
        {
            id: 2,
            phases: [
                {
                    title: 'Meeting with new client',
                    time: '2015-03-26T9:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                },
                {
                    title: 'Deal with new client',
                    time: '2015-03-26T15:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                },
            ],
            startFrom: '2015-03-27',
            title: 'Website Redesign',
            description:
                'Amet minum aren torut kafein raichu kebin. Amet minum aren torut kafein raichu kebin',
            refLink: 'https://linkedin.com',
            comments: ['great', 'perfect', 'good'],
            progressColor: 'bg-yellow-500',
            image: 'nature-1.jpg',
        },
    ],
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {},
        selectTask: (state, { payload }) => {
            if (state.activeTaskId !== payload.taskId) {
                state.activeTaskId = payload.taskId
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, selectTask } = tasksSlice.actions

export default tasksSlice.reducer
