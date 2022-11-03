import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HomeCardRear from "./HomeCardRear";

function HomesCard ({home}) {

    const [showDetails, setShowDetails] = useState(false)

    function toggleHomeDetails () {
        setShowDetails(!showDetails)
    }


    return (
        <div className = "HomesCard" onClick={toggleHomeDetails} >
            <div className = 'houseTile'>
                {
                    showDetails ? 
                    <HomeCardRear home={home} />
                    :
                    <HomeCardFront home={home} />
                }
            </div>
        </div>
    )

};

export default HomesCard;