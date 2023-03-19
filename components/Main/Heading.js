import Filters from './Filters'

const Heading = ({ title, description }) => {
    return (
        <div className="p-7 flex justify-between items-center">
            <div className="">
                <h3 className="text-gray-800 text-3xl font-semibold">
                    {title}
                </h3>
                <h4 className="text-sm mt-3">{description}</h4>
            </div>
            <Filters />
        </div>
    )
}

export default Heading
