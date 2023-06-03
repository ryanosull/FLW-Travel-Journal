import React, {useState} from "react";



const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function HomeCardRear ({home, handleDelete, toggleHomeDetails}) {

    const [showEditForm, setShowEditForm] = useState(false)

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

    function toggleEditForm() {
        setShowEditForm(!showEditForm)
    }

    function handleBackendDelete() {
        fetch(`${homesUrl}${home.id}`, {
            method: "DELETE"
        });
        handleDelete(home.id);
    }


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    function handleSubmitEdit(e) {
        e.preventDefault()
        
        //send to backend
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(formData),
        };

        fetch(`${homesUrl}${home.id}`, requestOptions)
        .then(resp => resp.json())
        .then(console.log("test"))

        toggleEditForm()
        window.alert("success!")

    } 
    


    return (
        <div id="thisParentDiv" >

            {showEditForm ? (
                
                <div className="homeCardRear">
                    <form id="editHomeForm" onSubmit={handleSubmitEdit}>

                        <h4>Name: <input onChange={handleInputChange} className="formInputs" type="text" name="name" value={formData.name} /></h4>

                        <h4>Date visited: <input onChange={handleInputChange} className="formInputs" type="date" name="date" value={formData.date} /></h4>

                        <h4>Description: <textarea onChange={handleInputChange} className="formInputs" type="text" name="description" value={formData.description} maxLength="500" /></h4>

                        <h4>City: <input onChange={handleInputChange} className="formInputs" type="text" name="city" value={formData.city} /></h4>

                        <h4>State: <input onChange={handleInputChange} className="formInputs" type="text" name="state" value={formData.state} /></h4>

                        <h4>Year Completed: <input onChange={handleInputChange} className="formInputs" type="number" name="completed" value={formData.completed} minLength="4" maxLength="4" min="1867" max="1959" /></h4>

                        <h4>Usonian: 
                            {/* {home.usonian.toString()}  */}
                            <select value={formData.usonian} onChange={handleInputChange} className="usonianDropdown" placeholder="Usonian" name="usonian" required >
                                <option className="usonianDropdown" value="" >Usonian?</option>
                                <option className="usonianDropdown" name="true" value={true}>true</option>
                                <option className="usonianDropdown" name="false" value={false}>false</option>
                            </select>
                        </h4>

                        <h4>Rating: <input onChange={handleInputChange} className="formInputs" type="number" name="rating" value={formData.rating} min="0" max="10" maxLength="1" /> / 10</h4>

                        <h4>Image URL: <input onChange={handleInputChange} className="formInputs" type="text" name="image" value={formData.image} /></h4>

                        <button className="cardButtons" type="button" onClick={toggleEditForm} >Cancel</button>

                        <button className="cardButtons" type="submit" onClick={handleSubmitEdit} >Save</button>

                    </form>
                </div>

            ) : (

                <div className="homeCardRear">
                    <div   >
                        <h2>{formData.name}</h2>
                        <h3>Date visited: {formData.date}</h3>
                        <h4>{formData.description}</h4>
                        <h4>City: {formData.city}</h4>
                        <h4>State: {formData.state}</h4>
                        <h4>Year Completed: {formData.completed}</h4>
                        <h4>Usonian: {formData.usonian.toString()}</h4>
                        <h4>Rating: {formData.rating}</h4>
                    </div>

                    <button className="cardButtons" onClick={toggleEditForm} >Edit</button>
                    <button className="cardButtons" onClick={handleBackendDelete}>Delete</button>
                    <button className="cardButtons" onClick={toggleHomeDetails} >View image</button>
                </div>
                )
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