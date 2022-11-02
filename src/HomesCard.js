import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HogCardRear from "./HomeCardRear";

function HomesCard ({homes}) {


    

    const renderHomes = homes.map((home) => {
        return(
            <HomeCardFront
            name={home.name}
            image={home.image}
            />
        )
    })

    return (
        <div>
            HomesCard{renderHomes}
        </div>
    )

};

export default HomesCard;