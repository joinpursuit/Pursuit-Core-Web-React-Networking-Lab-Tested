import React, { Component } from "react";

export class Menu extends Component {
  render() {
    const { inputDraw, getDeck, handleChange, input } = this.props;
    return (
      <div>
        <br />
        <br />
        <button onClick={getDeck}>Generate Deck</button>
        <br />
        <label>Input Existing Deck</label>
        <input onChange={handleChange} value={input} type="text" />
        <button onClick={inputDraw}>Draw</button>
      </div>
    );
  }
}

export default Menu;
