import React from "react";

export class Menu extends React.Component {
  state = {};

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onDeckId(this.state.deckId);
  };

  render() {
    return (
      <div id="menu">
        <p>
          <button onClick={this.props.onNewDeck} type="button">
            Generate Deck
          </button>
        </p>
        <form onSubmit={this.onSubmit}>
          <label>Input Existing Deck </label>
          <input
            onChange={(event) => this.setState({ deckId: event.target.value })}
            name="deckId"
          />
          <button type="submit">Draw</button>
        </form>
      </div>
    );
  }
}
