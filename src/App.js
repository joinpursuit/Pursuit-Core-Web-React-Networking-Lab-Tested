import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  state = { deckID: "", cardArray: [] };

  getNewDeck = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw?count=2`);
      console.log("hi");
      this.setState({ deckID: res.data.deck_id });
      // debugger
    } catch (err) {
      this.setState({ deckID: [] });
    }
  };

  hitMe = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`
      );
     
        this.setState({cardArray: res.data.cards})
      //  debugger

      
    } catch (err) {
      this.setState({ deckID: [] });
    }
  };

  componentDidMount() {
    // this.getNewDeck()
  };

  render() {
    const { deckID,cardArray } = this.state;
    return (
      <div className="app">
        <Menu getNewDeck={this.getNewDeck} hitMe={this.hitMe} />
        <Game cardArray={cardArray} deckID={deckID} hitMe={this.hitMe} />
      </div>
    );
  }
}
