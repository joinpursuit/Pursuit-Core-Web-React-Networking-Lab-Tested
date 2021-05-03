import React from "react";

const Game = ({deckID,userHand,generateOneCard}) => {
  return (
    <div>
      <p>Deck ID:{deckID}</p>
      {userHand.map((e) => {return <img src={e.image}/>})}
      <button onClick={generateOneCard} >Hit Me!</button>
    </div>
  )
};

export default Game;
