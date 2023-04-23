import React, {useState} from "react";
// import EditDetails from "./EditDetails";
const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete}) {

    const [showEditForm, setShowEditForm] = useState(true)

    const [usonian, setUsonian] = useState("")

    function toggleEditForm() {
        setShowEditForm(!showEditForm)
        // console.log("testing...123")      c.log works, why won't editForm appear?
    }

    function handleBackendDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });
        handleDelete(home.id);
    }

    function handleEditForm() {
        console.log("this will be PATCH submit")
    }


    return (
        <div id="thisParentDiv" >

                <div className="homeCardRear">
                    <h2>{home.name}</h2>
                    <h3>Date visited: {home.date}</h3>
                    <h4>{home.description}</h4>
                    <h4>City: {home.city}</h4>
                    <h4>State: {home.state}</h4>
                    <h4>Year Completed: {home.completed}</h4>
                    <h4>Usonian: {home.usonian.toString()} </h4>
                    <h4>Rating: {home.rating}</h4>

                    <button className="cardButtons" onClick={toggleEditForm} >Edit</button>

                    <button className="cardButtons" onClick={handleBackendDelete}>Delete</button>
                </div>
            

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


//_________________________________
// perhaps we have a ternary for the edit button clicked:
//             editbuttonclicked ? display edit form with cancel and save buttons : display <div> containing p tags, etc. with edit and delete buttons