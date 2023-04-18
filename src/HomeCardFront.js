import React from "react";


function HomeCardFront ({home}) {



    return (
        <div className="homeCardFront">
            <h2 id="frontName">{home.name}</h2>
            <img className="homeImage" src={home.image} alt="oh nooooo" />
        </div>
    )
};

export default HomeCardFront; 