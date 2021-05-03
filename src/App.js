import React from "react";
import Menu from "./Menu";
import "./App.css";
import axios from "axios";
import Game from "./Game";

export default class App extends React.Component {
  state = { deckId: "", cards: [], showGame: false };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({
        deckId: res.data.deck_id,
        cards: res.data.cards,
      });
      this.toggleApps()
    } catch (error) {
      console.log(error);
      this.setState({ deckId: "", cards: [] });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { deckId } = this.state
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
      );
      this.setState({
        deckId: res.data.deck_id,
        cards: res.data.cards,
      });
      this.toggleApps()
    } catch (error) {
      console.log(error);
      this.setState({ deckId: "", cards: [] });
    }
  };

  handleChange = (e) => {
    this.setState({ deckId: e.target.value });
  };

  hitMe = async () => {
    try {
      const { deckId } = this.state
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`)
      this.setState((prevState) => ({cards: [...prevState.cards, ...res.data.cards]}))
    } catch (error) {
      console.log(error);
      this.setState((prevState) => ({cards: prevState.cards}))
    }
  }

  toggleApps = () => {
    this.setState((prevState) => ({showGame: !prevState.showGame}))
  }

  render() {
    const { deckId, cards, showGame } = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {!showGame ?
        <Menu
        deckId={deckId}
        handleChange={this.handleChange}
        generateDeck={this.generateDeck}
        handleSubmit={this.handleSubmit}
        /> :
        <Game deckId={deckId} cards={cards} hitMe={this.hitMe}/>
      }
      </div>
    );
  }
}
