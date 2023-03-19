import { useSelector, useDispatch } from 'react-redux'
import { activateMenu } from '@/redux/slices/activeMenuSlice'

const MenuItem = ({ Icon, itemName }) => {
    const activeMenu = useSelector((state) => state.activeMenu)
    const dispatch = useDispatch()

    const isActive = activeMenu.value === itemName

    return (
        <div
            className={`p-3 rounded-xl cursor-pointer transition duration-200 ${
                isActive ? 'text-white bg-blue-700 shadow-lg' : 'text-gray-700'
            }`}
            onClick={() => dispatch(activateMenu({ value: itemName }))}
        >
            <Icon className="w-7 h-7" />
        </div>
    )
}

export default MenuItem
