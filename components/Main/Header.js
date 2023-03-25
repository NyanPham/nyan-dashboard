import SearchBar from './SearchBar'

const Header = ({ title }) => {
    return (
        <header className="p-3 lg:p-7">
            <div className="border-b-2 border-gray-300 flex justify-between items-center pb-7 gap-4">
                <h2 className="text-base font-semibold">{title}</h2>
                <SearchBar />
            </div>
        </header>
    )
}

export default Header
