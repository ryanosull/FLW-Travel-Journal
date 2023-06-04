import React, {useState, useEffect} from "react";
import './index.css';
import HomesContainer from "./HomesContainer";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter"
import NewHomeForm from "./NewHomeForm";
import guggenheim from "../src/assets/guggenheim.png"
//


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function App() {

  const [homes, setHomes] = useState([])

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("None")

  useEffect (() => {
    fetch(homesUrl)
    .then(resp => resp.json())
    .then(homeData => setHomes(homeData))
  }, [])


  function changeFilter (newFilter) {
      setFilter(newFilter)
  }


  function changeSort (newSort) {
    setSort(newSort)
  }

  function filterHomes () {
    if (filter === 'Usonian')
      return homes.filter(home => home.usonian)
    else if (filter === "non-Usonian")  
      return homes.filter(home => !home.usonian)
    else return [...homes]
  }


  function sortHomes () {

    let sortedHomes = filterHomes()

    if (sort === "Oldest") {
      return sortedHomes.sort((year1, year2) => year1.completed - year2.completed)
    }
    else if (sort === "Newest" ) {
    
      return sortedHomes.sort((year1, year2) => year2.completed - year1.completed)
    }
    else return sortedHomes
  }

  function handleDelete(id) {
    const newHomes = homes.filter(home => home.id !== id )
    setHomes(newHomes)
  }


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
        <img id="gugg" src={guggenheim} alt="oh nooooo"/>
      </div>

    </div>
  );
}

export default App;

//In a new terminal: `` json-server db.json --watch --port 8000 ``
//In a seperate terminal: `` npm install `` then `` npm start ``