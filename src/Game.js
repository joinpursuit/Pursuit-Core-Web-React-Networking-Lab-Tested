import React from "react";

const Game = ({deckId, cards, hitMe}) => {
  return (
    <div>
      <h1>Deck ID: {deckId}</h1>
      {cards.map(card => {
        return <img src={card.image} alt="card" />;
      })}
      <section>
        <button onClick={hitMe}>Hit Me!</button>
      </section>
    </div>
  )
};

export default Game;
