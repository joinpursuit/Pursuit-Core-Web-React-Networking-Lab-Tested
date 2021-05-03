import axios from "axios";
import React from "react";

import "./App.css";
import Game from "./Game.js"
import Menu from "./Menu.js"

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      deckID: "",
      userHand: [],
    }
  }

  generateTwoCards = async() => {
    // deckID = this.state.deckID
    let drawTwoCards = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`)
    // console.log(drawTwoCards)

    drawTwoCards.data.cards.forEach((e) => {this.setState({
      userHand: this.state.userHand.concat(e),
    })})
  }

  generateOneCard = async() => {
    let drawOneCard = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1
    `)
    console.log(drawOneCard)
    this.setState({
      userHand: this.state.userHand.concat(drawOneCard.data.cards)
    })
    
  }

  generateDeck = async() => {
    let deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/`)

    console.log(deck)
    this.setState ({
      deckID: deck.data.deck_id,
    })
  }

  handleInput = (e) => {

    this.setState ({
      deckID: e.target.value,
    })
  }

  render() {
    return (
      <div className="app">
        <h1>BlackJack</h1>
        <Menu generateDeck={this.generateDeck} deckID={this.state.deckID} generateTwoCards={this.generateTwoCards} handleInput={this.handleInput}/>
        <Game userHand={this.state.userHand} deckID={this.state.deckID} generateOneCard={this.generateOneCard}/>
      </div>
    );
  }
}
