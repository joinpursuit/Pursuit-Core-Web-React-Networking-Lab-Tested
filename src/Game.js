import React from "react";

const Game = ({ deckId, hitMe, cards }) => {
  return (
    <div className="my-deck-id">
      <h1>Deck ID: {deckId} </h1>
      {cards.map((card) => {
        return <img src={card.image} alt="card" />;
      })}
      <button onClick={hitMe}>Hit Me!</button>
    </div>
  );
};

export default Game;
