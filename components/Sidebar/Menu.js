import {
    ChartBarSquareIcon,
    PresentationChartLineIcon,
    ChatBubbleLeftEllipsisIcon,
    UsersIcon,
    ClipboardDocumentIcon,
} from '@heroicons/react/24/outline'
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <div className="space-y-4 w-max">
            <MenuItem Icon={ChartBarSquareIcon} itemName="tasks" />
            <MenuItem Icon={PresentationChartLineIcon} itemName="progress" />
            <MenuItem Icon={ChatBubbleLeftEllipsisIcon} itemName="messages" />
            <MenuItem Icon={UsersIcon} itemName="users" />
            <MenuItem Icon={ClipboardDocumentIcon} itemName="notes" />
        </div>
    )
}

export default Menu
