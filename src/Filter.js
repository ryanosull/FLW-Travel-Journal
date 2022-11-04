import React from "react";

function Filter () {


    return (
        <div>
            <select className="filter-by">
                <option value="All">All</option>
                <option value="True">Usonian</option>
                <option value="False">non-Usonian</option>
            </select>            
        </div>
    )
};

export default Filter;
