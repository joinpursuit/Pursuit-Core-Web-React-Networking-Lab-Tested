import React from "react";

class Menu extends React.Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { generateDeck, drawCard } = this.props;
    const { input } = this.state;

    return (
      <div>
        <button onClick={generateDeck}>Generate Deck</button>
        <br />
          <label htmlFor="deckInput">Input Existing Deck</label>
          <input onChange={this.handleChange} value={input} name="deckInput" />
          <button onClick={() => drawCard(input)}>Draw</button>
      </div>
    );
  }
}

export default Menu;
