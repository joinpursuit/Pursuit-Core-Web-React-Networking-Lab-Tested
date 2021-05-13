import React from "react";
import Menu from "./Menu";
import "./App.css";
import axios from "axios";
import Game from "./Game";

export default class App extends React.Component {
  state = { deckId: "", cards: []};

  generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({
        deckId: res.data.deck_id,
        cards: res.data.cards,
      });
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
      debugger
      this.setState({cards: res.data.cards})
    } catch (error) {
      console.log(error);
      this.setState({ cards: [] });
    }
  };

  com

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

  render() {
    const { deckId, cards} = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        { deckId && cards.length !== 0 ?
        <Game deckId={deckId} cards={cards} hitMe={this.hitMe}/>
        :
        <Menu
        deckId={deckId}
        handleChange={this.handleChange}
        generateDeck={this.generateDeck}
        handleSubmit={this.handleSubmit}
        /> 
      }
      </div>
  );
    };
  };
