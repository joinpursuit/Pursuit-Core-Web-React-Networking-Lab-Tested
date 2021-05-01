import React from "react";

const Game = ({drawCards, cards, deckID}) => {
  return ( 
  <form >
  <label htmlFor="card">Input Existing CardDeck</label>
  <input name="card" id="card" value={deckID} onChange={drawCards}/>
  <button>Draw</button>
  <img src={cards} alt="cardPics"/>
</form>
  )
}
export default Game;
