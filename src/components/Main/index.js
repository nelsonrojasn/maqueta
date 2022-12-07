import React from "react"

import Search from "../Search";
import Gallery from "../Gallery";
import Aside from "../Aside";

function Main()
{
    return (
        <main className="row mt-4 mb-2">
            <Gallery />
            <Aside />    
        </main>        
    )
}

export default Main;