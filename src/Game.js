import React from "react";

const Game = ({ drawCards, cards }) => {
  return (
    <section>
      <button onClick={drawCards}> Hit Me!</button>
      {/* {cards.map((card) => {
        const { image } = card;
        return <img src={image} alt="cardPics" />;
      })} */}
    </section>
  );
};
export default Game;
