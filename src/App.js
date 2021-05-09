import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [] };

  generateDeck = async () => {
    try {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw?count=2");
      debugger
      this.setState({ deckId: res.data.deck_id, cards: res.data.cards });
    } catch (error) {
      console.log(error);
      this.setState({ deckId: "", cards: [] });
    }
  };

  drawCard = async (input) => {
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${input}/draw?count=2`);
      this.setState({ deckId: input, cards: res.data.cards })
    } catch (error) {
      console.log(error);
      this.setState({ cards: [] })
    }
  };


  hitMe = async () => {
    const { deckId } = this.state;
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`);
      this.setState((prevState) => ({
        cards: [...prevState.cards, ...res.data.cards]
      }))
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    console.log(this.state.deckId);
    const { deckId, cards } = this.state
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {!deckId ? <Menu generateDeck={this.generateDeck} drawCard={this.drawCard} /> :
          <Game deckId={deckId} cards={cards} hitMe={this.hitMe} />}

      </div>
    );
  }
}
