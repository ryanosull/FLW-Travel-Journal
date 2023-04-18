import React from "react";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete}) {

    const renderHomeDetails = []

    for (let key in home) {
        if (key !=="id" && key !=="image")
            renderHomeDetails.push(<ol>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${home[key]}`}</ol>)
    }

//     const str = 'flexiple';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

//Output: Flexiple

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
