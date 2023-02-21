import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet_functional';


import Greet1 from './components/greet_class';  /*give the name in Capital*/
import Justice_League from './components/Justice_League';

// function App() {
  class App extends Component{
    render(){
  return (
    <div className="App">
      <Greet name=<u>JUSTICE_LEAGUE</u> />
      {/* <Greet1 /> */}
      <Justice_League name="CLARK KENT" heroname="SUPER-MAN">
        <p><b>Weakness</b>--KRYPTONITE</p>
        <button> <b>CAST SPELL</b> </button>
        </Justice_League>
      <Justice_League name="BRUCE WAYNE" heroname="BAT-MAN">
        <p><b>Weakness</b>--LEADERSHIP</p>
        <button> <b>CAST SPELL</b> </button>
        </Justice_League>
      <Justice_League name="PRINCESS DIANA" heroname="WONDER-WOMAN">
        <p><b>Weakness</b>--HEALING</p>
        <button> <b>CAST SPELL</b> </button>
        </Justice_League>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
  }

export default App;
