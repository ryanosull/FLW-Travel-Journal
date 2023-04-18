import React from "react";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete}) {

    const renderHomeDetails = []

    for (let key in home) {
        if (key !=="id" && key !=="image" && key !=="likes")
            renderHomeDetails.push(<ol>{`${key}: ${home[key]}`}</ol>)
    }

    function handleBackendDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });
        handleDelete(home.id);
    }

    return (
        <div>
            <h3 className="homeCardRear">
                {renderHomeDetails}
                <button id="removeButton" onClick={handleBackendDelete} >Remove</button>
            </h3>
        </div>
    )
};


export default HomeCardRear; 
