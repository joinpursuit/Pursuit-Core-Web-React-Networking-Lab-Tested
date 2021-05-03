import React from "react";

const Menu = ({deckID,handleInput,generateTwoCards,generateDeck}) => {
  // const {deckID} = props
  // console.log(deckID)
  return (
    <div>
      <button onClick={generateDeck}>Generate Deck</button>
      <label>Input Existing Deck</label>
      <input type="text" id="my-deck-id" value={deckID} onChange={handleInput} placeholder="type here..."></input>
      <button onClick={generateTwoCards}>Draw</button>
    </div>
  )
};

export default Menu;
