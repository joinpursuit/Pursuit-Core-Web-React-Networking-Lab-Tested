import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [] };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      this.setState({ deckId: res.data.deck_id });
    } catch (error) {
      console.log(error);
      this.setState({ deckId: "" });
    }
  };

  drawCard = async (input) => {
    try {
      debugger;
      this.setState({ deckId: input });
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${input}/draw/?count=2`
      );
      // this.setState({ cards: res.data.cards[].images})
      debugger;
    } catch (error) {
      debugger;
      console.log(error);
    }
  };

  render() {
    console.log(this.state.deckId);
    const { deckId, cards } = this.state
    return (
      <div className="app">
        {!deckId ? <Menu generateDeck={this.generateDeck} drawCard={this.drawCard} /> : null}
        <Game deckId={deckId} cards={cards}/>
      </div>
    );
  }
}
