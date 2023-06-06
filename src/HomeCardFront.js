import React from "react";



function HomeCardFront ({home, toggleHomeDetails}) {

    return (
        <div className="homeCardFront" >
            <h2 id="frontName">{home.name}</h2>
            <img  className="homeImage" src={home.image} alt="oh noooooo!" />
            <br/>
            <button onClick={toggleHomeDetails} className="cardButtons" id="viewDetailsButton" >View details</button>
        </div>
    );
};

export default HomeCardFront; 