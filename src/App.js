import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckID: "", cards: [], showMenu: true };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({
        deckID: res.data.deck_id,
        cards: res.data.cards,
        showMenu: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ deckID: "", cards: [] });
    }
  };

  handleChange = (e) => {
    const myDeckID = e.target.value;
    this.setState({ deckID: myDeckID });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { deckID } = this.state;

      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=2`
      );

      this.setState({ cards: res.data.cards });
    } catch (error) {
      console.log(error);
    }
  };

  handleClick = async () => {
    try {
      const { deckID } = this.state;
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=1`
      );
      this.setState((prevState)=>(
        { cards: [...prevState.cards, ...res.data.cards] }))
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    console.log(this.state);
    const { deckID, cards, showMenu } = this.state;
    return (
      <div className="app">
        <h2>Blackjack</h2>
        <Menu
          generateDeck={this.generateDeck}
          handleChange={this.handleChange}
          getCards={this.getCards}
          showMenu={showMenu}
          handleSubmit={this.handleSubmit}
        />
        <Game deckID={deckID} cards={cards} handleClick={this.handleClick} />
      </div>
    );
  }
}
