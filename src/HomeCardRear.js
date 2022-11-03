import React from "react";


function HomeCardRear ({home}) {

    const renderHomeDetails = []

    for (let key in home) {
        if (key !=="id" && key !== "Decade Completed" && key !=="image" && key !=="likes")
            renderHomeDetails.push(<ul>{`${key}: ${home[key]}`}</ul>)
    }


    return (
        <div>
            <h3 className="homeCardRear">
                {renderHomeDetails}
            </h3>
        </div>
    )
};


export default HomeCardRear; 