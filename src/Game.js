import React from "react";
import CardImages from "./Components/CardImages";

class Game extends React.Component {
  render() {
    return (
      <div>
        Deck ID: {this.props.deckId}
        {this.props.cards.map((obj) => {
          return <CardImages url={obj.image} key={obj.image} />;
        })}
        <button onClick={this.props.addCard}>Hit Me!</button>
      </div>
    );
  }
}

export default Game;
