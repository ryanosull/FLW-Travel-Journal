import React, {useState} from "react";
import './App.css';
import HomesContainer from "./HomesContainer";
import Nav2 from "./Nav2";
import Sort from "./Sort";
import Filter from "./Filter"



function App() {

  const [filter, setFilter] = useState('All')

  return (
    <div className="App">
      <Nav2 />
      <br/>
      <Sort />
      <br />
      <Filter />
      <br />
      <HomesContainer />
      <br />
    </div>
  );
}

export default App;
