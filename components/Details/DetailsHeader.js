import { closeDetails } from '@/redux/slices/detailsOpenSlice'
import {
    BellIcon,
    ChevronDownIcon,
    UserCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'

const DetailsHeader = () => {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between py-2 px-7">
            <div className="">
                <BellIcon className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-end gap-2">
                <UserCircleIcon className="w-9 h-9" />
                <ChevronDownIcon className="w-3 h-3" />
                <XMarkIcon
                    className="w-9 h-9 lg:hidden"
                    onClick={() => dispatch(closeDetails())}
                />
            </div>
        </div>
    )
}

export default DetailsHeader
