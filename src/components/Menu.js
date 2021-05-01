import React from 'react';
import axios from "axios";

export default function Menu({props,generateDeck}) {
    const {deckID ,cards} = props
    // const generateDeck = this.props
    console.log(deckID)
    return (
        <div>
            <h1>Blackjack!</h1>
            <button onClick={generateDeck}>Generate Deck</button>
            <form>
                <label>
                    Input Existing Deck
                    <input />
                </label>
                <button>Draw</button>
            </form>
        </div>
    )
}
