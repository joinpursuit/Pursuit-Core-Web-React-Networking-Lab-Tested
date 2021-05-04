import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [], showMenu: true, showGame: false };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({
        deckId: res.data.deck_id,
        cards: res.data.cards,
        showMenu: false,
        showGame: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  generateDeckId = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({
        deckId: res.data.deck_id,
        cards: res.data.cards,
        showMenu: false,
        showGame: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useDeck = async (e) => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${e.target.input.value}/draw?count=2`
      );
      this.setState({
        deckId: e.target.input.value,
        cards: res.data.cards,
        showMenu: false,
        showGame: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  addCard = async () => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=1`
      );
      console.log(res);
      this.setState((prevState) => ({
        cards: [...prevState.cards, ...res.data.cards],
      }));
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { deckId, cards } = this.state;
    return (
      <div className="app">
        <h1>Black Jack Game</h1>
        {this.state.showMenu && (
          <Menu
            deckId={deckId}
            generateDeck={this.generateDeck}
            cards={cards}
            useDeck={this.useDeck}
          />
        )}
        {this.state.showGame && (
          <Game deckId={deckId} cards={cards} addCard={this.addCard} />
        )}
      </div>
    );
  }
}
