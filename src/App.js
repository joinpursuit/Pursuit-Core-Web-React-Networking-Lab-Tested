import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { deckID: "", cards: [] }

  render() {
    return (
      <div className="app">
        <h1>Blackjack!</h1>
      </div>
    );
  }
}

export default App;