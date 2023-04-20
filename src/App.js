import React, {useState, useEffect} from "react";
import './index.css';
import HomesContainer from "./HomesContainer";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter"
import NewHomeForm from "./NewHomeForm";
import test from "../src/assets/guggenheim.png"
//


const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes/"

function App() {

  const [homes, setHomes] = useState([])

  useEffect (() => {
    fetch(homesUrl)
    .then(resp => resp.json())
    .then(homeData => setHomes(homeData))
}, [])



  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("None")

  function changeFilter (newFilter) {
      setFilter(newFilter)
  }

  function changeSort (newSort) {
    setSort(newSort)
  }

  function filterHomes () {
    if (filter === 'Usonian')
      return homes.filter(home => home.Usonian)
    else if (filter === "non-Usonian")  
      return homes.filter(home => !home.Usonian)
    else return [...homes]
  }


  function sortHomes () {
    let sortedHomes = filterHomes()

    if (sort === "Oldest")
      return sortedHomes.sort((year1, year2) => year1.Completed - year2.Completed)
    else if (sort === "Newest" )
      return sortedHomes.sort((year1, year2) => year2.Completed - year1.Completed)
    else return sortedHomes
  }

  function handleDelete(id) {
    const newHomes = homes.filter(home => home.id !== id )
    setHomes(newHomes)
  }


  return (
    <div className="App">
      <Header />
      <br/>
      <NewHomeForm homes={homes} setHomes={setHomes} />
      <br/>
      <Sort changeSort={changeSort} />
      <br/>
      <Filter changeFilter = {changeFilter} />
      <br />
      <HomesContainer homes={sortHomes()} handleDelete={handleDelete}/>
      <img src={test} alt="https://londonfabriccompany.com/wp-content/uploads/sites/8/2019/02/frank-lloyd-wright.jpg"  ></img>
    </div>
  );
}

export default App;

// json-server db.json --watch --port 8000