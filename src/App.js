import React, {useState, useEffect} from "react";
import './index.css';
import HomesContainer from "./HomesContainer";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter"

const baseUrl = "http://localhost:8000/"
const homesUrl = baseUrl + "flwHomes"

function App() {


  const [homes, setHomes] = useState([])


  useEffect (() => {
    fetch(homesUrl)
    .then(resp => resp.json())
    .then(homeData => setHomes(homeData))
}, [])


  const [filter, setFilter] = useState('All')

  function changeFilter (newFilter) {
      setFilter(newFilter)
  }

  function filterHomes () {
    if (filter === 'Usonian')
      return homes.filter(home => home.Usonian)
    else if (filter === "non-Usonian")  
      return homes.filter(home => !home.Usonian)
    else return homes
  }

  return (
    <div className="App">
      <Header />
      <br/>
      <Sort />
      <br />
      <Filter changeFilter = {changeFilter} />
      <br />
      <HomesContainer homes={filterHomes()}/>
    </div>
  );
}

export default App;

// json-server db.json --watch --port 8000