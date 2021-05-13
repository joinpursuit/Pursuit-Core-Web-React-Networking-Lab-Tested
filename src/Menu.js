import React from "react";
import axios from 'axios'
import "./App.css"

class Menu extends React.Component {
 

  render() {
    const {generateDeck, handleChange, handleSubmit, showMenu} = this.props
    return (
      <div className = {showMenu ? 'show' : 'hide'}>
    
        <button onClick = {generateDeck}>Generate Deck</button>
        <form onSubmit={handleSubmit}>
          <label>
            Input Existing Deck
            <input type="text" id="my-deck-id" onChange={handleChange}/>
          </label>
            <button>Draw</button>
        </form>
      </div>
    );
  }
}
export default Menu;