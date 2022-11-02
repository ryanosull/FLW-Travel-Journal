import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HomeCardRear from "./HomeCardRear";

function HomeCard ({home}) {

    const [showDetails, setShowDetails] = useState(false)

    function toggleHomeDetails () {
        setShowDetails(!showDetails)
    }


    return (
        <div className = "ui eight wide column" onClick={toggleHomeDetails} >
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

export default HomeCard;