import React from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [], showCards: false };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      console.log(res);
      const cardsArr = res.data.cards;
      const cardsId = res.data.deck_id;
      this.setState({ deckId: cardsId, cards: cardsArr});
      this.toggleCards();
    } catch (error) {
      this.setState({ cards: [] });
    }
  };

  fetch2CardsByDeckId = async (e) => {
    e.preventDefault();
    const { deckId } = this.state;
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
      );
      const cardsArr = res.data.cards;
      this.setState({ cards: cardsArr });
      this.toggleCards();
    } catch (error) {
      this.setState({ cards: [] });
    }
  };

  handleChange = (e) => {
    const { deckId } = this.state;
    console.log(deckId);
    this.setState({ deckId: e.target.value });
  };

  // componentDidMount() {
  //   this.generateDeck();
  // }

  hitMe = async (e) => {
    e.preventDefault();
    const { deckId } = this.state;
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`
      );
      const hitMeArr = res.data.cards;
      this.setState({ cards: hitMeArr });
    } catch (error) {
      this.setState({cards: []});
    }
  };

  toggleCards = () => {
    this.setState((prevState) => {
      return { showCards: !prevState.showCards };
    });
  };

  render() {
    const { deckId, cards } = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {this.state.showCards ? (
          <Game hitMe={this.hitMe} deckId={deckId} cards={cards} />
        ) : (
          <Menu
            fetch2CardsByDeckId={this.fetch2CardsByDeckId}
            generateDeck={this.generateDeck}
            handleChange={this.handleChange}
            deckId={deckId}
            cards={cards}
          />
        )}
      </div>
    );
  }
}
