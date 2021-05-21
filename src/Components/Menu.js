import React from 'react';

const Menu = ({ getCards, handleSubmit, deckId, handleChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <button onClick={getCards}>Generate Deck</button>

            <label htmlFor='my-deck-id'>Input Existing Deck</label>
            <br />
            <input onChange={handleChange} type='text' value={deckId} id='my-deck-id' />
            <button>Draw</button>
        </form>
    )
}

export default Menu;


