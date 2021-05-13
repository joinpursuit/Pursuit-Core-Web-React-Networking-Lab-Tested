import React from "react";

const Game = ({ deckId, cards, hitMe }) => {

  return (
    <section>
      <p>Deck ID: {deckId}</p>
      {cards.map(card => {
        return <img src={card.image}/>
      })}
      <button onClick={hitMe}>Hit Me!</button>
    </section>
  );
};

export default Game;
