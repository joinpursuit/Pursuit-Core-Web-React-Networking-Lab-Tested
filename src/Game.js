import React, { Component } from "react";

export class Game extends Component {
  render() {
    const { draw, deckId, cards } = this.props;
    const img = cards.map((card, i) => {
      return <img key={i} src={card.image} alt="card-image" />;
    });
    return (
      <div>
        <p>Deck ID: {deckId}</p>
        {img}
        <br />
        <button onClick={draw}>Hit Me!</button>
      </div>
    );
  }
}

export default Game;
