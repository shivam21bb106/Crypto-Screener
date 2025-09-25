import React, { useContext } from "react"


import { CryptoContext } from "../context/CryptoContext"

export default function TableComponent() {


    let { cryptoData } = useContext(CryptoContext)
    return (<>

        <div className="flex flex-col mt-9 border border-gray-100 rounded">
            {
                Array.isArray(cryptoData) ?
                    (<table className="w-full table-auto ">
                        <thead className="capitalize text-base text-gray-100 font-medium border-b border-gray-100">

                            <tr>

                                <th className="py-1">asset</th>
                                <th className="py-1">name</th>
                                <th className="py-1">price</th>
                                <th className="py-1">total volume</th>
                                <th className="py-1">market cap change</th>
                                <th className="py-1">1H</th>
                                <th className="py-1">24H</th>
                                <th className="py-1">7D</th>
                            </tr>


                        </thead>


                        <tbody>
                            {
                                cryptoData.map(data => {
                                    return (<tr key={data.id} className="text-center text-base border-b border-gray-100 hover:bg-gray-600 last:border-b-0">
                                        <td className="py-4 flex items-center uppercase">
                                            <button className="outline-0 border-0 bg-none cursor-pointer">

                                                <svg
                                                    className="w-[1.5rem] ml-1.5 hover:fill-cyan"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.173L12 18.897l-7.336 3.868 1.402-8.173L.132 9.21l8.2-1.192L12 .587z" />
                                                </svg>


                                            </button>
                                            <img className='w-[1.2rem] height-[1.2rem] mx-1.5' src={data.image} alt="data.name" />
                                            <span>{data.symbol}</span>
                                        </td>
                                        <td className="py-4">{data.name}</td>
                                        <td className="py-4">
                                            {new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "usd"
                                            }).format(data.current_price)}
                                        </td>
                                        <td className="py-4">{data.total_volume}</td>
                                        <td className="py-4">{data.market_cap_change_percentage_24h} %</td>
                                        <td
                                            className={`py-4 ${data.price_change_percentage_1h_in_currency > 0
                                                ? "text-green-500"
                                                : "text-red-500"
                                                }`}
                                        >
                                            {Number(data.price_change_percentage_1h_in_currency).toFixed(2)}%
                                        </td>

                                        <td className={`py-4 ${data.price_change_percentage_24h_in_currency > 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}>{Number(data.price_change_percentage_24h_in_currency).toFixed(2)}</td>
                                        <td className={`py-4 ${data.price_change_percentage_7d_in_currency > 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}>{Number(data.price_change_percentage_7d_in_currency).toFixed(2)}</td>
                                    </tr>)
                                })
                            }
                        </tbody>












                    </table>)
                    : (null)
            }


        </div>

    </>)
}