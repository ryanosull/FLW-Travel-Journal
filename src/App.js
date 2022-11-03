import React from "react";
import './App.css';
import HomesContainer from "./HomesContainer";
import Nav2 from "./Nav2";

// import './db.json';

function App() {

  // function buttonClick () {
  //   alert("talkin' to you, dorks")
  // }

  // const buttonClick = () => {
  //   alert("talkin' to you, dorks")
  // }


  return (
    <div className="App">
      <Nav2 />
      {/* <h3>hello dorks</h3>
      <button onClick={buttonClick}>click me bby</button> */}
      <br />
      <HomesContainer />
      <br />
    </div>
  );
}

export default App;
