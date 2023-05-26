import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import Header from "../header/Header";


const Layout = ({children}) => {

    let location = useLocation();
    

    return (
        <div>
            {location.pathname.includes("chart/lightview") || location.pathname.includes("chart/tradingview") ? null : <Header />}
            <main className="main">
                {children}
            </main>
        </div>
    )
}

export default Layout;