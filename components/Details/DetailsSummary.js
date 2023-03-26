import { defaultImages } from '@/public/images'
import { updateTask } from '@/redux/slices/tasksSlice'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const DetailsSummary = ({ task }) => {
    const { title, description, image, _id } = task
    const [taskSummary, setTaskSummary] = useState({
        title,
        description,
    })
    const dispatch = useDispatch()

    useEffect(() => {
        setTaskSummary({ title: task.title, description: task.description })
    }, [task])

    function handleTaskSummaryChange(e) {
        setTaskSummary((prevSummary) => ({
            ...prevSummary,
            [e.target.name]: e.target.value,
        }))
    }

    async function handleConfirm(e) {
        if (task[e.target.name] === e.target.value) return

        if (e.type === 'blur' || (e.type === 'keydown' && e.key === 'Enter')) {
            const confirmed = window.confirm(
                `Are you sure you want to change the ${e.target.name}`
            )

            if (confirmed) {
                try {
                    const res = await fetch(
                        `http://localhost:3000/api/tasks/${_id}`,
                        {
                            method: 'PATCH',
                            headers: {
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify(taskSummary),
                        }
                    )

                    const data = await res.json()
                    return dispatch(updateTask(data.data.task))
                } catch (err) {
                    console.error(err)
                }
            } else {
                setTaskSummary({
                    title,
                    description,
                })
            }
        }
    }

    const imgSrc =
        image && image !== ''
            ? `/${image}`
            : defaultImages[Math.floor(Math.random() * defaultImages.length)]

    return (
        <div className="px-7 py-5 border-b border-gray-900/10">
            <div className="w-full h-52 relative">
                <Image src={imgSrc} alt={title} fill />
            </div>
            <h3 className="text-gray-800 text-2xl font-semibold text-center mt-4 leading-normal">
                <input
                    type="text"
                    name="title"
                    value={taskSummary.title}
                    onChange={handleTaskSummaryChange}
                    onKeyUp={handleConfirm}
                    onBlur={handleConfirm}
                    className="text-center w-full"
                />
            </h3>
            <h4 className="text-sm mt-4 text-center leading-loose text-gray-600">
                <textarea
                    name="description"
                    value={taskSummary.description}
                    onChange={handleTaskSummaryChange}
                    onKeyUp={handleConfirm}
                    onBlur={handleConfirm}
                    className="w-full text-center"
                />
            </h4>
        </div>
    )
}

export default DetailsSummary
