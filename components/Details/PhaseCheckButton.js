import { CheckIcon } from '@heroicons/react/24/outline'

const PhaseCheckButton = ({ handleClick }) => {
    return (
        <div
            className="p-1 rounded-full text-blue-600 border border-blue-600"
            onClick={handleClick}
        >
            <CheckIcon className="w-4 h-4" />
        </div>
    )
}

export default PhaseCheckButton
