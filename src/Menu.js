import React from "react";

const Menu = (props) => {
  const { existingDeck, updateInput, GenerateTwoCards} = props
  

  return(
    <div>
      <h1>Blackjack</h1>
      <button onClick={GenerateTwoCards}>Generate Deck</button><br></br>
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
