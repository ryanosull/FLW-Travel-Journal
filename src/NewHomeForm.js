import React, {useState} from "react";
//

const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function NewHomeForm ({homes, setHomes}) {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("") // lol
    const [completed, setCompleted] = useState("")//integer
    const [usonian, setUsonian] = useState("")//boolean, what goes in ()? empty? null?
    const [rating, setRating] = useState("")//integer
    const [image, setImage] = useState("")

    function handleSubmitHome(e){

        e.preventDefault()

        let newHome = {
            name: name,
            date: date,
            description: description,
            city: city, 
            state: state,
            completed: parseInt(completed),
            usonian: usonian === "true",
            rating: parseInt(rating),
            image: image,
        }

        setName("")
        setDate("")
        setDescription("")
        setCity("")
        setState("")
        setCompleted("")
        setUsonian("Usonian?")
        setRating("")
        setImage("")

        let homePost = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newHome)
        }
        fetch(homesUrl, homePost)
        .then(resp => resp.json())
        .then(newHome => setHomes([...homes, newHome]))
    }

    return (
        <div>
            <form onSubmit={handleSubmitHome} id="newHomeForm" >

                <input onChange={(e) => setName(e.target.value)} 
                type="text" name="name" value={name} className="formInputs" id="formName" placeholder="Name" required />
                
                <label className="sortFilterText">Date visited:</label>
                <input onChange={(e) => setDate(e.target.value)} 
                type="date" name="date" value={date} className="formInputs" id="formDate" required />

                <br/>

                <textarea onChange={(e) => setDescription(e.target.value)}
                type="text" name="description" value={description} className="formInputs" id="formDescription" maxLength="500" placeholder="Description" required />

                <br/>

                <input onChange={(e) => setCity(e.target.value)}
                type="text" name="city" value={city} className="formInputs" id="formCity" placeholder="City" required />

                <input onChange={(e) => setState(e.target.value)} className="formInputs" id="formState"
                type="text" name="state" value={state} placeholder="State" required />

                <input onChange={(e) => setCompleted(e.target.value)} className="formInputs" id="formCompleted"
                type="number" name="completed" value={completed}
                minLength="4" maxLength="4" min="1867" max="1959" placeholder="Year Completed" required />

<br/>

                <select value={usonian} onChange={(e) => setUsonian(e.target.value)} className="usonianDropdown" id="formUsonianDropdown" placeholder="Usonian" name="usonian" required >
                    <option className="usonianDropdown" value="" >Usonian?</option>
                    <option className="usonianDropdown" name="true" value={true}>true</option>
                    <option className="usonianDropdown" name="false" value={false}>false</option>
                </select>

                <input onChange={(e) => setRating(e.target.value)} className="formInputs" id="formRating"
                type="number" name="rating" value={rating} min="0" max="10" maxLength="1" placeholder="Rating" required />

                <input onChange={(e) => setImage(e.target.value)} className="formInputs" id="formImage"
                type="text" name="image" value={image} placeholder="Image URL" />

                <br/>

                <button id="newHomeSubmit" type="submit" >Add a new home!</button>
                
            </form>
        </div>
    )
};

export default NewHomeForm;
