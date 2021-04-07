import React from 'react'

const Game = ({ cards, handleHitMe }) => {
  return (
    <div>
      {cards.map(card => <img src={card.image} alt={`${card.value} of ${card.suit} card`} />)}
      <button onClick={handleHitMe}>Hit Me!</button>
    </div>
  )
}

export default Game
