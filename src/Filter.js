import React from "react";

function Filter () {


    return (
        <div className="sortFilterText">Filter by:&nbsp;&nbsp;&nbsp;
            <select className="drop-down" >
                <option value="All">All</option>
                <option value="Usonian">Usonian</option>
                <option value="non-Usonian">non-Usonian</option>
            </select>            
        </div>
    )
};

export default Filter;
// onChange={(e) => changeFilter (e.target.value)} 