import React, {useState} from "react";


//endpoint variables
const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, homes, setHomes, handleDelete, toggleHomeDetails}) {

    const [showEditForm, setShowEditForm] = useState(false) //edit form initial state


    //existing form data to display in edit input. the following controlled form is 
    //dynamic in that existing data is populated in the input field and can be manipulated

    const [formData, setFormData] = useState({ 
        name: home.name,
        date: home.date,
        description: home.description,
        city: home.city,
        state: home.state,
        completed: home.completed,
        usonian: home.usonian,
        rating: home.rating,
        image: home.image
        
    })

    function toggleEditForm() { //toggle edit form
        setShowEditForm(!showEditForm)
    }

    function handleBackendDelete() { //delete handler
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });

        handleDelete(home.id);
    };


    const handleInputChange = (e) => {

        const {name, value} = e.target; //destructure name (attribute of input element) and value (current value of input element)

        setFormData((prevData) => ({
            ...prevData, //previous state, spread in new 
            [name]: value,
        }));
    };

    function handleSubmitEdit(e) {  //PATCH

        e.preventDefault();

        //send to backend

        const patchReq = { //PATCH as object
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(formData),
        };

        fetch(`${homesUrl}${home.id}`, patchReq)
        .then(resp => resp.json())
        .then(updatedHome => {

            const updatedHomes = homes.map(h => (h.id === updatedHome.id ? updatedHome : h)); //update correct home based on ID

            setHomes(updatedHomes); //update into original array

            toggleEditForm(); //toggle back to (updated) details
        });

        window.alert("Success!"); //just for s&g
    };
    


    return (
        <div id="thisParentDiv" >

            {showEditForm ? //ternary to show details or edit form

            (
                <div className="homeCardRear">
                    <form id="editHomeForm" onSubmit={handleSubmitEdit}>

                        <h4>Name: <input className="formInputs" onChange={handleInputChange}
                        type="text" name="name" value={formData.name} /></h4>

                        <h4>Date visited: <input className="formInputs" onChange={handleInputChange}
                        type="date" name="date" value={formData.date} /></h4>

                        <h4>Description: <textarea className="formInputs" id="editDescription" onChange={handleInputChange}
                        type="text" name="description" value={formData.description} maxLength="500" /></h4>

                        <h4>City: <input className="formInputs" onChange={handleInputChange} value={formData.city}
                        type="text" name="city"  /></h4>

                        <h4>State: <input className="formInputs" onChange={handleInputChange} value={formData.state}
                        type="text" name="state" /></h4>

                        <h4>Year Completed: <input className="formInputs" onChange={handleInputChange}
                        type="number" name="completed" value={formData.completed}
                        minLength="4" maxLength="4" min="1867" max="1959" /></h4>

                        <h4>Usonian: 
                            <select className="usonianDropdown" onChange={handleInputChange} value={formData.usonian}
                            placeholder="Usonian" name="usonian" required >
                                <option className="usonianDropdown" value="" >Usonian?</option>
                                <option className="usonianDropdown" name="true" value={true}>true</option>
                                <option className="usonianDropdown" name="false" value={false}>false</option>
                            </select>
                        </h4>

                        <h4>Rating: <input className="formInputs" onChange={handleInputChange}
                        type="number" name="rating" value={formData.rating} min="0" max="10" maxLength="1" /> / 10</h4>

                        <h4>Image URL: <input className="formInputs" onChange={handleInputChange}
                        type="text" name="image" value={formData.image} /></h4>

                        <button className="cardButtons" type="button" onClick={toggleEditForm} >Cancel</button>

                        <button className="cardButtons" type="submit" onClick={handleSubmitEdit} >Save</button>

                    </form>
                </div>
                )

                : //ternary

                (
                <div className="homeCardRear">

                    <div id="homeDetails">
                        <h2>{home.name}</h2>
                        <h3>Date visited: {home.date}</h3>
                        <h4 id="detailDesc" >{home.description}</h4>
                        <h4>City: {home.city}</h4>
                        <h4>State: {home.state}</h4>
                        <h4>Year Completed: {home.completed}</h4>
                        <h4>Usonian: {home.usonian.toString()}</h4>
                        <h4>Rating: {home.rating}</h4>
                    </div>

                    <button className="cardButtons" onClick={toggleEditForm} >Edit</button>
                    <button className="cardButtons" id="deleteButton" onClick={handleBackendDelete}>Delete</button>
                    <button className="cardButtons" onClick={toggleHomeDetails} >View image</button>

                </div>
                )
            }
        </div>    
    );
};

export default HomeCardRear; 
