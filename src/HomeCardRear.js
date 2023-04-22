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
                    <h4>{home.description}</h4>
                    <h4>City: {home.city}</h4>
                    <h4>State: {home.state}</h4>
                    <h4>Year Completed: {home.completed}</h4>
                    <h4>Usonian: {home.usonian.toString()} </h4>
                    <h4>Rating: {home.rating}</h4>
                    <button className="cardButtons" onClick={handleEditForm} >Edit</button>
                    <button className="cardButtons" onClick={handleBackendDelete}>Delete</button>
                </div>
                :
                "new edit form"
            }

            <div className="homeCardRear">
                <form id="editHomeForm">

                    <h2>Name: <input className="formInputs" type="text" value={home.name}/></h2>

                    <h3>Date visited: <input className="formInputs" type="text" value={home.date}/></h3>

                    <h4> <textarea className="formInputs" type="text" value={home.description}/></h4>

                    <h4>City: <input className="formInputs" type="text" value={home.city} /></h4>

                    <h4>State: <input className="formInputs" type="text" value={home.state}/></h4>

                    <h4>Year Completed: <input className="formInputs" type="date" value={home.completed}/></h4>

                    <h4>Usonian: 
                        {/* {home.usonian.toString()}  */}
                        <select value={home.usonian} onChange={(e) => setUsonian(e.target.value)} className="usonianDropdown" placeholder="Usonian" required >
                            <option className="usonianDropdown" value="" >Usonian?</option>
                            <option className="usonianDropdown" name="true" value={true}>true</option>
                            <option className="usonianDropdown" name="false" value={false}>false</option>
                        </select>
                    </h4>

                    <h4>Rating: <input className="formInputs" type="number" value={home.rating}/></h4>

                    <button className="cardButtons" onClick={handleEditForm} >Cancel</button>
                    <button className="cardButtons" onClick={handleBackendDelete}>Save</button>

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