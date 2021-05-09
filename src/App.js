import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
  state = { deckId: "", cards: [] };

  generateDeck = async () => {
    try {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw?count=2");
      this.setState({ deckId: res.data.deck_id, cards: res.data.cards });
    } catch (error) { 
      console.log(error);
      this.setState({ deckId: "", cards: [] });
    }
  };

  drawCard = async (e) => {
    e.preventDefault()
    try {
<<<<<<< HEAD
      const { deckId } = this.state
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
      this.setState({ cards: res.data.cards })
=======
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${input}/draw?count=2`);
      this.setState({ deckId: input, cards: res.data.cards })
>>>>>>> 4f9fe07493810e113d5f394b59f93f10ad0b17ec
    } catch (error) {
      console.log(error);
      this.setState({ cards: [] })
    }
  };

  hitMe = async () => {
    const { deckId } = this.state;
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`);
      this.setState((prevState) => ({
        cards: [...prevState.cards, ...res.data.cards]
      }))
    } catch (error) {
      console.log(error);
      this.setState((prevState) => {
        return { cards: prevState.cards }
      })
    }
  }

  handleChange = (e) => {
    this.setState({ deckId: e.target.value });
  };

  render() {
    console.log(this.state.deckId);
    const { deckId, cards } = this.state;
    return (
      <div className="App">
        <h1>Blackjack</h1>
<<<<<<< HEAD
        {deckId && cards.length !== 0 ? <Game deckId={deckId} cards={cards} hitMe={this.hitMe}/> : <Menu deckId={deckId} generateDeck={this.generateDeck} drawCard={this.drawCard} handleChange={this.handleChange}/>}
=======
        {!deckId ? <Menu generateDeck={this.generateDeck} drawCard={this.drawCard} /> :
          <Game deckId={deckId} cards={cards} hitMe={this.hitMe} />}

>>>>>>> 4f9fe07493810e113d5f394b59f93f10ad0b17ec
      </div>
    );
  }
}
