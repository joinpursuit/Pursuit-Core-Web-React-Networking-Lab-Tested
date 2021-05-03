import React from "react";

class Menu extends React.Component {

  render() {
    return (
      <div>
        <section>
          <button onClick={this.props.generateDeck}>Generate Deck</button>
        </section>
        <form onSubmit={this.props.fetch2CardsByDeckId}>
          <label htmlFor="cardIdInput">Input Existing Deck</label>
          <input onChange={this.props.handleChange} id="cardIdInput" />
          <button>Draw</button>
        </form>
      </div>
    );
  }
}

export default Menu;
