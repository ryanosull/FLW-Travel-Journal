import React from "react";

function Filter ({changeFilter}) { //passing down function


    return (
        <div className="sortFilterText" id="filter">Filter by:&nbsp;&nbsp;&nbsp;
            <select className="drop-down" onChange={(e) => changeFilter(e.target.value)} >
                <option value="All">All</option>
                <option value="Usonian">Usonian</option>
                <option value="non-Usonian">non-Usonian</option>
            </select>            
        </div>
    );
};

export default Filter;