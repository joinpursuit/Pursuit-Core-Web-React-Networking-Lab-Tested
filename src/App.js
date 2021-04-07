import React from "react";
import axios from 'axios';

import "./App.css";
import Menu from "./Menu";
import Game from "./Game";
const API = 'https://deckofcardsapi.com/api/deck'

/*
Should the button to generate a deck fetch a new deck and take <Menu/> away and display <Game/>? 
I think that when generating a new deck the "Existing deck id" field should fill up, instead of having to display the deck id in a separate <p>
Not clear that <Game/> should not show when no state. Found out in when ran npm test
For some reason I thought cypress would compile and run the app for me, but I guess not. I have to have it running on another terminal.
The "creating new deck" test intercepts https://deckofcardsapi.com/api/deck/new/draw?count=2. Which creates a new deck at the same time it draws two cards. Fellows  might (and I did) implement this in two separate requests one to generate the deck and one to draw 2 cards then the call cypress expects is never intercepted.
Similar past assignment: https://github.com/joinpursuit/21-web-game
*/

class App extends React.Component {
  state = {
    deckId: '',
    cards: []
  }

  handleDeckIdChange = (e) => {
    this.setState({ deckId: e.target.value })
  }

  handleHitMe = async () => {
    try {
      const { data } = await axios.get(`${API}/${this.state.deckId}/draw?count=1`)
      this.setState(prevState => ({ cards: [...prevState.cards, data.cards[0]] }))
    } catch {
      alert('Something went wrong 😢')
    }
  }

  handleDraw = async () => {
    try {
      const { data: cardsRes } = await axios.get(`${API}/${this.state.deckId}/draw?count=2`)
      this.setState({ cards: cardsRes.cards })
    } catch {
      alert('Something went wrong 😢')
    }
  }

  handleGenerateDeck = async () => {
    try {
      const { data: { deck_id, cards } } = await axios.get(`${API}/new/draw?count=2`)
      this.setState({ deckId: deck_id, cards })
    } catch {
      alert('Something went wrong 😢')
    }
  }

  render() {
    const { deckId, cards } = this.state
    return (
      <div className="app">
        <h1>Blackjack</h1>
        <p>Deck ID: {deckId}</p>
        { !cards.length ?
          <Menu
            handleDeckIdChange={this.handleDeckIdChange}
            handleGenerateDeck={this.handleGenerateDeck}
            handleDraw={this.handleDraw}
            deckId={this.state.deckId}
          />
          : <Game cards={this.state.cards} handleHitMe={this.handleHitMe} />}
      </div>
    );
  }
}

export default App
