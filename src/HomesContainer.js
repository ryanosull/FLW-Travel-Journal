import React from "react";
import HomesCard from "./HomesCard"




function HomesContainer ({homes, handleDelete}) {




    const renderHomes = homes.map((home) => {
        return(
            <HomesCard home={home} key={home.id} handleDelete={handleDelete}/>
        )
    })


    return (
        <div className='homesContainer' id="row" >
            {renderHomes}
        </div>
    )
};

export default HomesContainer;


