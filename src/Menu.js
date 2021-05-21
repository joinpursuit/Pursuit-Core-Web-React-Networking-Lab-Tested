import React from "react";

const Menu = ({ getDeck, drawCard, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={getDeck}>Generate Deck</button>
      <br></br>
      <label htmlFor="input">Input Existing Deck</label>
      <input id="input" onChange={handleChange} />
      <button type="submit" onClick={drawCard}>
        Draw
      </button>
    </form>
  );
};

export default Menu;
