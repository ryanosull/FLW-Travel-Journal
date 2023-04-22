import React from "react";
// import guggenheim from "../src/assets/guggenheim.png"; why won't this work as alt?


function HomeCardFront ({home}) {



    return (
        <div className="homeCardFront">
            <h2 id="frontName">{home.name}</h2>
            <img className="homeImage" src={home.image} alt="oh noooooo!" />
        </div>
    )
};

export default HomeCardFront; 