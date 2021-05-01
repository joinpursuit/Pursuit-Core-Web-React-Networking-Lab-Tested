import React from "react";
const Menu = ({ generateDeck, cards, deckId }) => {
 

  // drawCards = async (deckId) => {
  //   try {
  //     const res = await axios.get(
  //       `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
  //     );
  //     console.log(res.data)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


    
    return (
      <section>
        <h1>Blackjack</h1>
        <button onClick={generateDeck} value={deckId}>
          {/* {console.log(this.props)} */}
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
