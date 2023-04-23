// import React, {useState} from "react";



// function EditDetails() {


//     const [name, setName] = useState("")
//     const [date, setDate] = useState("")
//     const [description, setDescription] = useState("")
//     const [city, setCity] = useState("")
//     const [state, setState] = useState("") // lol
//     const [completed, setCompleted] = useState("")//integer
//     const [usonian, setUsonian] = useState("")//boolean, what goes in ()? empty? null?
//     const [rating, setRating] = useState("")//integer
//     const [image, setImage] = useState("")


//     return (
//         <div>
//             <form onSubmit={""} id="" >

//                 <input onChange={(e) => setName(e.target.value)} 
//                 type="text" name="name" value={name} className="formInputs" placeholder="Name" required />

//                 <input onChange={(e) => setDate(e.target.value)} 
//                 type="date" name="date" value={date} className="formInputs" required />

//                 <textarea onChange={(e) => setDescription(e.target.value)}
//                 type="text" name="description" value={description} className="formInputs" maxLength="500" placeholder="Description" required />

//                 <input onChange={(e) => setCity(e.target.value)}
//                 type="text" name="city" value={city} className="formInputs" placeholder="City" required />

//                 <input onChange={(e) => setState(e.target.value)} className="formInputs"
//                 type="text" name="state" value={state} placeholder="State" required />

//                 <input onChange={(e) => setCompleted(e.target.value)} className="formInputs"
//                 type="number" name="completed" value={completed}
//                 minLength="4" maxLength="4" min="1867" max="1959" placeholder="Year Completed" required />

//                 <select value={usonian} onChange={(e) => setUsonian(e.target.value)} className="usonianDropdown" placeholder="Usonian" required >
//                     <option className="usonianDropdown" value="" >Usonian?</option>
//                     <option className="usonianDropdown" name="true" value={true}>True</option>
//                     <option className="usonianDropdown" name="false" value={false}>False</option>
//                 </select>

//                 <input onChange={(e) => setRating(e.target.value)} className="formInputs"
//                 type="number" name="rating" value={rating} min="0" max="10" maxLength="1" placeholder="Rating" required />

//                 <input onChange={(e) => setImage(e.target.value)} className="formInputs"
//                 type="text" name="image" value={image} placeholder="Image URL" />

//                 <button>Cancel</button> <button>Save changes</button>

//             </form>
//         </div>
//     );
// };

// export default EditDetails;



{/* <div className="homeCardRear">
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
</div> */}




////for the ternary in HomeCardRear (just the return statement):

// return (
//     <div id="thisParentDiv" >

//         {showEditForm ? 
            
//             <div className="homeCardRear">
//                 <form id="editHomeForm">

//                     <h4>Name: <input className="formInputs" type="text" value={home.name}/></h4>

//                     <h4>Date visited: <input className="formInputs" type="text" value={home.date}/></h4>

//                     <h4>Description: <textarea className="formInputs" type="text" value={home.description}/></h4>

//                     <h4>City: <input className="formInputs" type="text" value={home.city} /></h4>

//                     <h4>State: <input className="formInputs" type="text" value={home.state}/></h4>

//                     <h4>Year Completed: <input className="formInputs" type="date" value={home.completed}/></h4>

//                     <h4>Usonian: 
//                         {/* {home.usonian.toString()}  */}
//                         <select value={home.usonian} onChange={(e) => setUsonian(e.target.value)} className="usonianDropdown" placeholder="Usonian" required >
//                             <option className="usonianDropdown" value="" >Usonian?</option>
//                             <option className="usonianDropdown" name="true" value={true}>true</option>
//                             <option className="usonianDropdown" name="false" value={false}>false</option>
//                         </select>
//                     </h4>

//                     <h4>Rating: <input className="formInputs" type="number" value={home.rating}/></h4>

//                     <button className="cardButtons" onClick={handleEditForm} >Cancel</button>
//                     <button className="cardButtons" onClick={handleBackendDelete}>Save</button>

//                 </form>
//             </div>
//             :
//             <div className="homeCardRear">
//                 <h2>{home.name}</h2>
//                 <h3>Date visited: {home.date}</h3>
//                 <h4>{home.description}</h4>
//                 <h4>City: {home.city}</h4>
//                 <h4>State: {home.state}</h4>
//                 <h4>Year Completed: {home.completed}</h4>
//                 <h4>Usonian: {home.usonian.toString()} </h4>
//                 <h4>Rating: {home.rating}</h4>

//                 <button className="cardButtons" onClick={toggleEditForm} >Edit</button>

//                 <button className="cardButtons" onClick={handleBackendDelete}>Delete</button>
//             </div>
//         }

//     </div>    
// )