import React from "react";


function NewHomeForm () {


    return (
        <div>
            <form id="newHomeForm" >
                <input className="formInputs" placeholder="Name" ></input>
                <input className="formInputs" placeholder="Description" ></input>
                <input className="formInputs" placeholder="City" ></input>
                <input className="formInputs" placeholder="State" ></input>
                <input className="formInputs" type="text" minLength="4" maxLength="4" placeholder="Year Completed" ></input>

                {/* <label>Usonian?</label> */}
                <select className="usonianDropdown" placeholder="Usonian" >
                    <option className="usonianDropdown" >Usonian?</option>
                    <option className="usonianDropdown" >True</option>
                    <option className="usonianDropdown" >False</option>
                </select>


                <input className="formInputs" placeholder="Image URL" ></input>
                <button id="newHomeSubmit" type="submit" >Add your home!</button>
                
            </form>
        </div>
    )
};

export default NewHomeForm;
