import React from 'react';
import axios from "axios";

export default function Menu({props, generateDeck, handleChange, handleSubmit}) {
    const {deckID, cards} = props
    // console.log(deckID)
    return (
        <div>
            <h1>Blackjack!</h1>
            <button onClick={generateDeck}>Generate Deck</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Input Existing Deck
                    <input type="text" value={deckID} onChange={handleChange}/>
                </label>
                <button>Draw</button>
            </form>
        </div>
    )
}
