import React, { Component } from 'react'



export default class Menu extends Component {
  
  
  render() {
    return (
      <div>
        This button needs to make the call + render the cards
        <button onClick={this.props.generateNewDeck}>Generate Deck</button>  
        <p>New deck ID: {this.props.deckId}</p>
        <h2>Input Existing Deck</h2>
        <form onSubmit={this.props.handleSubmit} action="">
          <input onChange={this.props.handleChange} type="text" />
          <button type='submit' >Draw</button>
        </form>
      </div>
    )
  }

}
// Setting our value to the deckId prop state sets this form to controlled (or uncontrolled?) state
// value={this.props.deckId}