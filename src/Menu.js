import React from "react";

const Menu = ({ cardDeck, cards, deckId }) => {
  return (
    <div>
      <h1>Blackjack</h1>
      <button onClick={cardDeck}>Generate Deck</button>
      <p>Deck ID: {deckId}</p>
        {cards.map((card) => {
        const { image } = card;
        return <img src={image} alt="cardPics" />
      })}
      <label htmlFor="card">Input Existing CardDeck</label>
      <input name="card" id="card" onChange={cardDeck} value={deckId}/>
      <button onClick={cardDeck}>Draw</button>
    </div>
  );
};

export default Menu;
