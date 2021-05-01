import React from "react";

const Menu = ({getDeck}) => {


const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={getDeck}>Generate Deck</button>
      <br></br>
      <label htmlFor="input">Input Existing Deck</label>
      <input id="input"/>
      <button>Draw</button>
    </form>
  );
};

export default Menu;
