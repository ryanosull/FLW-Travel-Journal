import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HomeCardRear from "./HomeCardRear";


function HomesCard ({home, handleDelete}) {

    const [showDetails, setShowDetails] = useState(false)

    function toggleHomeDetails() {
        setShowDetails(!showDetails)
    }


    return (
        <div className = "homesCard" onClick={toggleHomeDetails} >
            <div className = 'houseTile' id="column" >
                {
                    showDetails ? 
                    <HomeCardRear home={home} key={home.id} handleDelete={handleDelete} />
                    :
                    <HomeCardFront home={home} />
                }
            </div>
        </div>
    )

};

export default HomesCard;