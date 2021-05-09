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

  drawCards = async () => {
    const { deckID } = this.state;
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=1`
      );
      this.setState({ cardsArr: res.data.cards });
      // debugger
      console.log(res);
    } catch (error) {
      this.setState({ card: [] });
    }
  };
  componentDidMount() {
    this.cardDeck();
    // this.drawCards()
  }
  componentDidUpdate() {
    // this.drawCards()
  }
  render() {
    const { deckId, cardsArr } = this.state;
    const cardDeck = this.cardDeck;
    const drawCards = this.drawCards;
    return (
      <div className="app">
        <Menu
          cardDeck={cardDeck}
          drawCards={drawCards}
          deckId={deckId}
          cards={cardsArr}
        />
        <Game cards={cardsArr} drawCards={drawCards} deckId={deckId} />
      </div>
    );
  }
}
