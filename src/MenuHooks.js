import React from "react";
import "./App.css";

const MenuHooks = (props) => {
  return (
    <div className={props.showMenu ? "show" : "hide"}>
      <button onClick={props.generateDeck}>Generate Deck</button>
      <form onSubmit={props.handleSubmit}>
        <label>
          Input Existing Deck
          <input type="text" id="my-deck-id" onChange={props.handleChange} />
        </label>
        <button>Draw</button>
      </form>
    </div>
  );
};

export default MenuHooks;
