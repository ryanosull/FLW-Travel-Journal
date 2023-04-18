import React from "react";


function NewHomeForm () {


    return (
        <div>
            <form>
                <input placeholder="Name" ></input>
                <input placeholder="Description" ></input>
                <input placeholder="City" ></input>
                <input placeholder="State" ></input>
                <input type="text" minLength="4" maxLength="4" placeholder="Year Completed" ></input>

                {/* <label>Usonian?</label> */}
                <select placeholder="Usonian" >
                    <option>Usonian?</option>
                    <option>True</option>
                    <option>False</option>
                </select>


                <input placeholder="Image URL" ></input>
                <button id="newHomeSubmit" type="submit" >Add your home!</button>
                
            </form>
        </div>
    )
};

export default NewHomeForm;
