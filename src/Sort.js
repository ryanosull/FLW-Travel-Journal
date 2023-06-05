import React from "react";

function Sort ({changeSort}) { //passing down function

    return (
        <div className="sortFilterText">Sort by:&nbsp;&nbsp;&nbsp;
            <select className="drop-down" onChange={(e) => changeSort(e.target.value)}>
                <option value="None">{"None (submission order)"}</option>
                <option value="First">First visited</option>
                <option value="Last">Last visited</option>
                <option value="Oldest">Earliest constructed</option>
                <option value="Newest">Most recently constructed</option>
                <option value="Highest">Highest rating</option>
                <option value="Lowest">Lowest rating</option>
            </select>
        </div>
    );
};

export default Sort;