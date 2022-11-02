import React from "react";
import './App.css';
import HomesContainer from "./HomesContainer";
import Nav from "./Nav";

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
      <Nav />
      {/* <h3>hello dorks</h3>
      <button onClick={buttonClick}>click me bby</button> */}
      <br />
      <hr />
      <br />
      <HomesContainer />
    </div>
  );
}

export default App;
