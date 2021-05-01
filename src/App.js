import { Component } from "react";
import Game from "./Game";
import Menu from "./Menu";

import "./App.css";
import axios from "axios";

export default class App extends Component {
  state = { deckID: "", existingID: "", updatedInput: "", cardArray: [], newDeckID: false };
  
  drawCards = async () => {
     if(this.state.deckID === "") {
       try {
         const res = await axios.get(
           "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
         );
         debugger;
         this.setState({ deckID: res.data.deck_id });
         this.setState({cardArray: res.data.cards})
         // console.log(`DECK ID: ${this.state.deckID}`);
         // console.log(`CARD Array: ${this.state.cardArray}`);
          this.GenerateTwoCards();
        } catch (error) {
          console.log(error);
        }
      } else if(this.state.deckID.length > 0) {
       try {
         const res = await axios.get(
           `https:deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`
         );
   
         // https://deckofcardsapi.com/api/deck/new/draw/?count=52
         // console.log(`RES: ${res}`);
         debugger;
         this.setState({ deckID: res.data.deck_id });
         this.setState({cardArray: res.data.cards})
         this.setState({ deckID: "" })
         // console.log(`DECK ID: ${this.state.deckID}`);
         // console.log(`CARD Array: ${this.state.cardArray}`);
          this.GenerateTwoCards();
        } catch (error) {
          console.log(error);
        }

     }
    }
    
    GenerateTwoCards = async () => {
      this.setState({newDeckID:true})
    }
    
    showDeck = async () => {};
    
    updateInput = (e) => {
      this.setState({ deckID: e.target.value });
    };
    
    existingDeck =  (e) => {
      e.preventDefault();
      this.drawCards();
    }
    
    
    render() {
      console.log(`STATE: ${this.state}`);
      return (
        <div className="app">
        {/* <h1>Hello, world!</h1> */}
        <Menu drawCards={this.drawCards} existingDeck={this.existingDeck} updateInput={this.updateInput}/>
        <Game deckID={this.state.deckID} cardArray={this.state.cardArray} />
      </div>
    );
  }
};

