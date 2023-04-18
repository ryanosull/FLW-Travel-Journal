import React from "react";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home}) {

    const renderHomeDetails = []

    for (let key in home) {
        if (key !=="id" && key !=="image" && key !=="likes")
            renderHomeDetails.push(<ol>{`${key}: ${home[key]}`}</ol>)
    }

    function handleDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        }).then(res => console.log(res))
    }

    return (
        <div>
            <h3 className="homeCardRear">
                {renderHomeDetails}
                <button id="removeButton" onClick={handleDelete} >Remove</button>
            </h3>
        </div>
    )
};


export default HomeCardRear; 
