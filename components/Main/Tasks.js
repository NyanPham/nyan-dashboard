import {
    ClockIcon,
    ChatBubbleBottomCenterTextIcon,
    PaperClipIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const TaskCard = ({
    startFrom,
    title,
    refLink,
    comments,
    completion,
    progressColor,
}) => {
    const progressStyle = {
        width: `${(completion / 100) * 100}%`,
    }

    return (
        <div className="py-3 px-5 grid grid-cols-6 items-center content-evenly gap-2 bg-white rounded-xl hover:-translate-y-1 transition duration-150 cursor-pointer">
            <div className="">
                <h3 className="text-sm font-semibold text-left">Start from</h3>
                <div className="flex items-center justify-start text-gray-500 gap-2 mt-1">
                    <ClockIcon className="w-5 h-5" />
                    {new Date(startFrom).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                    })}
                </div>
            </div>
            <div className="col-span-3">
                <h3 className="font-semibold text-lg truncate w-full">
                    {title}
                </h3>
                <div className="flex gap-4 mt-1">
                    <Link
                        href={refLink}
                        className="truncate max-w-[200px] pr-4 border-r border-gray-900/10 text-sm text-blue-600"
                    >
                        <PaperClipIcon className="w-5 h-5 inline-block mr-2" />
                        {refLink}
                    </Link>
                    <div className="flex gap-2 items-center text-gray-700/70 cursor-pointer hover:text-gray-700/90">
                        <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
                        <span className="flex flex-row gap-1 items-center text-xs">
                            <span>{comments.length}</span> comments
                        </span>
                    </div>
                </div>
            </div>
            <div className="mr-3">
                <div className="text-sm">{completion}% complete</div>
                <div className="relative h-1 rounded-full overflow-hidden mt-2 bg-gray-300">
                    <div
                        style={progressStyle}
                        className={`absolute top-0 left-0 h-full ${progressColor}`}
                    ></div>
                </div>
            </div>
            <button className="ml-2 p-2 bg-blue-700/50 text-white font-medium rounded-full text-sm text-center hover:bg-blue-700/90">
                Reminder
            </button>
        </div>
    )
}

const Tasks = () => {
    return (
        <section className="p-7 pt-12 bg-gray-200">
            <h2 className="text-gray-800 font-semibold text-xl">Tasks</h2>
            <div className="mt-3 space-y-3">
                {TASKS?.length &&
                    TASKS.map((task) => (
                        <TaskCard key={task.title} {...task} />
                    ))}
                <button className="w-16 h-16 grid place-items-center bg-blue-500 text-4xl text-white font-thin rounded-full mx-auto hover:bg-blue-400 active:bg-blue-600 transition duration-200">
                    +
                </button>
            </div>
        </section>
    )
}

export default Tasks
