import React from "react";

const Game = ({ hitMe, cards, deckId }) => {
  return (
    <section className="my-deck-id">
      <h1>Deck ID: {deckId}</h1>
      {cards.map((card) => {
        const { image } = card;
        return <img src={image} alt="Card" />;
      })}
      <button onClick={hitMe}>Hit Me!</button>
    </section>
  );
  
};
export default Game;
