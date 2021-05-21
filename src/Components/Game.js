import React from 'react';

const Game = ({ cards, deckId, drawCard }) => {
    return (
        <section>
            <h4>Deck ID: {deckId}</h4>
            {cards.map(card => {
                return <img src={card.image} alt={card.code} key={card.code} />
            })}
            <br />
            <button onClick={drawCard}>Hit Me!</button>
        </section>
    )
}

export default Game;


