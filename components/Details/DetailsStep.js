import { toggleTaskPhase } from '@/redux/slices/tasksSlice'
import { ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { ICON_MAP } from './DetailsSteps'
import { illustrations } from '@/public/illustrations'

const DetailsStep = ({ taskId, phase, isLast }) => {
    const { title, time, location, icon, isComplete, image } = phase
    const Icon = ICON_MAP[icon]
    const TimeIcon = isComplete ? CheckCircleIcon : ClockIcon
    const dispatch = useDispatch()

    function handleToggleTask() {
        return dispatch(toggleTaskPhase({ taskId, phaseId: phase._id }))
    }

    const imgSrc =
        image && image !== ''
            ? `/${image}`
            : illustrations[Math.floor(Math.random() * illustrations.length)]

    return (
        <div
            className={`flex py-5 gap-5 cursor-pointer hover:-translate-y-1 transition duration-200 select-none ${
                isLast ? '' : 'border-b border-gray-900/20'
            }`}
            onClick={handleToggleTask}
        >
            <Image
                src={imgSrc}
                alt={title}
                width={56}
                height={56}
                className="object-cover w-14"
            />
            <div className="space-y-2">
                <h3
                    className={`text-base font-semibold relative before:transition before:duration-200 before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-full before:h-0.5 before:bg-gray-900/70 before:scale-x-0 before:origin-right ${
                        isComplete && 'before:scale-x-100 before:origin-left'
                    }`}
                >
                    {title}
                </h3>
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
