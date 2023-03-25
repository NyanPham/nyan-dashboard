import {
    BellIcon,
    ChevronDownIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'

const DetailsHeader = () => {
    return (
        <div className="flex items-center justify-between py-2 px-4">
            <div className="">
                <BellIcon className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-end gap-2">
                <UserCircleIcon className="w-9 h-9" />
                <ChevronDownIcon className="w-3 h-3" />
            </div>
        </div>
    )
}

export default DetailsHeader
