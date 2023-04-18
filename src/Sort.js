import React from "react";

function Sort ({changeSort}) {

    return (
        <div className="sortFilterText">Sort by:&nbsp;&nbsp;&nbsp;
            <select className="drop-down" onChange={(e) => changeSort(e.target.value)}>
                <option value="None">None</option>
                <option value="Oldest">Oldest first</option>
                <option value="Newest">Most recent first</option>
            </select>
        </div>
    )
};

export default Sort;
