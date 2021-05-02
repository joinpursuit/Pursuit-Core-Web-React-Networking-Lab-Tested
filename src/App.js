import React from "react";
import axios from "axios";
import "./App.css";
import Menu from "./components/Menu";
import Game from "./components/Game";

class App extends React.Component {
  state = { deckId: "", cards: "" };

  generateDeck = async () => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw?count=2`
      );
      const newDeck = res.data.deck_id;
      const twoCards = res.data.cards;
      this.setState({ deckId: newDeck, cards: twoCards });
      // console.log(twoCards)
    } catch (err) {
      this.setState({ deckId: "" });
    }
  };

  handleChange = (e) => {
    this.setState({deckId: e.target.value})

  } 

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=2`
        );
        // console.log(res)
        const newDeck = res.data.deck_id;
        const twoCards = res.data.cards;
        this.setState({deckId: newDeck, cards: twoCards });
      }catch (err) {
        this.setState({ deckId: "" });
      }
      // console.log(this.state)  
  }
  addCard = async (e) => {
    e.preventDefault()
    // console.log(this.state.deckId)
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw?count=1`
        );
        console.log(res)
        const singleCard = res.data.cards[0];
        this.setState((prevState) => ({
          cards: [...prevState.cards, singleCard],
        }));
        // this.setState({ cards: singleCard });
      }catch (err) {
        this.setState({ cards: "" });

      }
  }

  render() {
    if (this.state.cards === "") {
      return (
        <div className="app">
          <Menu props={this.state} generateDeck={this.generateDeck} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      // console.log(this.state);
      return (
        <>
          <Game deckId={this.state.deckId} props={this.state} addCard={this.addCard} />
        </>
      );
    }
  }
}

export default App;
// xarx4hic68m7