import React from "react";

const Game = ({ deckID, cards }) => {


  
  return (
    <section>
      <p>Deck ID: {deckID}</p>
      {cards.map((card) => {
        return <img src={card.image} />;
      })}
      <button>Hit me!</button>
    </section>
  );
};

export default Game;
