import React from "react";

const Menu = ({generateDeck, fetch2CardsByDeckId, handleChange}) => {

  
    return (
      <div>
        <section>
          <button onClick={generateDeck}>Generate Deck</button>
        </section>
        <form onSubmit={fetch2CardsByDeckId}>
          <label htmlFor="cardIdInput">Input Existing Deck</label>
          <input onChange={handleChange} id="cardIdInput" />
          <button>Draw</button>
        </form>
      </div>
    );
  }

export default Menu;
