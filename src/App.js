import React from "react";
import Menu from "./Menu.js";
import Game from "./Game.js";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deckId: "",
      cards: [],
      input: "",
      menu: [0],
      game: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  getDeck = async () => {
    let deck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw?count=2"
    );
    this.setState({
      deckId: deck.data.deck_id,
      cards: deck.data.cards,
      menu: [],
      game: [0],
    });
  };

  inputDraw = async () => {
    let cards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.input}/draw/?count=2`
    );
    this.setState({
      deckId: cards.data.deck_id,
      cards: cards.data.cards,
      menu: [],
      game: [0],
    });
  };

  draw = async () => {
    let cards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
    );
    this.setState((prevState) => ({
      cards: [...prevState.cards, cards.data.cards[0]],
    }));
  };

  render() {
    const menu = () => {
      return (
        <Menu
          getDeck={this.getDeck}
          handleChange={this.handleChange}
          input={this.state.input}
          inputDraw={this.inputDraw}
        />
      );
    };
    const game = () => {
      return (
        <Game
          deckId={this.state.deckId}
          cards={this.state.cards}
          draw={this.draw}
        />
      );
    };
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {this.state.menu.length >= 1 ? menu() : ""}
        {this.state.game.length >= 1 ? game() : ""}
      </div>
    );
  }
}
