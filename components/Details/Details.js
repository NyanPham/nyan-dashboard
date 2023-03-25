import React from 'react'
import { useSelector } from 'react-redux'
import DetailsHeader from './DetailsHeader'
import DetailsSteps from './DetailsSteps'
import DetailsSummary from './DetailsSummary'
import DetailTimeline from './DetailTimeline'

const Details = () => {
    const { tasks, activeTaskId } = useSelector((state) => state.tasks)
    const selectedTask = tasks.find((task) => task.id === activeTaskId)

    return (
        <aside className="w-2/5 sticky h-screen top-0 right-0 border-l border-gray-900/10 shadow overflow-y-auto">
            <DetailsHeader />
            <DetailsSummary task={selectedTask} />
            <DetailTimeline task={selectedTask} />
            <DetailsSteps task={selectedTask} />
        </aside>
    )
}

export default Details
