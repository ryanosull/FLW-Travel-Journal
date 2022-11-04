import React from "react";

function Filter ({changeFilter}) {


    return (
        <div>
            <select className="filter-by" onChange={(e) => changeFilter (e.target.value)} >
                <option value="All">All</option>
                <option value="Usonian">Usonian</option>
                <option value="non-Usonian">non-Usonian</option>
            </select>            
        </div>
    )
};

export default Filter;
