import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HomeCardRear from "./HomeCardRear";


function HomesCard ({home, handleDelete}) {

    const [showDetails, setShowDetails] = useState(false)

    function toggleHomeDetails() {
        setShowDetails(!showDetails)
    }

    return (
        <div className = "homesCard"  >
            <div className = 'houseTile' id="column" >
                {
                    showDetails ? 
                    <HomeCardRear home={home} key={home.id} handleDelete={handleDelete} toggleHomeDetails={toggleHomeDetails} />
                    :
                    <HomeCardFront home={home} toggleHomeDetails={toggleHomeDetails} />
                }
            </div>
        </div>
    );
};

export default HomesCard;