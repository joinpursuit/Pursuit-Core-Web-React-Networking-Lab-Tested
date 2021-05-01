import { Component } from "react";

class Menu extends Component {
  render() {
    const { getNewDeck} = this.props;
    return (
      <div className="my-deck-id">
        <h2>Blackjack</h2>
        <button type="button" onClick={getNewDeck}>Generate Deck</button>
        <form>
          <label>
            Input Existing Deck
            
            <input />
          </label>
        </form>
      </div>
    );
  }
}

export default Menu;
