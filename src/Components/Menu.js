import React, { Component } from "react";
import axios from "axios";
import Game from "./Game";
export default class Menu extends Component {


	getNewDeck = async () => {
		
		try {
			// const res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
			const res = await axios.get(
				`https://deckofcardsapi.com/api/deck/new/draw?count=2`
			);
		
			this.setState({ deckId: res.data.deck_id });
            this.setState({ cards: res.data.cards });
		} catch (err) {
			console.log(err);
			this.setState({ deckId: "" });
		}
    };
    
    useDeckId = async ({deckId}) => {
        try {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`);
            this.setState({cards: res.data.image})
				} catch (err) {
					console.log(err);
					this.setState({ deckId: "" });
				}
    }

	componentDidMount() {
		this.getNewDeck();
	}

	render() {
		// const { deckId, deck, cards } = this.state;
		// const { deckId, cards } = this.props;
		return (
			<div>
				<button onClick={this.getNewDeck}>Generate Deck</button>
				<label>
					Input Existing Deck
					<input onChange={this.useDeckId }/>
				</label>
				<button onClick={this.useDeckId}>Draw</button>
				<br />
			</div>
		);
	}
}

// generate a new deck to start the gane
// https://deckofcardsapi.com/api/deck/new/
// `https://deckofcardsapi.com/api/deck/new/draw?count=2`;
