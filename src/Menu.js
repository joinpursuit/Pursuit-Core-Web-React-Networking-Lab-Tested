import React from "react";

const Menu = ({ deckId, handleChange, generateDeck, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={generateDeck}>Generate Deck</button>
      <label htmlFor="my-deck-id">Input Existing Deck</label>
      <input id="my-deck-id" type="text" value={deckId} onChange={handleChange}/>
      <button>Draw</button>
    </form>
  );
};

export default Menu;