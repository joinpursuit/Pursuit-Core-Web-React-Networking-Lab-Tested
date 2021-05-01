import React from "react";
import Menu from "./Menu";
import "./App.css";
import axios from "axios";
import Game from "./Game";

export default class App extends React.Component {
  

  
  

  
  render() {
    
    return (
      <div className="app">
        <h1>Blackjack</h1>
        <Menu  />
        <Game />
      </div>
    );
  }
}
