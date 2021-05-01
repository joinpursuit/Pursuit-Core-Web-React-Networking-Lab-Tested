import { Component } from "react";
import axios from "axios";

class Menu extends Component {

  state = { deckId: "", cards: []}

  fetchDeck = async () => {
    try {  
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
      const deck_id = res.data.deck_id
      const res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw?count=2`)
      this.setState({
        deckId: deck_id,
        cards: res2.data.cards
      })
    } catch (error) {
      console.log(error);
      this.setState({deckId: ""})
    }
  }


  componentDidMount(){
    this.fetchDeck()
  }

  render() {
    
    return (
      <section>
          <button >Generate Deck</button>
          <label htmlFor="my-deck-id">Input Existing Deck</label>
          <input id="my-deck-id" type="text" />
          <button>Draw</button>
      </section>
    );
  }
}

export default Menu;
