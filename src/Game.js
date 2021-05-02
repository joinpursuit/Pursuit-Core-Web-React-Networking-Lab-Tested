import React from "react";

const Game = ({deckID, cards, handleClick}) => {


  return (
    <div>
      <p>Deck ID: {deckID}</p>
      {cards.map(card=>{
        return  <img src = {card.image} key={card.image}/>
      })}
      <button onClick = {handleClick}>Hit Me!</button>
    </div>
  )
};

export default Game;
