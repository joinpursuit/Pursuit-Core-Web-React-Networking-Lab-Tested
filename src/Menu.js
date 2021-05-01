import React from "react";

class Menu extends React.Component {
  state={input: ""}

  handleChange = (e) => {
    const myDeckID= e.target.value;
    this.setState({ input: myDeckID });
  }
  
  handleSubmit = () =>{

  }
  
  render() {
    const {generateDeck, deckID} = this.props
    return (
      <div>
    
        <button onClick = {generateDeck}>Generate Deck</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input Existing Deck
            <input type="text" value="" onChange={this.handleChange}/>
          </label>
            <button>Draw</button>
        </form>
      </div>
    );
  }
}
export default Menu;
