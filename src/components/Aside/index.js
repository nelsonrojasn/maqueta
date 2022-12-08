import React from "react"

import Search from "../Search";

function Aside({handleImageListUpdated})
{    
    return (
        <aside className="col-md-4 col-sm-12">
            <Search handleImageListUpdated={handleImageListUpdated} />
        </aside>
    )
}

export default Aside;