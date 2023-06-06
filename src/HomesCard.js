import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HomeCardRear from "./HomeCardRear";


function HomesCard ({home, homes, setHomes, handleDelete}) {

    const [showDetails, setShowDetails] = useState(false); //initial state for card flip


    function toggleHomeDetails() { //card flip
        setShowDetails(!showDetails)
    };


    return (
        <div className = "homesCard"  >
            <div id="flexColumn" >
                {
                    showDetails ? 

                    <HomeCardRear home={home} homes={homes} setHomes={setHomes} 
                    key={home.id} handleDelete={handleDelete} toggleHomeDetails={toggleHomeDetails}/>

                    : //ternary

                    <HomeCardFront home={home} toggleHomeDetails={toggleHomeDetails}/>
                }
            </div>
        </div>
    );
};

export default HomesCard;