import { TrashIcon } from '@heroicons/react/24/outline'

const PhaseDeleteButton = ({ handleDelete }) => {
    return (
        <div
            className="p-1 rounded-full text-red-600 border border-red-600"
            onClick={handleDelete}
        >
            <TrashIcon className="w-4 h-4" />
        </div>
    )
}

export default PhaseDeleteButton
