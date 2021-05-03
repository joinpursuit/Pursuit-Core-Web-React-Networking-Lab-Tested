import React from "react";

export default function Game({ game, deckID, addToGame }) {
  return (
    <div>
      <p>Deck ID: {deckID}</p>
      {game.map((card)=>(
        <img src={card.image} alt={`${card.suit} ${card.value}`} key={card.code}/>
      ))}
      <button type="submit" onClick={addToGame}>Hit Me!</button>
    </div>
  );
}
