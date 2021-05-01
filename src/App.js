import React from "react";
import Menu from './Menu'
import axios from 'axios'
import Game from './Game'

import "./App.css";

export default class App extends React.Component {
  state = { cardsArr: [], deckID: ''};

  cardDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      console.log(res.data)
    //   const cardArray = Object.keys(res.data.message);
      this.setState({ deckID: res.data.deck_id});
      // this.setState({deckID: res.data.images})
      // debugger

    } catch (error) {
      this.setState({ deckID: ''});
    }

  };

  drawCards = async() => {
    const {deckID} = this.state
    try{
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw?count=2`)
      this.setState({cardsArr: res.cards.image})
      // debugger
      console.log(res)
    }catch (error){
      this.setState({card: []})

    }
  }
  componentDidMount() {
    this.cardDeck()
    // this.drawCards()
}
componentDidUpdate(){
  // this.drawCards()
}
  render() {
    const {deckID, cardsArr} = this.state
    const cardDeck = this.cardDeck
    const drawCards = this.drawCards
    return (
      <div className="app">
       <Menu cardDeck={cardDeck} deckID={deckID} cards={cardsArr} />
       <Game  cards={cardsArr} drawCards={drawCards} deckID={deckID} />
      </div>
    );
  }
}
