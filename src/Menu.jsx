import React from 'react'

const Menu = ({ handleGenerateDeck, handleDeckIdChange, deckId, handleDraw }) => {
  return (
    <div>
      <button onClick={handleGenerateDeck}>Generate Deck</button>
      <label htmlFor="deckIdField">Input Existing Deck</label>
      <input id="deckIdField" value={deckId} onChange={handleDeckIdChange} />
      <button onClick={handleDraw}>Draw</button>
    </div>
  )
}

export default Menu
