import React, {useState} from "react";
//



//endpoint variables
const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function NewHomeForm ({homes, setHomes}) {

    //inital state
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("") // 
    const [completed, setCompleted] = useState("")
    const [usonian, setUsonian] = useState("")
    const [rating, setRating] = useState("")
    const [image, setImage] = useState("")

    function handleSubmitHome(e){

        e.preventDefault();

        let newHome = {
            name: name,
            date: date,
            description: description,
            city: city, 
            state: state,
            completed: parseInt(completed), //backend as integer
            usonian: usonian === "true", //backend as boolean
            rating: parseInt(rating), //backend as integer
            image: image,
        };

        //resetting state
        setName("")
        setDate("")
        setDescription("")
        setCity("")
        setState("")
        setCompleted("")
        setUsonian("Usonian?")
        setRating("")
        setImage("")

        //post request stored as object
        let homePost = { 
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newHome)
        };

        fetch(homesUrl, homePost)
        .then(resp => resp.json())
        .then(newHome => setHomes([...homes, newHome]));
    };

    return (
        <div>
            <form onSubmit={handleSubmitHome} id="newHomeForm" >

                <label className="sortFilterText">Date visited:</label>
                <input className="formInputs" id="formDate" onChange={(e) => setDate(e.target.value)} 
                type="date" name="date" value={date}  required />

                <input className="formInputs" id="formName" onChange={(e) => setName(e.target.value)} 
                type="text" name="name" value={name}  placeholder="Name" required />

                <br/>

                <textarea className="formInputs" id="formDescription" onChange={(e) => setDescription(e.target.value)}
                type="text" name="description" value={description}  maxLength="500" placeholder="Description" required />

                <br/>

                <input className="formInputs" id="formCity" onChange={(e) => setCity(e.target.value)}
                type="text" name="city" value={city} placeholder="City" required />

                <input className="formInputs" id="formState" onChange={(e) => setState(e.target.value)} 
                type="text" name="state" value={state} placeholder="State" required />

                <input className="formInputs" id="formCompleted" onChange={(e) => setCompleted(e.target.value)} 
                type="number" name="completed" value={completed}
                minLength="4" maxLength="4" min="1867" max="1959" placeholder="Year Completed" required />

                <br/>

                <select className="usonianDropdown" id="formUsonianDropdown"  onChange={(e) => setUsonian(e.target.value)}
                placeholder="Usonian" name="usonian" value={usonian} required >
                    <option className="usonianDropdown" value="" >Usonian?</option>
                    <option className="usonianDropdown" name="true" value={true}>true</option>
                    <option className="usonianDropdown" name="false" value={false}>false</option>
                </select>

                <input onChange={(e) => setRating(e.target.value)} className="formInputs" id="formRating"
                type="number" name="rating" value={rating} min="0" max="10" maxLength="1" placeholder="Rating" required />

                <input onChange={(e) => setImage(e.target.value)} className="formInputs" id="formImage"
                type="text" name="image" value={image} placeholder="Image URL" />

                <br/>

                <button id="newHomeSubmit" type="submit" >Add new home</button>
                
            </form>
        </div>
    );
};

export default NewHomeForm;