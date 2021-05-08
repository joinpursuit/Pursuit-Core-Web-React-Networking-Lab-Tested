import React from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  state = { deckID: "", cardArray: [], cardsRemaining: 52 };
  // const [deckID,setDeckID] = useState("")

  getNewDeck = async (e) => {
    // const { deckID } = this.state;
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw?count=2`
      );
      // debugger;
      this.setState({
        deckID: res.data.deck_id,
        cardArray: res.data.cards,
        cardsRemaining: res.data.remaining,
      });

      // debugger
    } catch (err) {
      this.setState({ deckID: [] });
    }
  };

  componentDidUpdate() {
    // debugger
  }
  hitMe = async (e) => {
    const { deckID } = this.state;
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=1`
      );
      // debugger
      this.setState((prevState) => {
        return {
          cardArray: [...prevState.cardArray, res.data.cards[0]],
          // cardArray: res.data.cards,
          cardsRemaining: res.data.remaining,
        };
      });
    } catch (err) {
      this.setState({ deckID: [] });
    }
  };

  draw = async (e) => {
    const { deckID } = this.state;
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=2`
      );
      // debugger
      this.setState((prevState) => {
        return {
          cardArray: res.data.cards,
          // cardArray: res.data.cards,
          cardsRemaining: res.data.remaining,
        };
      });
    } catch (err) {
      this.setState({ deckID: [] });
    }
  };

  changeID = (e) => {
    this.setState({ deckID: e.target.value });
  };

  componentDidMount() {
    // this.getNewDeck()
  }

  render() {
    const { deckID, cardArray, cardsRemaining } = this.state;
    return (
      <div className="app">
        <Menu
          getNewDeck={this.getNewDeck}
          hitMe={this.hitMe}
          changeID={this.changeID}
          deckID={deckID}
          draw={this.draw}
        />
        <Game
          cardArray={cardArray}
          deckID={deckID}
          hitMe={this.hitMe}
          cardsRemaining={cardsRemaining}
        />
      </div>
    );
  }
}
 
export default App