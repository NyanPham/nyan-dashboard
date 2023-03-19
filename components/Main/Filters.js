import { FunnelIcon } from '@heroicons/react/24/outline'

const Filters = () => {
    return (
        <button className="flex items-center gap-2 border border-gray-600 text-gray-700 px-3 py-1 rounded-full">
            <FunnelIcon className="w-5 h-5" />
            Filters
        </button>
    )
}

export default Filters
