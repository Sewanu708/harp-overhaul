import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search({
    placeholder
}: {
    placeholder: string
}) {
    return (
        <div className="lg:flex  px-4 py-1 rounded-md shadow-sm  items-center justify-center gap-2 bg-white hidden ">
            <SearchIcon className="w-5 h-5 text-gray-500" />
            <input
                className="w-full ring-0 outline-0 border-0 placeholder:text-xs text-sm"
                placeholder={placeholder}
                type="text"
            />
        </div>
    )
}
