import React from "react";
import axios from "axios";

class Menu extends React.Component {
  state = { input: "" };

  // generateDeck = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://deckofcardsapi.com/api/deck/new/draw?count=2"
  //     );
  //     this.setState({ deckId: res.data.deck_id });
  //     console.log(res.data.deck_id)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useDeck = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw?count=2`
  //     );
  //     debugger;
    
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.useDeck(e);

  };

  handleInput = (e) => {
    // const (name,value) = e.target
    // this.setState({input: e.target.value})
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
