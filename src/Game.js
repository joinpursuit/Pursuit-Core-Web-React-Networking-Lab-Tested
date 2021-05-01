import React from "react";

const Game = ({ deckId, cards }) => {
  return (
    <div>
      <p>Deck Id: {deckId}</p>
      {cards.map((card) => {
        return <img src={card} alt="card"/>
      })}
      <button>Hit Me!</button>
    </div>
  );
};

export default Game;
