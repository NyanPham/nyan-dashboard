import {
    PresentationChartBarIcon,
    SquaresPlusIcon,
    ClipboardDocumentIcon,
    ClipboardDocumentCheckIcon,
    ArrowTrendingUpIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import ProgressCircle from '../ProgressCircle'

const ESTIMATE_ITEMS = [
    {
        icon: PresentationChartBarIcon,
        text: 'projects',
        number: 23,
        bgColor: 'bg-gray-900',
        textColor: 'text-white',
    },
    {
        icon: SquaresPlusIcon,
        text: 'assigned',
        number: 72,
        bgColor: 'bg-sky-500',
        textColor: 'text-white',
    },
    {
        icon: ClipboardDocumentCheckIcon,
        text: 'completed',
        number: 40,
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
    },
]

const MEMBERS = [1, 2, 3, 4, 5, 6, 7, 8]

const EstimateCard = ({ bgColor, textColor, text, number, icon: ICon }) => {
    return (
        <div
            className={`${bgColor} ${textColor} max-w-full sm:max-w-[250px] w-full lg:w-1/3 flex flex-col items-center justify-center gap-2 p-5 shadow rounded-2xl`}
        >
            <div className="w-12 h-12 p-3 rounded-full border border-gray-500">
                <ICon className="w-full h-ful" />
            </div>
            <h4 className="capitalize font-medium text-base">{text}</h4>
            <h3 className="font-semibold text-2xl">{number}</h3>
        </div>
    )
}

const Summary = () => {
    return (
        <section className="p-3 lg:p-7 bg-gray-200">
            <h2 className="text-gray-800 font-semibold text-xl">
                Task summary
            </h2>
            <div className="flex flex-col lg:flex-row mt-3 rounded-xl bg-white shadow-lg p-4 gap-4 lg:px-8 lg:py-7 lg:gap-8">
                <div className="w-full lg:pr-8 lg:w-2/3 lg:border-r lg:border-gray-900/20">
                    <h3 className="text-gray-800 font-semibold text-base flex items-center gap-2">
                        <ClipboardDocumentIcon className="w-7 h-7" />
                        Project estimate
                    </h3>
                    <div className="flex gap-4 mt-5 flex-wrap lg:flex-nowrap">
                        {ESTIMATE_ITEMS.length &&
                            ESTIMATE_ITEMS.map((item) => (
                                <EstimateCard {...item} key={item.text} />
                            ))}
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <p className="text-gray-700">
                            On time completion rate:
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="text-xl">
                                <span className="text-3xl font-semibold mr-0.5">
                                    94
                                </span>
                                %
                            </p>
                            <div className="flex gap-3 items-center bg-blue-500 text-white py-1 px-3 rounded-lg text-sm">
                                <ArrowTrendingUpIcon className="w-5 h-5" />
                                2.3%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <h3 className="text-gray-800 font-semibold text-base flex items-center gap-2">
                        <UsersIcon className="w-7 h-7" />
                        Our team
                    </h3>
                    <p className="text-gray-700 mt-5">Team members</p>
                    <div className="flex mt-7">
                        {MEMBERS.length &&
                            MEMBERS.map((member, index) => {
                                if (index <= 2)
                                    return (
                                        <div
                                            key={`member_${index}`}
                                            className={`${
                                                index > 0 && '-ml-2'
                                            } w-12 h-12 rounded-full border border-gray-700`}
                                        ></div>
                                    )
                            })}
                        {MEMBERS.length > 3 && (
                            <div
                                className={`-ml-2 w-12 h-12 rounded-full border border-gray-700 grid place-items-center`}
                            >
                                +{MEMBERS.length - 3}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between mt-7 border border-gray-300 rounded-3xl p-5">
                        <div className="">
                            <h3 className="text-gray-700">Hours</h3>
                            <p className="text-3xl font-semibold">82</p>
                        </div>
                        <ProgressCircle width={60} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary
