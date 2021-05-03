import React from "react";

const Game = ({deckId, cards, hitMe}) => {
  // const {deckId, cards} = this.props
  return (
    <div>
      <h1>Deck ID: {deckId}</h1>
      {cards.map(card => {
        return <img src={card.image} />;
      })}
      <section>
        {/* {cards.map(card => {
          return <img src={card.image} />
        })} */}
        <button onClick={hitMe}>Hit Me!</button>
      </section>
    </div>
  )
};

export default Game;
