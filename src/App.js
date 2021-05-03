import axios from "axios";
import React from "react";

import "./App.css";
import Game from "./Game";
import Menu from "./Menu";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deckID: "",
      game: [],
      playing: false,
      //  one to control what is rendered to the user- the pre-game menu or the game itself.
    };
  }
  handleChange = (e) => {
    this.setState({
      deckID: e.target.value,
    });
  };

  generateDeck = async () => {
    let deck = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    this.setState({
      deckID: deck.data.deck_id,
    });
    this.drawTwoCards();
  };
  loadDeck = (e) => {
    e.preventDefault();
    this.drawTwoCards();
  };

  addToGame = async () => {
    let drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`
    );
    this.setState({
      game: this.state.game.concat(drawCards.data.cards),
    });
  };
  drawTwoCards = async () => {
    this.setState({
      playing: true,
    });
    let drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`
    );
    drawCards.data.cards.forEach((card) => {
      this.setState({ game: this.state.game.concat(card) });
    });
  };
  render() {
    const { playing, game, deckID } = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {playing ? (
          <Game game={game} deckID={deckID} addToGame={this.addToGame} />
        ) : (
          <Menu
            generateDeck={this.generateDeck}
            handleChange={this.handleChange}
            loadDeck={this.loadDeck}
          />
        )}
      </div>
    );
  }
}
