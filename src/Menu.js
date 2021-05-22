import React from 'react'

const Menu = ({ fetchCards, deckID, handleChange, handleSubmit }) => {
	return (
		<form action='' onSubmit={handleSubmit}>
			<button onClick={fetchCards}>Generate Deck</button>
			<label htmlFor='my-deck-id'>Input Existing Deck</label>
			<input type='text' onChange={handleChange} value={deckID} id='my-deck-id' />
			<button>Draw</button>
		</form>
	)
}

export default Menu
