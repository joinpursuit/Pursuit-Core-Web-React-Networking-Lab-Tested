import React from "react";

const Game = ({deckID, hitMe, cardArray}) => {
 

  
  return(
    <div className="my-deck-id">
      Deck ID: {deckID}
{cardArray.map((card) => {
  return  <img alt="2" src={card.image}/>
  
})}
    <button onClick={hitMe}>Hit Me!</button>
    </div>
  )
};

export default Game;