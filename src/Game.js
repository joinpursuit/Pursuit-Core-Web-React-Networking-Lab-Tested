import React from "react";

const Game = ({ deckID, hitMe, cardArray, cardsRemaining }) => {

  return (
    <div className="my-deck-id">
      <p>Deck ID: {deckID}</p>
      <p>Cards Left: {cardsRemaining} </p> 
      <button onClick={hitMe}>Hit Me!</button>
      {cardArray.map((card) => {
        return <img src={card.image} key={card.image} alt={card.image} />;
      })}
    </div>
  );
};

export default Game;