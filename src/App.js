import React, { useState } from "react";
import Menu from "./Menu";
import Game from "./Game";
import axios from "axios";
import "./App.css";

const App = () => {
  const [deckID, setDeckID] = useState("");
  const [cardArray, setCardArray] = useState([]);
  const [cardsRemaining, setCardsRemaining] = useState(52);

  const getNewDeck = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw?count=2`
      );

      setDeckID(res.data.deck_id);
      setCardArray(res.data.cards);
      setCardsRemaining(res.data.remaining);
    } catch (err) {
      setDeckID([]);
    }
  };

  const hitMe = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=1`
      );

      setCardArray([...cardArray, res.data.cards[0]]);
      setCardsRemaining(res.data.remaining);
    } catch (err) {
      setDeckID([]);
    }
  };

  const draw = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=2`
      );

      setCardArray(res.data.cards);
      setCardsRemaining(res.data.remaining);
    } catch (err) {
      setDeckID([]);
    }
  };

  const changeID = (e) => {
    setDeckID(e.target.value);
  };

  return (
    <div className="app">
      <Menu
        getNewDeck={getNewDeck}
        hitMe={hitMe}
        changeID={changeID}
        deckID={deckID}
        draw={draw}
      />
      <Game
        cardArray={cardArray}
        deckID={deckID}
        hitMe={hitMe}
        cardsRemaining={cardsRemaining}
      />
    </div>
  );
};

export default App;
