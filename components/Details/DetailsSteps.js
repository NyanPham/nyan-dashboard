import React from 'react'
import DetailsStep from './DetailsStep'
import { VideoCameraIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const ICON_MAP = {
    camera: VideoCameraIcon,
    mapPin: MapPinIcon,
}

const DetailsSteps = ({ task }) => {
    const { phases } = task

    return (
        <div className="px-4 ">
            {phases.map((phase, index) => (
                <DetailsStep
                    phase={phase}
                    key={phase.time}
                    isLast={index === phases.length - 1}
                />
            ))}
        </div>
    )
}

export default DetailsSteps
