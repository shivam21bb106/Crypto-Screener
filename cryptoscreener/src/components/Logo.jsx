import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg";
export default function Logo() {



    return (<>

        <Link to='/'

            className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
        >
            <img src={logo} alt="Crypto Screener" />
            <span>CryptoBucks</span>
        </Link>
    </>)
}