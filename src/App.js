import React from "react";

import "./App.css";
import Game from "./Game";
import Menu from "./Menu";
import axios from "axios";

export default class App extends React.Component {
  state = { deckId: "", cards: [] };

  card = () => {
    this.state.cards.map((card) => {
      console.log("card")
      // debugger;
      // return <img src={card} alt="card" />;
    });
  };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      const id = res.data.deck_id;
      // const hand = res.data.cards;
      this.setState({ deckId: id });
      // console.log(id);
      // debugger;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { deckId, cards } = this.state;
    return (
      <div className="app">
        <Menu generateDeck={this.generateDeck} deckId={deckId} />
        <Game deckId={deckId} card={this.card} cards={cards}/>
      </div>
    );
  }
}
