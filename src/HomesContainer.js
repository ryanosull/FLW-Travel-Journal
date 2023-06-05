import React from "react";
import HomesCard from "./HomesCard";


function HomesContainer ({homes, setHomes, handleDelete}) {

    const renderHomes = homes.map((home) => { //assigning .map to variable
        return(
            <HomesCard home={home} homes={homes} setHomes={setHomes} key={home.id} handleDelete={handleDelete}/>
        );
    });


    return (
        <div className='homesContainer' id="flexRow" >
            {renderHomes}
        </div>
    );
};

export default HomesContainer;