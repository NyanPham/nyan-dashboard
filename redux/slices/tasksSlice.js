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
                    id: 'phase-1',
                },
                {
                    title: 'Deal with new client',
                    time: '2023-03-26 15:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                    id: 'phase-2',
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
                    id: 'phase-3',
                },
                {
                    title: 'Deal with new client',
                    time: '2015-03-26T15:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                    id: 'phase-4',
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
        addTask: (state, { payload }) => {
            const newTask = {
                id: new Date().toString(),
                title: payload.title,
                startFrom: new Date(),
                description: payload.description || '',
                refLink: payload.refLink || '',
                comments: payload.comments || [],
                progressColor: payload.progressColor || 'bg-sky-500',
                image: payload.image || '',
                phases:
                    payload.phases?.map((phase, index) => ({
                        ...phase,
                        id: `${new Date().toString()}_${index}`,
                    })) || [],
            }

            state.tasks.push(newTask)
        },
        toggleTaskPhase: (state, { payload }) => {
            const { taskId, phaseId } = payload
            const phase = state.tasks
                .find((task) => task.id === taskId)
                .phases.find((phase) => phase.id === phaseId)

            phase.isComplete = !phase.isComplete
        },
        selectTask: (state, { payload }) => {
            if (state.activeTaskId !== payload.taskId) {
                state.activeTaskId = payload.taskId
            }
        },
    },
})

export const { addTask, selectTask, toggleTaskPhase } = tasksSlice.actions

export default tasksSlice.reducer
