import React from "react";

class Menu extends React.Component {



// handleSubmit = (e) =>{
//   e.preventDefault()

// }



 
  render() {
    const input = this.props.input
    return (
      <section>
        <form onSubmit={this.props.handleInputChange}>
       {/* <form> */}
          <button onClick={this.fetchDeck}>Generate Deck</button>
          <label htmlFor="my-deck-input">Input Existing Deck</label>
          <input id="my-deck-id" type="text" value={input} onChange={this.props.handleChange}/>
          {/* <input/> */}
          <button>Draw</button>

        </form>
      </section>
    )
  }
}

export default Menu;
