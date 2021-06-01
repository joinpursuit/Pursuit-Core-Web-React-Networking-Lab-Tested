import React from 'react'
import './HooksGame.css'

export default function HooksGame(props) {

    const cardImg = props.cards.map((card, i) => {
        return <img src={card.image} alt={card.code} key={i} />
    })

    return (
        <div className='HooksGame'>
            <p>Deck ID: {props.deckId}</p>
            <div className='CardsTable'>
                {cardImg}
            </div>
            <button onClick={props.addCard}>Hit Me!</button>
        </div>
    )
}
