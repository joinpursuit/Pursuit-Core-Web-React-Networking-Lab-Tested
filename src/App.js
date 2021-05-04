import React from "react";
import axios from 'axios';
import "./App.css";
import Menu from './Menu';

// Shuffle the cards with one deck: https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// Draw a card: https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2


export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      deckId: '',
      cards: []
    }
  }


  generateNewDeck = async () => {   // this should generate a new deck with input, shuffled by the API
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deckId = response.data.deck_id

    console.log(deckId)
  }
  handleSubmit = (e) => {    // this should generate a new deck, with the current deck id in our input field
    e.preventDefault()

  }
  handleChange = (e) => {
    const {value} = e.target

    this.setState({
      deckId: value
    })
  }
  


  render() {
    const {deckId, cards} = this.state

    return (
      <div className="app">
        <h1>Blackjack</h1>
        <Menu generateNewDeck={this.generateNewDeck} handleChange={this.handleChange} handleSubmit={this.handleSubmit} deckId={deckId} />
      </div>
    );
  }

}
