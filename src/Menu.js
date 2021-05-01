import React from "react";

const Menu = (props) => {
  const {drawCards, existingDeck, updateInput} = props
  

  return(
    <div>
      <h1>Blackjack</h1>
      <button onClick={drawCards}>Generate Deck</button><br></br>
      <form onSubmit={existingDeck}>
      <label htmlFor="deckID">
        Input Existing Deck
      </label>
      <input onChange={updateInput} name="deckID"/>
      <button>Draw</button>
      </form>
    </div>
  )
};

export default Menu;
