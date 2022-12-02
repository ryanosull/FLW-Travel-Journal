import React, {useState, useEffect} from "react";
import HomesCard from "./HomesCard"
// import Filter from "./Filter"

const homesUrl = "http://localhost:8000/flwHomes"

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

    const renderHomes = homes.map((home, index) => {
        return(
            <HomesCard home={home} key={index}/>
        )
    })
    
    // const renderFilter = homes.map ((home) => {
    //     return {
    //         <Filter home={home} />
    //     }
    // })

    // // see above, asshole


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
        <div className='homesContainer'>
            {renderHomes}
            {/* {renderFilter} */}
        </div>
    )
};

export default HomesContainer;