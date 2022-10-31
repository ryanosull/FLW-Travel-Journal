import './App.css';

function App() {

  function buttonClick () {
    alert("talkin' to you, dorks")
  }


  return (
    <div className="App">
      <h3>hello dorks</h3>
      <button onClick={buttonClick}>click me bby</button>
    </div>
  );
}

export default App;
