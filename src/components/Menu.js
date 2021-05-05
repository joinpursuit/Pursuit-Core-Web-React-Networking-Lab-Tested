import React from 'react';

export default function Menu({props, generateDeck, handleChange, handleSubmit}) {
    const { deckId } = props
    // console.log(deckId)
    return (
        <div>
            <h1>Blackjack!</h1>
            <button onClick={generateDeck}>Generate Deck</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Input Existing Deck
                    <input type="text" value={deckId} onChange={handleChange}/>
                </label>
                <button>Draw</button>
            </form>
        </div>
    )
}
