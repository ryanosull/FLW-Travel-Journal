import React from "react";
// import guggenheim from "../src/assets/guggenheim.png"; why won't this work as alt?

// from 1.25 in this video: https://www.youtube.com/watch?v=p7J7u_9_3FI
// <img style={{objectFit: "cover", width: "100px", height: "100px"}} src alt etc... /> 

function HomeCardFront ({home, toggleHomeDetails}) {



    return (
        <div className="homeCardFront" >
            <h2 id="frontName">{home.name}</h2>
            <img  className="homeImage" src={home.image} alt="oh noooooo!" />
            <br/>
            <button onClick={toggleHomeDetails} className="cardButtons" id="viewDetailsButton" >View details</button>
        </div>
    )
};

export default HomeCardFront; 