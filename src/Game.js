import React from "react";

const Game = (props) => {
  const { deckID, cardArray} = props
  
  return(
  <div>
    <h1>Deck ID: {deckID}</h1>
    {cardArray.map((card) => {
      return (
        <img src={card.image} key={card.code} alt="Card Pic"/>
      )
    })}
  </div>
  )
};

export default Game;
