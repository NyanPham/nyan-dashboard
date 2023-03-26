import useWindowSize from '@/hooks/useWindowSize'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DetailsHeader from './DetailsHeader'
import DetailsSteps from './DetailsSteps'
import DetailsSummary from './DetailsSummary'
import DetailTimeline from './DetailTimeline'

const Details = () => {
    const { tasks, activeTaskId } = useSelector((state) => state.tasks)
    const selectedTask = tasks?.find((task) => task._id === activeTaskId) || {}
    const { value: detailsOpen } = useSelector((state) => state.detailsOpen)
    const windowSize = useWindowSize()

    return (
        <aside
            className={`w-full h-4/5 fixed bottom-0 right-0 bg-white lg:bottom-[unset] lg:top-0 lg:sticky lg:w-2/5 lg:h-screen lg:border-l lg:border-gray-900/10 shadow overflow-y-auto transition duration-200 ${
                detailsOpen || windowSize.width > 1024
                    ? 'translate-y-0 pointer-events-auto'
                    : 'translate-y-full pointer-events-none'
            }`}
        >
            <DetailsHeader />
            <DetailsSummary task={selectedTask} />
            <DetailTimeline task={selectedTask} />
            <DetailsSteps task={selectedTask} />
        </aside>
    )
}

export default Details
