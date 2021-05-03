import React from "react";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Blackjack</h1>
        <br />
        <br />
        <button>Generate Deck</button>
        <label>Input Existing Deck</label>
        <input type="text" />
        <button>Draw</button>
      </div>
    );
  }
}
