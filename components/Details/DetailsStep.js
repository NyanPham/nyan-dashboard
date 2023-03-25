import { ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { ICON_MAP } from './DetailsSteps'

const DetailsStep = ({ phase, isLast }) => {
    const { title, time, location, icon, isComplete, image } = phase

    const Icon = ICON_MAP[icon]
    const TimeIcon = isComplete ? CheckCircleIcon : ClockIcon

    return (
        <div
            className={`flex py-5 gap-5 ${
                isLast ? '' : 'border-b border-gray-900/20'
            }`}
        >
            <Image
                src={`/${image}`}
                alt={title}
                width={56}
                height={56}
                className="object-cover w-14"
            />
            <div className="space-y-2">
                <h3 className="text-md font-semibold">{title}</h3>
                <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-700/70">
                        <Icon className="w-5 h-5" />
                        <p className="text-sm font-thin">{location}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700/70">
                        <TimeIcon className="w-5 h-5" />
                        <p className="text-sm font-thin">{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsStep
