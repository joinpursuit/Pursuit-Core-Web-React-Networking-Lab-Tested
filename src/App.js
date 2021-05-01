import React from "react";
import Menu from "./Menu"
import Game from "./Game"
import axios from "axios"

import "./App.css";

export default class App extends React.Component {
  state={deckID: "", cards: []}

  generateDeck = async() =>{
    try {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw?count=2")
      this.setState({deckID: res.data.deck_id, cards: res.data.cards})
    } catch (error) {
      console.log(error)
      this.setState({deckID: [], cards: []})
    }
  }

  hitMe = async() =>{
    try {
      const res = await axios.get("https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1")
      this.setState({deckID: res.data.deck_id, cards: res.data.cards})
    } catch (error) {
      console.log(error)
      this.setState({deckID: [], cards: []})
    }
  }

  render() {
    console.log(this.state)
    const {deckID, cards} = this.state
    return (
      <div className="app">
            <h2>Blackjack</h2>
        <Menu generateDeck={this.generateDeck} deckID={deckID}/>
        <Game deckID={deckID} cards={cards}/>
      </div>
    );
  }
}
