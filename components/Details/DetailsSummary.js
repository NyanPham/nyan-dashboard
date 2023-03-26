import { defaultImages } from '@/public/images'
import Image from 'next/image'

const DetailsSummary = ({ task }) => {
    const { title, description, image } = task

    const imgSrc =
        image && image !== ''
            ? `/${image}`
            : defaultImages[Math.floor(Math.random() * defaultImages.length)]

    return (
        <div className="px-7 py-5 border-b border-gray-900/10">
            <div className="w-full h-52 relative">
                <Image src={imgSrc} alt={title} fill />
            </div>
            <h3 className="text-gray-800 text-2xl font-semibold text-center mt-4 leading-normal">
                {title}
            </h3>
            <h4 className="text-sm mt-4 text-center leading-loose text-gray-600">
                {description}
            </h4>
        </div>
    )
}

export default DetailsSummary
