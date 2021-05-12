import React from "react";

const Game = ({ deckId, cards, hitMe }) => {
  return (
    <div >
      <p>Deck ID: {deckId}</p>
      {cards.map((card,index) => {
        return <img src={card.image} alt="card" key={index}/>
      })}
      <button onClick={hitMe}>Hit Me!</button>
    </div>
  );
};

export default Game;
