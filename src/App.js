import React from "react";
import axios from "axios";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game"

class App extends React.Component {
  state = { deckID: "", cards: [] }
  generateDeck = async () => {
    try {
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw?count=2`)
    const newDeck = res.data.deck_id
    this.setState({deckID: newDeck})
    // const twoCards =   
    console.log(res.data.deck_id)
  }catch (err) {
      this.state({deckID:""})
    }
  }
  getCard = () => {

  }
  render() {
    if (this.state.deckID === "") {
      return (
        <div className="app">
          <Menu props={this.state} generateDeck={this.generateDeck}/>
        </div>
      );
    } else {
      console.log(this.state)
      return (
        <>
        <Game />
        </>
      )
    }
  }
}

export default App;