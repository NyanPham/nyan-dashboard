import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState()

    return (
        <div className="relative rounded-xl text-gray-500 shrink lg:shrink-0">
            <label htmlFor="search-term" hidden aria-hidden>
                Search Term
            </label>
            <input
                type="text"
                name="search-term"
                placeholder="Search anything..."
                className="focus:outline-none focus:ring-purple-100 focus:ring bg-none rounded-xl bg-gray-200 px-4 py-2 pr-10 text-sm w-full"
            />
            <MagnifyingGlassIcon className="w-6 h-6 bg-none absolute top-[6px] right-3" />
        </div>
    )
}

export default SearchBar
