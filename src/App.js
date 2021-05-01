import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [] , showMenu:true ,showGame:false};

  // updateDeck = (e) => {
  //   this.setState({ cards: e.target.value });
  // };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({ deckId: res.data.deck_id, cards: res.data.cards, showMenu:false, showGame:true});
      // debugger
    } catch (err) {
      console.log(err);
    }
  };

  // componentDidUpdate() {}

  useDeck = async () => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=2`
      );
      this.setState({ cards: res.data.cards , showMenu:false, showGame:true});
      //debugger;
    } catch (err) {
      console.log(err);
    }
  };

  addCard = async () => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=1`
      );
      console.log(res)
      this.setState((prevState) => ({
        cards: [...res.data.cards, ...prevState.cards],
      }));
      console.log(this.state)
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate(){


  }

  render() {
    const { deckId, cards } = this.state;
    return (
      <div>
        <h1>Black Jack Game</h1>
      {this.state.showMenu &&   <Menu
          deckId={deckId}
          generateDeck={this.generateDeck}
          cards={cards}
          useDeck={this.useDeck}
        />}
      {this.state.showGame &&   <Game deckId={deckId} cards={cards} addCard={this.addCard} />}
      </div>
    );
  }
}

// We would like you to make a `Menu` component for the menu and a `Game`
// component for the game.
// You should have exactly two pieces of state in `App`:

// - `deckId`: deck ID once input or retrieved from the API
// - `cards`: cards retrieved from the API

// This state should be stored in `App`, with `Menu` and `Game`
//  accepting props and updating `App`'s state as necessary.
