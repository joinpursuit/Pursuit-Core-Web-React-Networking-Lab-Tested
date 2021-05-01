import React from "react";
const Menu = ({ generateDeck, cards, deckId }) => {
    
    return (
      <section>
        <h1>Blackjack</h1>
        <button onClick={generateDeck} value={deckId}>
          Generate Deck
        </button>
        <label>
          Input Existing Deck
          <input />
        </label>
        <button>Draw {cards}</button>
      </section>
    );
  
}

export default Menu;
