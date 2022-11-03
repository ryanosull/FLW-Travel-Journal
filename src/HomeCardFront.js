import React from "react";


function HomeCardFront ({home}) {



    return (
        <div className="homeCardFront">
            <h2>{home.name}</h2>
            <img className="homeImage" src={home.image} alt="" />
        </div>
    )
};

export default HomeCardFront; 