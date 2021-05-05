import React, { Component } from 'react'

export default class Game extends Component {

    render() {
        const cardList = this.props.cards.map(card =>{
            return( <li key={card.code}>
                <img src={card.image}/> 
                </li>)
        })
        return (
            <div>
                 Deck ID: {this.props.deckId}
                <h1>Cards</h1>
                <ul id="my-deck-id">{cardList}</ul>
                <button onClick={this.props.addCard}>Hit Me!</button>
            </div>
        )
    }
}
