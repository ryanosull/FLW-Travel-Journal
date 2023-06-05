import React, {useState, useEffect} from "react";
import './index.css';
import HomesContainer from "./HomesContainer";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter"
import NewHomeForm from "./NewHomeForm";
import guggenheim from "../src/assets/guggenheim.png"
//



//endpoint variables
const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function App() {

  //initial state for fetch
  const [homes, setHomes] = useState([])

  //state for filter and sort functionality
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("None")

  //initial fetch
  useEffect (() => {
    fetch(homesUrl)
    .then(resp => resp.json())
    .then(homeData => setHomes(homeData))
  }, [])


  function changeFilter (newFilter) { //helper function
      setFilter(newFilter)
  }


  function changeSort (newSort) { //helper function
    setSort(newSort)
  }

  //filter
  function filteredHomes () {
    if (filter === 'Usonian')
      return homes.filter(home => home.usonian)
    else if (filter === "non-Usonian")  
      return homes.filter(home => !home.usonian)
    else return [...homes]
  }

  //sorting functionality
  function sortHomes () {

    let sortedHomes = filteredHomes()

    if (sort === "Oldest") {
      return sortedHomes.sort((year1, year2) => year1.completed - year2.completed)
    }

    else if (sort === "Newest" ) {
      return sortedHomes.sort((year1, year2) => year2.completed - year1.completed)
    }

    else if (sort === "Highest") {
      return sortedHomes.sort((rating1, rating2) => rating2.rating - rating1.rating)
    }

    else if (sort === "Lowest") {
      return sortedHomes.sort((rating1, rating2) => rating1.rating - rating2.rating)
    }

    //convert the date strings to Date objects using the Date constructor. then, compare the Date objects using the comparison operators.

    else if (sort === "First") { //first visited

      function compareFirstDates(date1, date2){

        const dateObj1 = new Date(date1.date);
        const dateObj2 = new Date(date2.date);

        if (dateObj1 < dateObj2) {
          return -1 
        };
      };

      return sortedHomes.sort(compareFirstDates)
      
    }

    else if (sort === "Last") { //last visited

      function compareLastDates(date1, date2){

        const dateObj1 = new Date(date1.date);
        const dateObj2 = new Date(date2.date);

        if (dateObj2 < dateObj1) {
          return -1 
        };
      };

      return sortedHomes.sort(compareLastDates)

    }

    else return sortedHomes //else do nothing
  };

  function handleDelete(id) {
    const newHomes = homes.filter(home => home.id !== id )
    setHomes(newHomes)
  };



  return (
    <div className="App">

      <Header />
  
      <NewHomeForm homes={homes} setHomes={setHomes} />

      <div id="sortFilter">
        <Sort changeSort={changeSort} />

        <Filter changeFilter = {changeFilter} />
      </div>

      <HomesContainer homes={sortHomes()} setHomes={setHomes} handleDelete={handleDelete}/>

      <div id="guggDiv">
        <img id="gugg" src={guggenheim} alt="oh nooooo!"/>
      </div>

    </div>
  );
};

export default App;


//Environment setup ↓
//In a new terminal: `` json-server db.json --watch --port 8000 ``
//In a seperate terminal: `` npm install `` then `` npm start ``