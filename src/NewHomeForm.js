import React, {useState} from "react";


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function NewHomeForm ({homes, setHomes}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("") // lol
    const [completed, setCompleted] = useState("")//integer
    const [usonian, setUsonian] = useState()//boolean, what goes in ()? empty?
    const [rating, setRating] = useState("")//integer
    const [image, setImage] = useState("")

    function handleSubmitHome(e){

        e.preventDefault()

        let newHome = {
            name: name,
            description: description,
            city: city, 
            state: state,
            completed: completed,
            usonian: usonian,
            rating: rating,
            image: image,
        }

        setName("")
        setDescription("")
        setCity("")
        setState("")
        setCompleted("")
        setUsonian()
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
        .then(r => r.json())
        .then(newHome => setHomes([...homes, newHome]))
    }

    return (
        <div>
            <form onSubmit={handleSubmitHome} id="newHomeForm" >
                <input onChange={(e) => setName(e.target.value)} 
                type="text" name="name" value={name} className="formInputs" placeholder="Name" />


                <textarea onChange={(e) => setDescription(e.target.value)}
                type="text" name="description" value={description} className="formInputs" maxLength="500" placeholder="Description" />

                <input onChange={(e) => setCity(e.target.value)}
                type="text" name="city" value={city} className="formInputs" placeholder="City" />

                <input onChange={(e) => setState(e.target.value)} className="formInputs"
                type="text" name="state" value={state} placeholder="State" />

                <input onChange={(e) => setCompleted(e.target.value)} className="formInputs"
                type="text" name="completed" value={completed}
                minLength="4" maxLength="4" placeholder="Year Completed" />

                {/* <label>Usonian?</label> */}
                <select className="usonianDropdown" placeholder="Usonian" required >
                    <option className="usonianDropdown" >Usonian?</option>
                    <option onChange className="usonianDropdown" value={true} >True</option>
                    <option className="usonianDropdown" value={false} >False</option>
                </select>

                <input onChange={(e) => setRating(e.target.value)} className="formInputs"
                type="number" name="rating" value={rating} min="0" max="10" maxLength="1" placeholder="Rating" />

                <input onChange={(e) => setImage(e.target.value)} className="formInputs"
                type="text" name="image" value={image} placeholder="Image URL" />

                <button id="newHomeSubmit" type="submit" >Add a new home!</button>
                
            </form>
        </div>
    )
};

export default NewHomeForm;
