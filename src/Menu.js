import React, { Component } from 'react'



export default class Menu extends Component {
  
  
  render() {

    const {deckId} = this.props

    return (
      <div>
        <button onClick={this.props.generateNewDeck}>Generate Deck</button>  
        <p>Deck ID: {deckId}</p>
        <h2>Input Existing Deck</h2>
        <form onSubmit={this.props.handleSubmit} action="">
          <input onChange={this.props.handleChange} type="text" />
          <button type='submit'>Draw</button>
        </form>
      </div>
    )
  }

}


// Setting our value to the deckId prop state sets this form to controlled (or uncontrolled?) state
// value={this.props.deckId}