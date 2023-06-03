import React, {useState} from "react";
import HomeCardFront from "./HomeCardFront";
import HomeCardRear from "./HomeCardRear";


function HomesCard ({home, handleDelete}) {

    const [showDetails, setShowDetails] = useState(false)

    const [formData, setFormData] = useState("")

    function toggleHomeDetails() {
        setShowDetails(!showDetails)
    }


    function handleChildValue (value) {
        setFormData(value)
    }

    return (
        <div className = "homesCard"  >
            <div className = 'houseTile' id="column" >
                {
                    showDetails ? 
                    <HomeCardRear home={home} key={home.id} handleDelete={handleDelete} toggleHomeDetails={toggleHomeDetails} onFormData={handleChildValue} />
                    :
                    <HomeCardFront home={home} toggleHomeDetails={toggleHomeDetails} formData={formData} />
                }
            </div>
        </div>
    );
};

export default HomesCard;