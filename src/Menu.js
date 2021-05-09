import React from "react";

 class Menu extends React.Component{
  state = {input: ''}

  handleInput = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {drawCards} = this.props
    const {input} = this.state
    drawCards(input)
  }
  render() {
    const {cardDeck} = this.props
    const {input} = this.state
    return (
      <div>
       <h1>Blackjack</h1>
       <button type="button" onClick={cardDeck}>Generate Deck</button>
       <form onSubmit={this.handleSubmit}>
       <label htmlFor="card">Input Existing Deck</label>
       <input name="card" id="card" onChange={this.handleInput} value={input}/>
       <button>Draw</button>
       </form>
     </div>
   );
  }
}


export default Menu;
