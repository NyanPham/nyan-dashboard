import Tasks from '@/components/Tasks'
import { initialState, setTasks } from '@/redux/slices/tasksSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home({ tasks }) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTasks({ tasks }))
    }, [tasks])

    return <Tasks />
}

export async function getServerSideProps() {
    let tasks = initialState.tasks

    try {
        const res = await fetch('http://localhost:3000/api/tasks')
        const { data } = await res.json()

        tasks = data.tasks
    } catch (err) {
        console.log(err)
    }

    return {
        props: {
            tasks,
        },
    }
}
