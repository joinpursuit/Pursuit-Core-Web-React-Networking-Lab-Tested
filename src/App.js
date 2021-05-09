import React from "react";
import Menu from "./Menu";
import axios from "axios";
import Game from "./Game";

import "./App.css";

export default class App extends React.Component {
  state = { cardsArr: [], deckId: "" };

  cardDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({ deckId: res.data.deck_id, cardsArr: res.data.cards });
    } catch (error) {
      this.setState({ deckId: "", cardsArr: [] });
    }
  };

  drawCards = async (input) => {
    this.setState({ deckId: input });
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${input}/draw?count=2`
      );
      this.setState({ cardsArr: res.data.cards });
    } catch (error) {
      this.setState({ cardsArr: [], deckID: "" });
    }
  };

  hitMe = async () => {
    const { deckId } = this.state;
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`
      );
      this.setState((prevState) => ({
        cardsArr: [...prevState.cardsArr, ...res.data.cards],
      }));
    } catch (error) {
      console.log(error);
      this.setState({ deckID: "", cardsArr: [] });
    }
  };

  componentDidMount() {
    this.cardDeck();
  }
  componentDidUpdate() {
  }
  render() {
    const { deckId, cardsArr } = this.state;
    const cardDeck = this.cardDeck;
    const drawCards = this.drawCards;
    const hitMe = this.hitMe;
    return (
      <div className="app">
        <Menu
          cardDeck={cardDeck}
          drawCards={drawCards}
          deckId={deckId}
          cards={cardsArr}
          hitMe={this.hitMe}
        />
        <Game cards={cardsArr} hitMe={hitMe} deckId={deckId} />
      </div>
    );
  }
}
