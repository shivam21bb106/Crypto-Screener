import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

export default function Filters() {
    const { setCurrency } = useContext(CryptoContext);
    const currencyRef = useRef(null);

    const handleCurrencySubmit = (e) => {
        e.preventDefault();
        const val = currencyRef.current.value.trim();
        if (val) {
            setCurrency(val);
            currencyRef.current.value = "";
        }
    };

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

            <div className="sorting"></div>
        </div>
    );
}
