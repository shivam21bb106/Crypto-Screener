
import React, { useContext, useState } from "react"
import searchIcon from "../assets/search-icon.svg"
import { CryptoContext } from "../context/CryptoContext"

export default function Search() {

    const [searchText, setSearchText] = useState('')
    let { getSearchResult } = useContext(CryptoContext)
    let handleInput = (e) => {

        e.preventDefault();
        let query = e.target.value
        setSearchText(query)
        getSearchResult(query)
    }

    return (<>
        <form className="w-96 relative flex items-center ml-7">
            <input type="text" name="search"
                className="w-full rounded bg-gray-200 
            placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
                placeholder="Search here"
                onChange={handleInput}
                value={searchText}
            />
            <button type="submit" className="absolute right-1 cursor-pointer">
                <img src={searchIcon} alt="search" className="w-full h-auto" />
            </button>
        </form>
        {



            searchText.length > 0 ?
                <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 
                backdrop-blur-md">
                    <li>Bitcoin</li>
                    <li>etherium</li>

                </ul>

                :
                null
        }

    </>)
}