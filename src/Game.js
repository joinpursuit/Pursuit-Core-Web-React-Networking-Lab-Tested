import React from "react";

const Game = ({ deckId, card,cards }) => {

  return (
    <section>
      <h1>Blackjack</h1>
      <p>Deck ID: {deckId}</p>
      {card}
      <button onClick={card} value={cards}>Hit Me!</button>
    </section>
  );
};

export default Game;
