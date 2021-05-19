import {useState, useEffect, useRef} from "react";
import Menu from "./Menu";
import "./App.css";
import axios from "axios";
import Game from "./Game";

const App = () => {
  const [deckId, setDeckId] = useState("")
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    const generateDeck = async () => {
      try {
        const res = await axios.get(
          "https://deckofcardsapi.com/api/deck/new/draw?count=2"
        );
          setDeckId(res.data.deck_id);
          setCards(res.data.cards,);
      } catch (error) {
        console.log(error);
        setDeckId("");
        setCards([])
      }
    };
  })
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { deckId } = this.state
  //     const res = await axios.get(
  //       `https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`
  //     );
  //     debugger
  //     this.setState({cards: res.data.cards})
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({ cards: [] });
  //   }
  // };

  

  // handleChange = (e) => {
  //   this.setState({ deckId: e.target.value });
  // };

  // hitMe = async () => {
  //   try {
  //     const { deckId } = this.state
  //     const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`)
  //     this.setState((prevState) => ({cards: [...prevState.cards, ...res.data.cards]}))
  //   } catch (error) {
  //     console.log(error);
  //     this.setState((prevState) => ({cards: prevState.cards}))
  //   }
  // }

  
    const { deckId, cards} = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        { deckId && cards.length !== 0 ?
        <Game deckId={deckId} cards={cards} hitMe={this.hitMe}/>
        :
        <Menu
        deckId={deckId}
        handleChange={this.handleChange}
        generateDeck={this.generateDeck}
        handleSubmit={this.handleSubmit}
        /> 
        }
      </div>
    );
  
}

export default App;