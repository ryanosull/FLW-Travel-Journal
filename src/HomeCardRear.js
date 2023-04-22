import React from "react";
// import EditDetails from "./EditDetails";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete}) {


    function handleBackendDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });
        handleDelete(home.id);
    }

    function handleEditForm() {
        console.log("placeholder")
    }

    return (
        <div className="homeCardRear">
            <form>
                <h2>{home.name}</h2>
                <h3>{home.date}</h3>
                <p>{home.description}</p>
                <p>City: {home.city}</p>
                <p>State: {home.state}</p>
                <p>Year Completed: {home.completed}</p>
                <p>Usonian: {home.usonian.toString()} </p>
                <p>{home.rating}</p>
                <button id="editButton" onClick={handleEditForm} >Edit</button>
                <button id="deleteButton" onClick={handleBackendDelete}>Delete</button>
            </form>
        </div>
    )
};


export default HomeCardRear; 


//saving this code because I like it so much

//    // const renderHomeDetails = []


    // for (let key in home) {
    //     if (key !=="id" && key !=="image")
    //         renderHomeDetails.push(<ol key={key} >{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${home[key]}`}</ol>)
    // }


    //return ({render})

//--------------------

//     const str = 'chicago';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

//Output: Chicago