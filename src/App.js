
import axios from "axios";
import React from "react";

import "./App.css";
import Game from "./Game";
import Menu from "./Menu";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deckId: "",
      cards: [],
      playing: false,
      //  one to control what is rendered to the user- the pre-game menu or the game itself.
    };
  }

  handleChange = (e) => {
    this.setState({
      deckId: e.target.value,
    });
  };

  generateDeck = async () => {
    let deck = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    this.setState({
      deckId: deck.data.deck_id,
    });
    this.drawTwoCards();
  };
  loadDeck = (e) => {
    e.preventDefault();
    this.drawTwoCards();
  };

  addToGame = async () => {
    let drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
    );
    this.setState({
     cards: this.state.cards.concat(drawCards.data.cards),
     
      //game : drawCards.data.cards
    });
  };
  drawTwoCards = async () => {
    this.setState({
      playing: true,
    });
    let drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`
    );
    drawCards.data.cards.forEach((card) => {
      this.setState({ cards: this.state.cards.concat(card) });
    });
  };
  render() {
    const { playing, cards, deckId } = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {playing ? (
          <Game cards={cards} deckId={deckId} addToGame={this.addToGame} />
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