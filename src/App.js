import React from "react";
import Game from "./Game";
import Menu from "./Menu";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { deckId: "", cards: [] };

  generateDeck = async () => {
    this.setState({ cards: [] });
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      this.setState({ deckId: res.data.deck_id });
    } catch (error) {
      console.log(error);
      this.setState({ deckId: " " });
    }
  };

  drawTwoCards = async () => {
    const { deckId } = this.state;
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
        // `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`
      );
      this.setState({
        cards: res.data.cards,
        // cards: [res.data.cards[0].image, res.data.cards[1].image],
      });

      // debugger;
    } catch (error) {
      console.log(error);
      this.setState({ cards: [] });
    }
  };

  handleChange = (e) => {
    this.setState({ deckId: e.target.value });
  };

  render() {
    const { deckId, cards } = this.state;
    return (
      <div className="app">
        <Menu
          generateDeck={this.generateDeck}
          handleChange={this.handleChange}
          deckId={deckId}
          cards={cards}
        />
        <Game drawTwoCards={this.drawTwoCards} deckId={deckId} cards={cards} />
        {/* <Game deckId={deckId} card={this.card} cards={cards}/> */}
      </div>
    );
  }
}

export default App;
