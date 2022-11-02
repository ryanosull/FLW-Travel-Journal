import React, {useState, useEffect} from "react";
import HomesCard from "./HomesCard"

const homesUrl = "http://localhost:8000/flwHomes"

function HomesContainer () {

    const [homes, setHomes] = useState([])

    useEffect (() => {
        fetch(homesUrl)
        .then(resp => resp.json())
        .then(homeData => setHomes(homeData))
    }, [])

    


    return (
        <div>
            <HomesCard homes={homes}/> this is HomesContainer
        </div>
    )
};

export default HomesContainer;