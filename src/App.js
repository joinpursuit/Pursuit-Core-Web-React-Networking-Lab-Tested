import React, { useState } from "react";
import Menu from "./Menu.js";
import Game from "./Game.js";
import axios from "axios";
import "./App.css";

const App = () => {
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState([]);

  const generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      setDeckId(res.data.deck_id);
      setCards(res.data.cards)
    } catch (error) {
      setDeckId([]);
      console.log(error);
    }
  };

  const fetch2CardsByDeckId = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
      );
      setCards(res.data.cards);
    } catch (error) {
      setCards([]);
    }
  };

    const handleChange = (e) => {
    setDeckId(e.target.value);
  };

  const hitMe = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.get(
            `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`
          );
          const hitMeCardArr = res.data.cards;
          setCards((prevCards) => [...prevCards, ...hitMeCardArr]);
        } catch (error) {
          setCards([]);
        }
      };

  return (
    <div className="app">
      <h1>Blackjack</h1>
      {deckId && cards.length !== 0 ? (
        <Game hitMe={hitMe} deckId={deckId} cards={cards} />
      ) : (
        <Menu
          fetch2CardsByDeckId={fetch2CardsByDeckId}
          generateDeck={generateDeck}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default App;

// export default class App extends React.Component {
//   state = { deckId: "", cards: [] };

//   generateDeck = async () => {
//     try {
//       const res = await axios.get(
//         "https://deckofcardsapi.com/api/deck/new/draw?count=2"
//       );
//       console.log(res);
//       const cardsArr = res.data.cards;
//       const cardsId = res.data.deck_id;
//       this.setState({ deckId: cardsId, cards: cardsArr });
//     } catch (error) {
//       this.setState({ cards: [] });
//     }
//   };

//   fetch2CardsByDeckId = async (e) => {
//     e.preventDefault();
//     const { deckId } = this.state;
//     try {
//       const res = await axios.get(
//         `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
//       );
//       const cardsArr = res.data.cards;
//       this.setState({ cards: cardsArr });
//     } catch (error) {
//       this.setState({ cards: [] });
//     }
//   };

//   handleChange = (e) => {
//     this.setState({ deckId: e.target.value });
//   };

//   hitMe = async (e) => {
//     e.preventDefault();
//     const { deckId } = this.state;
//     try {
//       const res = await axios.get(
//         `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`
//       );
//       const hitMeCardArr = res.data.cards;
//       console.log(hitMeCardArr);
//       this.setState((prevState) => ({
//         cards: [...prevState.cards, ...hitMeCardArr],
//       }));
//     } catch (error) {
//       this.setState({ cards: [] });
//     }
//   };

//   render() {
//     const { deckId, cards } = this.state;
//     return (
//       <div className="app">
//         <h1>Blackjack</h1>
//         {deckId && cards.length !== 0 ? (
//           <Game hitMe={this.hitMe} deckId={deckId} cards={cards} />
//         ) : (
//           <Menu
//             fetch2CardsByDeckId={this.fetch2CardsByDeckId}
//             generateDeck={this.generateDeck}
//             handleChange={this.handleChange}
//           />
//         )}
//       </div>
//     );
//   }
// }
