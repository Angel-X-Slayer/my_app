import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/Greet_functional';


import Greet1 from './components/greet_class';  /*give the name in Capital*/

// function App() {
  class App extends Component{
    render(){
  return (
    <div className="App">
      <Greet />
      <Greet1 />
      <header className="App-header">
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
      </header>
    </div>
  );
}
  }

export default App;
