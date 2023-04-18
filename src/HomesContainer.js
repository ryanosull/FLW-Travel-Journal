import React from "react";
import HomesCard from "./HomesCard"




function HomesContainer ({homes}) {

    


    // const [filteredHomes, setFilteredHomes]= useSate([])

    // const onSortChange = (e) => {
    //     console.log(e.target.value)
    //     const filtered = homes.filter((home) => {
    //         home === e.target.value
    //     })
        
    //     setFilteredHomes(filtered);

    // }



    const renderHomes = homes.map((home) => {
        return(
            <HomesCard home={home} key={home.id}/>
        )
    })


    return (
        <div className='homesContainer' id="row" >
            {renderHomes}
            {/* {renderFilter} */}
        </div>
    )
};

export default HomesContainer;


