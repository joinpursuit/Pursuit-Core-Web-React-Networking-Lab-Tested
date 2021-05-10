import React from "react";
import Menu from "./Menu"
import axios from "axios"
import Game from "./Game"
import "./App.css";

export default class App extends React.Component {
  state={deckId:"", cards:[], input:""}

  fetchDeck = async ()=>{
    try {
      const res= await axios.get("https://deckofcardsapi.com/api/deck/new/draw?count=2")
      console.log(res.data.deck_id)
      console.log(res.data.cards)
      this.setState({deckId:res.data.deck_id,cards: res.data.cards})
    }catch (error){
      this.setState({deckId:"", cards:[]})
    }

  }

  componentDidMount(){
    this.fetchDeck()
  }

  hitMe = async ()=>{
    // e.preventDefault()
    
    const {deckId} = this.state
    
    try {
      const res= await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`)
      
      this.setState((prevState) => ({
        cards: [...prevState.cards, ...res.data.cards],
      }));
   } catch (error){
      this.setState({cards:[]})
    }

  }

  handleChange=(e)=>{
    this.setState({input: e.target.value})
  }
handleInputChange =async(e)=>{
  e.preventDefault()
  try {
    const res= await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.input}/draw?count=2`)
    
    this.setState({cards: res.data.cards})
 } catch (error){
    this.setState({cards:[]})
  }

}


  render() {
    const {deckId, cards} = this.state
    return (
      <div className="app">
        
        <Menu deckId={deckId} fetchDeck={this.fetchDeck}  handleInputChange={this.handleInputChange} handleChange={this.handleChange}/>
        <Game deckId={deckId} cards={cards} hitMe={this.hitMe} />
      </div>
    );
  }
}


