import React from "react";

const Game = ({ deckID, cards, hitMe }) => {

  return (
    <section>
      <p>Deck ID: {deckID}</p>
      {cards.map((card) => {
        return <img src={card.image} />;
      })}
      <button onClick={hitMe}>Hit Me!</button>
    </section>
  );
};

export default Game;
