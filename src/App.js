import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [] };

  getNewDeck = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw?count=2`
      );
      this.setState({ deckId: res.data.deck_id, cards: res.data.cards });
      // debugger
    } catch (err) {
      this.setState({ deckId: "" });
    }
  };

  hitMe = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=1`
      );
      this.setState((prevState) => ({
        cards: [...prevState.cards, ...res.data.cards],
      }));
    } catch (err) {
      this.setState({ deckId: "" });
    }
  };

  updateDeckId = async (input) => {
    this.setState({ deckId: input });
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${input}/draw?count=2`
      );

      this.setState({ cards: res.data.cards });
    } catch (err) {
      this.setState({ deckId: "" });
    }
  };

  componentDidMount() {
    // this.getNewDeck()
  }

  render() {
    const { deckId, cards } = this.state;
    return (
      <div className="app">
        <h2>Blackjack</h2>
        { deckId && cards.length !== 0 ? 
        <Game cards={cards} deckId={deckId} hitMe={this.hitMe}/> :
        <Menu
          updateId={this.updateDeckId}
          getNewDeck={this.getNewDeck}
          hitMe={this.hitMe}
          deckId={deckId}
          cards={cards}
        />}

      </div>
    );
  }
}
