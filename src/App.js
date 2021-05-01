import React from "react";
import axios from "axios";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";

class App extends React.Component {
  state = { deckID: "", cards: [] };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw?count=2`
      );
      const newDeck = res.data.deck_id;
      const twoCards = res.data.cards;
      this.setState({ deckID: newDeck, cards: twoCards });
      // console.log(twoCards)
    } catch (err) {
      this.state({ deckID: "" });
    }
  };
  getCard = () => {};
  render() {
    if (this.state.deckID === "") {
      return (
        <div className="app">
          <Menu props={this.state} generateDeck={this.generateDeck} />
        </div>
      );
    } else {
      console.log(this.state);
      return (
        <>
          <Game props={this.state} />
        </>
      );
    }
  }
}

export default App;
