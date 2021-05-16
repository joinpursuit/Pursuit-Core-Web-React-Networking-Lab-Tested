// import React from "react";

// const Game = ({ drawTwoCards, deckId, cards }) => {


//   // onClick two card images are saved into state as an array and displayed in an image tag
//   return (
//     <section>
//       <p>{`Deck ID: ${deckId}`}</p>
//       <button onClick={drawTwoCards} value={deckId}>Hit Me!</button>
//       <img src={cards[0]} alt=""/>
//       <img src={cards[1]} alt=""/>
//     </section>
//   );
// };

// export default Game;



// pass cards an array of objects as a prop
// to map through it and render img tags and key values
// setting state to: cards: res.data.cards in App.js

import React from "react";

const Game = ({ drawTwoCards, deckId, cards }) => {
  return (
    <section>
      <p>{`Deck ID: ${deckId}`}</p>
      <button onClick={drawTwoCards} value={deckId}>
        Hit Me!
      </button>
      {cards.map((card) => {
        // console.log(card);
        const { code, image } = card;
        return <img src={image} key={code} alt=""/>;
      })}
    </section>
  );
};

export default Game;

