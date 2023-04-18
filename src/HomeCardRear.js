import React from "react";


function HomeCardRear ({home}) {

    const renderHomeDetails = []

    for (let key in home) {
        if (key !=="id" && key !=="image" && key !=="likes")
            renderHomeDetails.push(<ol>{`${key}: ${home[key]}`}</ol>)
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
