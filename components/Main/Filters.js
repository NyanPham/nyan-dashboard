import { FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const FILTER_TAGS = ['completed', 'pending', 'overdue']

const FilterItem = ({ tag, handleClick, isSelected }) => {
    return (
        <button
            onClick={handleClick}
            className={`py-2 text-center w-full ${
                isSelected ? 'bg-sky-300' : 'hover:bg-gray-200 '
            }`}
        >
            {tag}
        </button>
    )
}

const Filters = () => {
    const [open, setOpen] = useState(false)
    const [seletedTag, setSelectedTag] = useState(FILTER_TAGS[0])

    return (
        <button
            className="group relative flex items-center gap-2 border border-gray-600 text-gray-700 px-3 py-1 rounded-full"
            onClick={() => {
                setOpen((prevOpen) => !prevOpen)
            }}
        >
            <FunnelIcon className="w-5 h-5 shrink-0" />
            Filters
            <ChevronDownIcon className="text-sky-600 w-3 h-3 group-hover:translate-y-0.5 transition duration-200" />
            <div
                className={`absolute top-full left-0 w-full h-max bg-white shadow transition duration-200 ${
                    open
                        ? 'translate-y-1 opacity-100 pointer-events-auto'
                        : '-translate-y-2 opacity-0 pointer-events-none'
                }`}
            >
                {FILTER_TAGS.length &&
                    FILTER_TAGS.map((tag) => (
                        <FilterItem
                            key={tag}
                            tag={tag}
                            handleClick={() => setSelectedTag(tag)}
                            isSelected={seletedTag === tag}
                        />
                    ))}
            </div>
        </button>
    )
}

export default Filters
