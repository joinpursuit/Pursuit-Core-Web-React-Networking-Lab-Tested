import React, { Component } from 'react'

export default class Game extends Component {

  render() {

    const {deckId, cards, handleHitMe} = this.props
    const displayCards = cards.map((card) => {
      return <img src={card} alt="Playing Card" />
    })

    return (
      <div>
        <p>Deck ID: {deckId}</p>
        <div className='cardTable'>
          {displayCards}
        </div>
        <button onClick={handleHitMe}>Hit Me!</button>
      </div>
    )
  }
}