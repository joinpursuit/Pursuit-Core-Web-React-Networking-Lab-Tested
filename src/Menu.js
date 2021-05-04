import { Component } from "react";

class Menu extends Component {
  state = { input: ""}

  handleInput = (e) =>{
    this.setState({input: e.target.value})
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateId} = this.props
    const { input } = this.state
    updateId(input)

  }
  render() {
    const {input} = this.state
    const { getNewDeck} = this.props;
    return (
      <div className="my-deck-id">
        
        <button type="button" onClick={getNewDeck}>Generate Deck</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Existing Deck
            
            <input onChange={this.handleInput}value={input}/>
            <button>Draw</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Menu;
