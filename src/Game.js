import axios from "axios";
import React from "react";

class Game extends React.Component {
  
  // state= {urls: []}


  render() {
    const {deckId, cards, hitMe} = this.props;
    console.log(cards)

  
    const cardImg = cards.map(card =><img src={card.image} alt="card"/>)
    console.log(cardImg)
    return (
      <div>
        <h1>Blackjack</h1>
        <p>Deck ID: {deckId} </p>

        {cardImg}

        <br/>

        <button onClick={hitMe}>Hit Me!</button>

       
      </div>
    );
  }
}
export default Game;
