import React from "react";
import EditDetails from "./EditDetails";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete}) {

    const renderHomeDetails = []


    for (let key in home) {
        if (key !=="id" && key !=="image")
            renderHomeDetails.push(<ol key={key} >{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${home[key]}`}</ol>)
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

    function handleEditForm() {
        return <EditDetails />
    }

    return (
        <div>
            <h3 className="homeCardRear">
                {renderHomeDetails}
                <button id="editButton" onClick={handleEditForm} >Edit</button>
                <button id="deleteButton" onClick={handleBackendDelete}>Delete</button>
            </h3>
        </div>
    )
};


export default HomeCardRear; 
