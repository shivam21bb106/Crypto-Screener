import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg"
import { CryptoContext } from "../context/CryptoContext";

export default function Filters() {
    const { setCurrency, setSortBy } = useContext(CryptoContext);
    const currencyRef = useRef(null);

    const handleCurrencySubmit = (e) => {
        e.preventDefault();
        const val = currencyRef.current.value.trim();
        if (val) {
            setCurrency(val);
            currencyRef.current.value = "";
        }
    };

    const handleSort = (e) => {

        let val = e.target.value;
        console.log("Sorrrt Valuuuuue", val)
        setSortBy(val)
    }

    return (
        <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
            <Search />

            <div className="flex mr-7">
                <form onSubmit={handleCurrencySubmit} className="relative flex items-center">
                    <label
                        htmlFor="currency"
                        className="relative flex justify-center items-center mr-2 font-bold"
                    >
                        Currency:
                    </label>
                    <input
                        id="currency"
                        type="text"
                        name="currency"
                        placeholder="usd"
                        className="w-16 rounded bg-gray-600 placeholder:text-gray-100
              pl-2 required outline-0 border border-transparent 
              focus:border-cyan leading-4"
                        ref={currencyRef}
                    />
                    <button type="submit" className="ml-1 cursor-pointer">
                        <img src={submitIcon} alt="submit" className="w-full h-auto" />
                    </button>
                </form>
            </div>
            <label className="relative flex justify-center items-center">
                <span className="font-bold mr-2">sort by: </span>
                <select
                    name="sortby"
                    className="rounded bg-gray-200 text-base 
         pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0
         "
                    onClick={handleSort}
                >
                    <option value="market_cap_desc">market cap desc</option>
                    <option value="market_cap_asc">market cap asc</option>
                    <option value="volume_desc">volume desc</option>
                    <option value="volume_asc">volume asc</option>
                    <option value="id_desc">id desc</option>
                    <option value="id_asc">id asc</option>
                    <option value="gecko_desc">gecko desc</option>
                    <option value="gecko_asc">gecko asc</option>
                </select>
                <img
                    src={selectIcon}
                    alt="submit"
                    className="w-[1rem] h-auto
         absolute right-1 top-2 pointer-events-none
         "
                />
            </label>
        </div>
    );
}
