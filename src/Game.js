import React from "react";

// class Game extends React.Component {
//   render() {

const Game = ({ deckId }) => {
  return (
    <section>
      <h1>Blackjack</h1>
      <p>Deck ID: {deckId}</p>
      <button>Hit Me!</button>
    </section>
  );
};
// }

export default Game;
