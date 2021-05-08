import { Component } from "react";

class Menu extends Component {
  render() {
    const { getNewDeck, changeID, draw} = this.props;
    return (
      <div className="my-deck-id">
        <h2>Blackjack</h2>
        <button onClick={getNewDeck}>Generate Deck</button>
        <form>
          <label>
            Input Existing Deck
            
            <input onChange={changeID}/>
          </label>
          <button onClick={draw}>Draw</button>
        </form>
      </div>
    );
  }
}

export default Menu;
