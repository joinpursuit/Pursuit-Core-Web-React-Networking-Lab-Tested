import React from "react";
import axios from 'axios';
import "./App.css";
import Menu from './Menu';
import Game from './Game';

// Shuffle the cards with one deck: https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// Draw a card: https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2


export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      deckId: '',
      cards: [],
      showCards: false
    }
  }


  generateNewDeck = async () => {   // this should generate a new deck, shuffled by the API
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
    const newId = response.data.deck_id
    const cards = response.data.cards.map((card) => {
      return card.image
    })
    
    this.setState({
      deckId: newId,
      cards: cards,
      showCards: true
    })
  }

  handleSubmit = async (e) => {    // this should generate a new deck, with the current deck id in our input field
    e.preventDefault()
    const deckId = this.state.deckId
    const cardArr = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(response => response.data.cards)
    const cards = cardArr.map((card) => card.image)

    this.setState({
      cards,
      showCards: true
    })
  }

  handleChange = (e) => {
    const {value} = e.target

    this.setState({
      deckId: value
    })
  }
  
  handleHitMe = async (e) => {
    const deckId = this.state.deckId
    const cards = this.state.cards

    const newCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.data.cards[0].image)

    this.setState({
      cards: [...cards, newCard]
    })
  }


  render() {
    const {deckId, cards, showCards} = this.state

    if (showCards === true) {
      return (
        <div className="app">
        <h1>Blackjack</h1>
        <Game cards={cards} deckId={deckId} handleHitMe={this.handleHitMe} />
      </div>
      )
    }
    else {
    return (
      <div className="app">
        <h1>Blackjack</h1>
        <Menu generateNewDeck={this.generateNewDeck} handleChange={this.handleChange} handleSubmit={this.handleSubmit} deckId={deckId} />
      </div>
    );
    }
  }
}



// THIS IS A DISPLAY FOR EVERY COMPONENT:
/* <div className="app">
<h1>Blackjack</h1>
<Menu generateNewDeck={this.generateNewDeck} handleChange={this.handleChange} handleSubmit={this.handleSubmit} deckId={deckId} />
<Game cards={cards} deckId={deckId} handleHitMe={this.handleHitMe} />
</div> */