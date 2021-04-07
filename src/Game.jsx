const Game = ({ cards, handleHitMe }) => {
  let getCardValue = (value) => {
    let values = { 'KING': 10, 'QUEEN': 10, 'JACK': 10 }
    return values[value] || parseInt(value)
  }

  let score = cards.reduce((total, card) => total + getCardValue(card.value), 0)
  let message = null
  if (score === 21) {
    message = "Blackjack!"
  } else if (score > 21) {
    message = "Busted..."
  }

  return (
    <div>
      {cards.map(card => <img src={card.image} alt={`${card.value} of ${card.suit} card`} />)}
      <button onClick={handleHitMe}>Hit Me!</button>
      <p>{message}</p>
    </div>
  )
}

export default Game
