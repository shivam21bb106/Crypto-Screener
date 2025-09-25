
import React, { useContext, useState } from "react"
import searchIcon from "../assets/search-icon.svg"
import { CryptoContext } from "../context/CryptoContext"

export default function Search() {

    const [searchText, setSearchText] = useState('')
    let { getSearchResult } = useContext(CryptoContext)
    let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext)
    console.log("SEEEEEEEEEAAARCHHHHHHH", searchData)
    let handleInput = (e) => {

        e.preventDefault();
        let query = e.target.value
        setSearchText(query)
        getSearchResult(query)
    }

    const selectCoin = (coin) => {
        setCoinSearch(coin)
        setSearchText('')
        setSearchData('')
    }
    return (<>
        <form className="w-96 relative flex items-center ml-7">
            <input
                type="text"
                name="search"
                className="w-full rounded bg-blue-200 
      placeholder:text-gray-400 pl-2 outline-0 
      border border-transparent focus:border-cyan-500"
                placeholder="Search here"
                onChange={handleInput}
                value={searchText}
            />
        </form>

        {



            searchText.length > 0 ?
                <ul className="absolute top-11 left-0 w-96 max-h-96 overflow-auto rounded py-2 bg-black bg-opacity-60 backdrop-blur-md mx-6">

                    {

                        searchData.length > 0 ? searchData.map(coin => {
                            return <li className="flex items-center ml-4 my-2 cursor-pointer"
                                key={coin.id} onClick={() => selectCoin(coin.id)}>
                                <img
                                    className="w-[1rem] h-[1rem] mx-1.5"
                                    src={coin.thumb}
                                    alt={coin.name}
                                />
                                <span>{coin.name}</span>
                            </li>
                        }) : <h2>Please Wait</h2>
                    }

                </ul>

                :
                null
        }

    </>)
}