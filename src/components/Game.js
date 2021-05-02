import React, { Component } from 'react'

export default class Game extends Component {
    componentDidMount(){
    }
   
    render() {
        // console.log(this.props)
        // const {deckId, cards} = this.props
        // console.log(this.props.props.cards)
        const cardList = this.props.props.cards.map(card =>{
            {console.log(card)}
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
