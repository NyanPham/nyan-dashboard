import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const initialState = {
    activeTaskId: 1,
    tasks: [
        {
            _id: 1,
            phases: [
                {
                    title: 'Meeting with new client',
                    time: '2023-03-25 1:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: true,
                    image: '',
                    _id: 'phase-1',
                },
                {
                    title: 'Deal with new client',
                    time: '2023-03-26 15:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                    _id: 'phase-2',
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
            _id: 2,
            phases: [
                {
                    title: 'Meeting with new client',
                    time: '2015-03-26T9:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                    _id: 'phase-3',
                },
                {
                    title: 'Deal with new client',
                    time: '2015-03-26T15:00:00',
                    location: 'Zoom meeting',
                    icon: 'camera',
                    isComplete: false,
                    image: '',
                    _id: 'phase-4',
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
    isLoading: false,
    error: '',
    message: '',
}

export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
    try {
        const res = await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        return data.data.task
    } catch (error) {
        console.error(error)
    }
})

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            const newTask = {
                _id: payload._id || new Date().toString(),
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
                        _id: phase._id || `${new Date().toString()}_${index}`,
                    })) || [],
            }

            state.tasks.push(newTask)
        },
        toggleTaskPhase: (state, { payload }) => {
            const { taskId, phaseId } = payload
            const phase = state.tasks
                .find((task) => task._id === taskId)
                .phases.find((phase) => phase._id === phaseId)

            phase.isComplete = !phase.isComplete
        },
        selectTask: (state, { payload }) => {
            if (state.activeTaskId !== payload.taskId) {
                state.activeTaskId = payload.taskId
            }
        },
        setTasks: (state, { payload }) => {
            state.tasks = payload.tasks
        },
        updateTask: (state, { payload }) => {
            const updatedTask = state.tasks.find(
                (task) => task._id === payload._id
            )

            updatedTask.title = payload.title
            updatedTask.description = payload.description
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createTask.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createTask.fulfilled, (state, payload) => {
            console.log(payload.payload)
            state.tasks.push(payload.payload)
            state.isLoading = false
        })
        builder.addCase(createTask.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { addTask, selectTask, toggleTaskPhase, setTasks, updateTask } =
    tasksSlice.actions

export default tasksSlice.reducer
