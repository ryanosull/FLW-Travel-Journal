import React from "react";


function HomeCardFront ({home}) {



    return (
        <div className="homeCardFront">
            <h2>{home.name}</h2>
            <img className="homeImage" src={home.image} alt="https://londonfabriccompany.com/wp-content/uploads/sites/8/2019/02/frank-lloyd-wright.jpg" />
        </div>
    )
};

export default HomeCardFront; 