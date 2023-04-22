import React, {useState} from "react";
// import EditDetails from "./EditDetails";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete}) {

    const [showEditForm, setShowEditForm] = useState(false)

    const [usonian, setUsonian] = useState("")

    function handleBackendDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });
        handleDelete(home.id);
    }

    function handleEditForm() {
        console.log("placeholder")
    }

    function toggleEditForm() {
        setShowEditForm(!showEditForm)
    }

    return (
        <div id="thisParentDiv" onClick={toggleEditForm}>

            {toggleEditForm ? 
                
                <div className="homeCardRear">
                    <h2>{home.name}</h2>
                    <h3>Date visited: {home.date}</h3>
                    <p>{home.description}</p>
                    <p>City: {home.city}</p>
                    <p>State: {home.state}</p>
                    <p>Year Completed: {home.completed}</p>
                    <p>Usonian: {home.usonian.toString()} </p>
                    <p>Rating: {home.rating}</p>
                    <button id="editButton" onClick={handleEditForm} >Edit</button>
                    <button id="deleteButton" onClick={handleBackendDelete}>Delete</button>
                </div>
                :
                "new edit form"
            }

            <div className="homeCardRear">
                <form id="editHomeForm">

                    <h2>{home.name}</h2>

                    <h3>Date visited: <input className="formInputs" type="text" value={home.date}/></h3>

                    <p> <textarea className="formInputs" type="text" value={home.description}/></p>

                    <p>City: <input className="formInputs" type="text" value={home.city} /></p>

                    <p>State: <input className="formInputs" type="text" value={home.state}/></p>

                    <p>Year Completed: <input className="formInputs" type="date" value={home.completed}/></p>

                    <p>Usonian: 
                        {/* {home.usonian.toString()}  */}
                        <select value={usonian} onChange={(e) => setUsonian(e.target.value)} className="usonianDropdown" placeholder="Usonian" required >
                            <option className="usonianDropdown" value="" >Usonian?</option>
                            <option className="usonianDropdown" name="true" value={true}>true</option>
                            <option className="usonianDropdown" name="false" value={false}>false</option>
                        </select>
                    </p>

                    <p>Rating: <input className="formInputs" type="number" value={home.rating}/></p>



                    <button id="cancelButton" onClick={handleEditForm} >Cancel</button>
                    <button id="saveButton" onClick={handleBackendDelete}>Save</button>
                </form>
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