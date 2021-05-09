import React from "react";

class Menu extends React.Component {
  render() {
    const { generateDeck, drawCard, deckId, handleChange } = this.props;

    return (
      <form onSubmit={drawCard}>
        <button onClick={generateDeck}>Generate Deck</button>
        <label htmlFor="my-deck-id">Input Existing Deck</label>
        <input onChange={handleChange} value={deckId} id="my-deck-id" />
        <button>Draw</button>
      </form>
    );
  }
}

export default Menu;
