import React, {useState} from "react";
// import EditDetails from "./EditDetails";
const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete, toggleHomeDetails}) {

    // const [usonian, setUsonian] = useState("")



    const [showEditForm, setShowEditForm] = useState(false)

    // const [editedName, setEditedName] = useState()
    // const [editedDate, setEditedDate] = useState("")
    // const [editedDescription, setEditedDescription] = useState("")
    // const [editedCity, setEditedCity] = useState("")
    // const [editedState, setEditedState] = useState("") // lol
    // const [editedCompleted, setEditedCompleted] = useState("")//integer
    // const [editedUsonian, setEditedUsonian] = useState("")//boolean, what goes in ()? empty? null?
    // const [editedRating, setEditedRating] = useState("")//integer
    // const [editedImage, setEditedImage] = useState("")

    const [formData, setFormData] = useState({
        name: "",   ///from here, see burgerBuddy  form submit. if you can get it all hooked up in a similar manner, great. may run into issues with dynamic edit/auto population. if so, get form hooked up first, then work on auto pop. test burgerbuddy method.

    })

    function toggleEditForm() {
        setShowEditForm(!showEditForm)
    }

    function handleBackendDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });
        handleDelete(home.id);
    }

    function handleSubmitEdit(e) {
        e.preventDefault(e)
        console.log("this will be PATCH submit")
    }


    return (
        <div id="thisParentDiv" >

            {showEditForm ? 
                
                <div className="homeCardRear">
                    <form id="editHomeForm">
                        
                        {/* <h4>Name: <input onChange={(e) => setEditedName({...editedName, name: e.target.value}) } className="formInputs" type="text" value={home.name} /></h4> */}

                        <h4>Name: <input onChange={handleSubmitEdit} className="formInputs" type="text" value={home.name} /></h4>

                        <h4>Date visited: <input onChange={(e) => setEditedDate(e.target.value)} className="formInputs" type="date" value={home.date} /></h4>

                        <h4>Description: <textarea onChange={(e) => setEditedDescription(e.target.value)} className="formInputs" type="text" value={home.description} maxLength="500" /></h4>

                        <h4>City: <input onChange={(e) => setEditedCity(e.target.value)} className="formInputs" type="text" value={home.city} /></h4>

                        <h4>State: <input onChange={(e) => setEditedState(e.target.value)} className="formInputs" type="text" value={home.state} /></h4>

                        <h4>Year Completed: <input onChange={(e) => setEditedCompleted(e.target.value)} className="formInputs" type="number" value={home.completed} minLength="4" maxLength="4" min="1867" max="1959" /></h4>

                        <h4>Usonian: 
                            {/* {home.usonian.toString()}  */}
                            <select value={home.usonian} onChange={(e) => setEditedUsonian(e.target.value)} className="usonianDropdown" placeholder="Usonian" required >
                                <option className="usonianDropdown" value="" >Usonian?</option>
                                <option className="usonianDropdown" name="true" value={true}>true</option>
                                <option className="usonianDropdown" name="false" value={false}>false</option>
                            </select>
                        </h4>

                        <h4>Rating: <input onChange={(e) => setEditedRating(e.target.value)} className="formInputs" type="number" value={home.rating} min="0" max="10" maxLength="1" /> / 10</h4>

                        <h4>Image URL: <input onChange={(e) => setEditedImage(e.target.value)} className="formInputs" type="text" value={home.image} /> / 10</h4>

                        <button className="cardButtons" onClick={toggleEditForm} >Cancel</button>
                        {/* cancel button should render details card */}
                        <button className="cardButtons" type="submit" onClick={handleSubmitEdit}>Save</button>

                    </form>
                </div>

                : ////////ternary

                <div className="homeCardRear">
                    <div   >
                        <h2>{home.name}</h2>
                        <h3>Date visited: {home.date}</h3>
                        <h4>{home.description}</h4>
                        <h4>City: {home.city}</h4>
                        <h4>State: {home.state}</h4>
                        <h4>Year Completed: {home.completed}</h4>
                        <h4>Usonian: {home.usonian.toString()}</h4>
                        <h4>Rating: {home.rating}</h4>
                    </div>

                    <button className="cardButtons" onClick={toggleEditForm} >Edit</button>
                    <button className="cardButtons" onClick={handleBackendDelete}>Delete</button>
                    <button className="cardButtons" onClick={toggleHomeDetails} >View image</button>
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