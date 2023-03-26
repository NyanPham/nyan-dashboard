import React from 'react'
import DetailsStep from './DetailsStep'
import { VideoCameraIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const ICON_MAP = {
    camera: VideoCameraIcon,
    'map-pin': MapPinIcon,
}

const DetailsSteps = ({ task }) => {
    const { phases } = task

    return (
        <div className="px-7">
            {phases &&
                phases.map((phase, index) => (
                    <DetailsStep
                        taskId={task._id}
                        phase={phase}
                        key={phase.time}
                        isLast={index === phases.length - 1}
                    />
                ))}
        </div>
    )
}

export default DetailsSteps
