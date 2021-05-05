import axios from "axios";
import React from "react";

import "./App.css";

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      deckId:"",
    }
  }
  componentDidMount(){
    this.getRandomDeck()
  }
  

  getRandomDeck = async () => {
    try{
      
      const {data} = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
     console.log(data.deck_id)
     this.setState({
       deckId: data.deck_id,
     })
    } catch (e) {
    console.log(e)
  }
} 
  

  render() {
   
    return (
      <div className="app">
        <h1> Blackjack</h1>
        <button onClick={this.getRandomDeck}>Generate Deck</button>
        <br></br>
        
        <label> Input Existing Deck:</label>
        <input type="text" />
        
        
        
        
      
      </div>
    );
  }
}
