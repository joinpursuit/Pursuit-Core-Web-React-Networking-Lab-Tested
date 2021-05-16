import React from "react";
const Menu = ({ generateDeck, deckId, handleChange, cards }) => {
  return (
    <section>
      <h1>Blackjack</h1>
      {cards.length === 2 ? (
        <></>
      ) : (
        <>
          <button onClick={generateDeck} value={deckId}>
            Generate Deck
          </button>
          <form>
            <label>
              Input Existing Deck
              <input value="" onChange={handleChange} />
            </label>
            <button>Draw</button>
            {/* <button>Draw {cards}</button> */}
          </form>
        </>
      )}
    </section>
  );
};

export default Menu;
