import React from "react";

const Menu = ({cardDeck, deckID, cards}) => {
  return(
       <div>
        <h1>Blackjack</h1>
        <button onClick={cardDeck}>Generate Deck</button>
        <ul></ul>
        <p>Deck ID: {deckID}</p>
      </div>
    
  )
};

export default Menu;
