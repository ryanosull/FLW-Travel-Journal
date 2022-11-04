import React from "react";

function Sort () {


    return (
        <div className="sortFilterText">Sort by:&nbsp;&nbsp;&nbsp;
            <select className="drop-down">
                <option value="Oldest">Oldest first</option>
                <option value="Newest">Most recent first</option>
            </select>
        </div>
    )
};

export default Sort;
