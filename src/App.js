import React from "react";
import Game from './Components/Game';
import Menu from './Components/Menu';
import axios from 'axios';
import "./App.css";



export default class App extends React.Component {
  state = {
    deckId: '',
    cards: [],
  }

  getCards = async () => {
    try {
      const { data } = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/draw?count=2'
      );

      this.setState({
        deckId: data.deck_id,
        cards: data.cards
      })

    } catch (error) {
      this.setState({
        deckId: '',
        cards: []
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      deckId: e.target.value
    })
  }

  drawCard = async () => {
    const { deckId } = this.state
    try {
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`
      )
      this.setState({
        cards: [...this.state.cards, ...data.cards]
      })
    } catch (error) {
      this.setState({
        cards: [...this.state.cards]
      })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { deckId } = this.state
    try {
      const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
      )
      this.setState({
        cards: data.cards
      })
    } catch (error) {
      this.setState({
        cards: []
      })
    }
  }


  render() {
    const { cards, deckId } = this.state
    return (
      <div className="app">
        <h1>Blackjack</h1>

        <Menu
          getCards={this.getCards}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deckId={deckId} />

        {deckId && <Game
          cards={cards}
          deckId={deckId}
          drawCard={this.drawCard} />
        }



      </div>
    );
  }
}


