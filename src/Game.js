

import React from "react";

export default function Game({ cards, deckId, addToGame }) {
  return (
    <div> 
     <p> Deck ID: {deckId}</p>
      {cards.map((card)=>(
        <img src={card.image} alt={`${card.suit} ${card.value}`} key={card.code}/>
      ))}
      <br/>
      <button type="submit" onClick={addToGame}>Hit Me!</button>
    </div>
  );
}