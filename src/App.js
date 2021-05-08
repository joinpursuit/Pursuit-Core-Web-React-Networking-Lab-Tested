import React, { useState } from "react";
import Game from "./Game";
import axios from "axios";
import MenuHooks from "./MenuHooks";

import "./App.css";

const App = () => {
  const [deckID, setDeckID] = useState("");
  const [cards, setCards] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

  const generateDeck = async () => {
    try {
      const res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw?count=2"
      );
      setDeckID(res.data.deck_id);
      setCards(res.data.cards);
      setShowMenu(false);
    } catch (error) {
      console.log(error);
      setDeckID("");
      setCards([]);
    }
  };

  const handleChange = (e) => {
    const myDeckID = e.target.value;
    setDeckID(myDeckID);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=2`
      );

      setCards(res.data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckID}/draw?count=1`
      );
      setCards((prevCards) => [...prevCards, ...res.data.cards]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h2>Blackjack</h2>
      <MenuHooks
        generateDeck={generateDeck}
        handleChange={handleChange}
        showMenu={showMenu}
        handleSubmit={handleSubmit}
      />
      <Game deckID={deckID} cards={cards} handleClick={handleClick} />
    </div>
  );
};

export default App;
