import axios from "axios";
import React from "react";

import Game from "./Game";
import Menu from "./Menu";

import "./App.css";

export default class App extends React.Component {
  state = {};

  onDeckId = async (deckId) => {
    const { data } = await axios(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
    );

    this.setState({ cards: data.cards, deckId: data.deck_id });
  };

  onNewDeck = async () => this.onDeckId("new");

  onHit = async () => {
    const { data } = await axios(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=1`
    );

    this.setState({ cards: [...this.state.cards, data.cards[0]] });
  };

  render() {
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {this.state.deckId ? (
          <Game
            deckId={this.state.deckId}
            cards={this.state.cards}
            onHit={this.onHit}
          />
        ) : (
          <Menu onDeckId={this.onDeckId} onNewDeck={this.onNewDeck} />
        )}
      </div>
    );
  }
}
