import React from "react";
import './index.css';
import HomesContainer from "./HomesContainer";
import Nav from "./Nav";
import Sort from "./Sort";
import Filter from "./Filter"



function App() {





 // see homes container for more on filter


  // const [filter, setFilter] = useState('All')

  // function changeFilter (newFilter) {
  //     setFilter(newFilter)
  // }

  // function filterHomes () {
  //   if (filter === 'Usonian')
  //     return 
  // }

  return (
    <div className="App">
      <Nav />
      <br/>
      <Sort />
      <br />
      <Filter />
      <br />
      <HomesContainer />
    </div>
  );
}

export default App;

// json-server db.json --watch --port 8000