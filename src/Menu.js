import React from "react";

class Menu extends React.Component {
  state = { input: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.useDeck(e);
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    console.log(e.target.value);
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <button onClick={this.props.generateDeck}>Generate Deck</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="existing-deck">
            Input Existing Deck
            <input
              type="text"
              onChange={this.handleInput}
              value={input}
              name="input"
            />
          </label>
          <button type="submit">Draw</button>
        </form>
      </div>
    );
  }
}

export default Menu;
