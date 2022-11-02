import React from "react";


function HomeCardFront ({home}) {



    return (
        <div>
            <h2>{home.name}</h2>
            <img className="minHouseTile" src={home.image} alt="" />
        </div>
    )
};

export default HomeCardFront; 