import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    const {generateDeck, handleChange, loadDeck} = this.props
    return (
      <div>
        <button onClick={generateDeck}> Generate Deck</button>
        <p></p>
        <form onSubmit= {loadDeck}>
        <label htmlFor="">Input Exisisting Deck    </label>
        <input type="text" onChange={handleChange}/>
        <button onClick= {loadDeck} type="submit">Draw</button>
        </form>
      </div>
    )
  }
}
