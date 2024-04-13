'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchForm() {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()
    const onSearch = (events: React.FormEvent) => {
        events.preventDefault()

        const encodedSearchQuery = encodeURI(searchQuery)
        router.push(`/search?q=${encodedSearchQuery}`)
        console.log("currentQuery", encodedSearchQuery)

    }
    return (
        <>
            <div className="flex justify-center text-sm items-center pb-2">
                <form className="flex relative w-full md:mx-0 mx-5" onSubmit={onSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Tìm kiếm"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border-transparent shadow-sm focus:border-blue-500 focus:outline-none px-5 py-2 text-md flex items-center"
                    />
                    <button type="submit" className="absolute top-3 right-4 border-l-2">
                        <svg className="h-4 ml-4 text-gray-400 hover:text-[#f0ea1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
            </div>
            <div className="border-t-[1px] border-t-white h-1 md:hidden mx-4"></div>
        </>

    )
}

