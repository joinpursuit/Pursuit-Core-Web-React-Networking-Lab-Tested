import React from "react";
import Menu from "./Menu.js"
import axios from "axios"

import "./App.css";

export default class App extends React.Component {
  state = {
    deckID:"",
    cards:[]
  }

getDeck = async() =>{
try{
const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
this.setState({deckID:deck.data.deck_id})
debugger
}
catch(error){
  console.log(error);
}
}

drawCard = async() =>{
  
}



  render() {
    const {deckID, cards} = this.state
    return (
      <div className="app">
        <h1>Blackjack</h1>
        <Menu getDeck={this.getDeck}/>
        <p>Deck ID: {deckID}</p>
      </div>
    );
  }
}
