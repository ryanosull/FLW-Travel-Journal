import React, {useState, useEffect} from "react";
import HomesCard from "./HomesCard"


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes"

function HomesContainer () {

    const [homes, setHomes] = useState([])


    // const [filteredHomes, setFilteredHomes]= useSate([])

    // const onSortChange = (e) => {
    //     console.log(e.target.value)
    //     const filtered = homes.filter((home) => {
    //         home === e.target.value
    //     })
        
    //     setFilteredHomes(filtered);

    // }

    useEffect (() => {
        fetch(homesUrl)
        .then(resp => resp.json())
        .then(homeData => setHomes(homeData))
    }, [])

    const renderHomes = homes.map((home) => {
        return(
            <HomesCard home={home}/>
        )
    })



    // const [filter, setFilter] = useState('All')

    // function changeFilter (newFilter) {
    //     setFilter(newFilter)
    // }

    // // function filterHomes () {
    //     if (filter === 'Usonian')
    //         return homes.filter( home => home.usonian)
    //     else if (filter === 'non-Usonian')
    //         return homes.filter(home => !home.usonian)
    // // }



    return (
        <div className='homesContainer' id="row" >
            {renderHomes}
            {/* {renderFilter} */}
        </div>
    )
};

export default HomesContainer;


// json-server db.json --watch --port 8000