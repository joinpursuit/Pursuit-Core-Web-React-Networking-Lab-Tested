import React from 'react'

const Game = ({ cards, deckID, drawOne }) => {
	return (
		<div>
			<h4>Deck ID: {deckID}</h4>
			{cards.map(card => {
				return <img src={card.image} alt='' key={card.code} />
			})}
			<button onClick={drawOne}>Hit Me!</button>
		</div>
	)
}

export default Game
