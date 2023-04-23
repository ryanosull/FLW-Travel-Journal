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

    function handleCancelEdit() {
        console.log("this will be PATCH CANCEL")
    }


    return (
        <div id="thisParentDiv" >

            {showEditForm ? 
                
                <div className="homeCardRear">
                    <form id="editHomeForm">

                        <h4>Name: <input className="formInputs" type="text" value={home.name}/></h4>

                        <h4>Date visited: <input className="formInputs" type="date" value={home.date}/></h4>

                        <h4>Description: <textarea className="formInputs" type="text" value={home.description} maxLength="500" /></h4>

                        <h4>City: <input className="formInputs" type="text" value={home.city} /></h4>

                        <h4>State: <input className="formInputs" type="text" value={home.state}/></h4>

                        <h4>Year Completed: <input className="formInputs" type="number" value={home.completed} minLength="4" maxLength="4" min="1867" max="1959" /></h4>

                        <h4>Usonian: 
                            {/* {home.usonian.toString()}  */}
                            <select value={home.usonian} onChange={(e) => setUsonian(e.target.value)} className="usonianDropdown" placeholder="Usonian" required >
                                <option className="usonianDropdown" value="" >Usonian?</option>
                                <option className="usonianDropdown" name="true" value={true}>true</option>
                                <option className="usonianDropdown" name="false" value={false}>false</option>
                            </select>
                        </h4>

                        <h4>Rating: <input className="formInputs" type="number" value={home.rating} min="0" max="10" maxLength="1" /></h4>

                        <button className="cardButtons" onClick={handleCancelEdit} >Cancel</button>
                        {/* cancel button should render details card */}
                        <button className="cardButtons" onClick={handleEditForm}>Save</button>

                    </form>
                </div>
                :
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
            }

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