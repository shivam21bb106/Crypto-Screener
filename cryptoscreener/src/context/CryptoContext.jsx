import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});
export const CryptoProvider = ({ children }) => {
    const [cryptoData, setCryptoData] = useState();
    const [searchData, setSearchData] = useState([])
    const [coinSearch, setCoinSearch] = useState('')




    const getCryptoData = async () => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then(res => res.json()).then(json => json);

            setCryptoData(data);
            console.log(data)
        } catch (error) {
            console.log("Error fetching crypto data:", error);
        }
    };

    const getSearchResult = async (query) => {
        try {
            console.log('Search Data', query)
            const data = await fetch(
                `https://api.coingecko.com/api/v3/search?query=${query}`
            ).then(res => res.json()).then(json => json);
            console.log(data)
            setSearchData(Array.isArray(data?.coins) ? data.coins : []);
        } catch (error) {
            console.log("Error fetching crypto data:", error);
        }
    };

    useLayoutEffect(() => {
        getCryptoData();
    }, [coinSearch])
    return (
        <CryptoContext.Provider value={{ cryptoData, searchData, getSearchResult, setCoinSearch, setSearchData }}>
            {children}
        </CryptoContext.Provider>

    )
}