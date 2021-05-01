import React from "react";

const Game = ({deckID, cards}) => {


  return (
    <div>
      <p>Deck ID: {deckID}</p>
      {cards.map(card=>{
        return  <img src = {card.image} />
      })}
      <button>Hit Me!</button>
    </div>
  )
};

export default Game;
