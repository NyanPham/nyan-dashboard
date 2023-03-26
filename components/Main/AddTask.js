import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
    TrashIcon,
} from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { createTask } from '@/redux/slices/tasksSlice'

const inititalTask = {
    phases: [],
    title: '',
    description: '',
    refLink: '',
    comments: [],
    progressColor: '#0EA5E9',
    image: '',
}

const inititalPhases = [
    {
        index: 0,
        title: '',
        location: '',
        time: new Date(),
        icon: 'camera',
        image: '',
    },
]

const AddTask = () => {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [stage, setStage] = useState('task') // task <> phases
    const dialogRef = useRef()
    const containerRef = useRef()
    const dispatch = useDispatch()

    // new task and phase data
    const [taskData, setTaskData] = useState(inititalTask)
    const [phasesData, setPhasesData] = useState(inititalPhases)

    console.log(taskData.progressColor)

    useEffect(() => {
        containerRef.current = document.getElementById('portal')
        setMounted(true)

        return () => {
            setMounted(false)
            containerRef.current = null
        }
    }, [])

    useEffect(() => {
        if (dialogRef.current == null) return

        if (open && !dialogRef.current.hasAttribute('open'))
            return dialogRef.current.showModal()
        dialogRef.current.close()

        return () => {
            dialogRef.current.close()
        }
    }, [open])

    function handleDiaglogClick(e) {
        if (e.target === dialogRef.current) {
            setOpen(false)
        }
    }

    function handleTaskChange(e) {
        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            [e.target.name]: e.target.value,
        }))
    }

    function handleTaskImageUpload(e) {
        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            image: e.target.value.files[0],
        }))
    }

    function addPhase() {
        setPhasesData((prevPhasesData) => {
            const nextIndex = prevPhasesData.at(-1).index + 1

            const nextPhase = {
                index: nextIndex,
                title: '',
                location: '',
                time: new Date(),
                icon: 'camera',
                image: '',
            }

            return [...prevPhasesData, nextPhase]
        })
    }

    function deletePhase(index) {
        setPhasesData((prevPhasesData) => {
            return prevPhasesData
                .filter((phase) => phase.index !== index)
                .map((phase, index) => ({
                    ...phase,
                    index,
                }))
        })
    }

    function handlePhaseInputChange(e, index) {
        setPhasesData((prevPhaseData) =>
            prevPhaseData.map((phase) => {
                if (phase.index === index) {
                    return {
                        ...phase,
                        [e.target.name.split('-')[1]]: e.target.value,
                    }
                }

                return phase
            })
        )
    }

    async function onCreateTask(e) {
        e.preventDefault()

        if (taskData.title === '' || taskData.title == null)
            return alert('Task data must not be empty')

        const newTask = { ...taskData, phases: phasesData }

        setTaskData(inititalTask)
        setPhasesData(inititalPhases)
        setOpen(false)

        dispatch(createTask(newTask))
    }

    return (
        <>
            <button
                className="w-16 h-16 grid place-items-center bg-blue-500 text-4xl text-white font-thin rounded-full mx-auto hover:bg-blue-400 active:bg-blue-600 transition duration-200"
                onClick={() => setOpen(true)}
            >
                +
            </button>
            {mounted &&
                containerRef.current &&
                ReactDOM.createPortal(
                    <dialog
                        data-form-dialog
                        ref={dialogRef}
                        onClick={handleDiaglogClick}
                        className="p-0 backdrop:bg-gray-900/70 w-2/3 lg:w-2/5"
                    >
                        <form className="p-7" onSubmit={onCreateTask}>
                            {stage === 'task' && (
                                <fieldset className="space-y-5">
                                    <legend className="form-heading">
                                        Add Task
                                    </legend>
                                    <div className="form-group">
                                        <label
                                            htmlFor="title"
                                            className="form-title"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-input"
                                            value={taskData.title}
                                            onChange={handleTaskChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="description"
                                            className="form-title"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            cols="30"
                                            rows="5"
                                            className="form-input"
                                            value={taskData.description}
                                            onChange={handleTaskChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="refLink"
                                            className="form-title"
                                        >
                                            Reference Link
                                        </label>
                                        <input
                                            type="url"
                                            name="refLink"
                                            className="form-input"
                                            value={taskData.refLink}
                                            onChange={handleTaskChange}
                                        />
                                    </div>
                                    <div className="form-group flex-row justify-start items-center">
                                        <label
                                            htmlFor="progressColor"
                                            className="form-title"
                                        >
                                            Progress Color
                                        </label>
                                        <input
                                            type="color"
                                            name="progressColor"
                                            className="w-12 h-12 rounded-full block p-0 bg-transparent cursor-pointer"
                                            value={taskData.progressColor}
                                            onChange={handleTaskChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="image"
                                            className="form-title"
                                        >
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            name="image"
                                            className="form-input cursor-pointer"
                                            onChange={handleTaskImageUpload}
                                        />
                                    </div>
                                </fieldset>
                            )}

                            {stage === 'phases' && (
                                <div className="space-y-7">
                                    {phasesData.map((phase) => (
                                        <fieldset className="space-y-5">
                                            <legend className="form-heading relative">
                                                Phase {phase.index + 1}
                                                {phasesData.length > 1 && (
                                                    <div
                                                        className="p-1 rounded-full border border-red-700 bg-white inline-block absolute top-1/2 -translate-y-1/2 left-full translate-x-4 cursor-pointer"
                                                        onClick={() =>
                                                            deletePhase(
                                                                phase.index
                                                            )
                                                        }
                                                    >
                                                        <TrashIcon className="w-3 h-3 text-red-700" />
                                                    </div>
                                                )}
                                            </legend>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="phase-title"
                                                    className="form-title"
                                                >
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phase-title"
                                                    className="form-input"
                                                    value={phase.title}
                                                    onChange={(e) =>
                                                        handlePhaseInputChange(
                                                            e,
                                                            phase.index
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="phase-time"
                                                    className="form-title"
                                                >
                                                    Phase Date And Time
                                                </label>
                                                <input
                                                    type="datetime-local"
                                                    name="phase-time"
                                                    className="form-input"
                                                    onChange={(e) =>
                                                        handlePhaseInputChange(
                                                            e,
                                                            phase.index
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="phase-location"
                                                    className="form-title"
                                                >
                                                    Phase Location
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phase-location"
                                                    className="form-input"
                                                    value={phase.location}
                                                    onChange={(e) =>
                                                        handlePhaseInputChange(
                                                            e,
                                                            phase.index
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="phase-icon"
                                                    className="form-title"
                                                >
                                                    Icon
                                                </label>
                                                <select
                                                    name="phase-icon"
                                                    value={phase.icon}
                                                    onChange={(e) =>
                                                        handlePhaseInputChange(
                                                            e,
                                                            phase.index
                                                        )
                                                    }
                                                >
                                                    <option value="camera">
                                                        Camera
                                                    </option>
                                                    <option value="map-pin">
                                                        Map Pin
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label
                                                    htmlFor="phase-image"
                                                    className="form-title"
                                                >
                                                    Image
                                                </label>
                                                <input
                                                    type="file"
                                                    name="phase-image"
                                                    className="form-input cursor-pointer"
                                                />
                                            </div>
                                        </fieldset>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addPhase}
                                        className="w-12 h-12 grid place-items-center bg-blue-500 mx-auto mt-5 rounded-full text-xl text-white"
                                    >
                                        +
                                    </button>
                                </div>
                            )}

                            <div className="flex gap-4 items-center mt-7">
                                {stage === 'task' && (
                                    <>
                                        <button
                                            type="button"
                                            className="grow bg-gray-300 p-2 rounded-xl text-gray-700"
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="button"
                                            className="grow bg-blue-500 p-1 rounded-xl text-white"
                                            onClick={() => setStage('phases')}
                                        >
                                            <ArrowLongRightIcon className="h-8 mx-auto" />
                                        </button>
                                    </>
                                )}

                                {stage === 'phases' && (
                                    <>
                                        <button
                                            type="button"
                                            className="grow bg-blue-500 p-1 rounded-xl text-white"
                                            onClick={() => setStage('task')}
                                        >
                                            <ArrowLongLeftIcon className="h-8 mx-auto" />
                                        </button>

                                        <button
                                            type="submit"
                                            className="grow bg-green-400 p-2 rounded-xl text-green-700"
                                        >
                                            Create
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </dialog>,
                    containerRef.current
                )}
        </>
    )
}

export default AddTask
