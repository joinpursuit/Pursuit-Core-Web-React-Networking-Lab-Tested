import React from "react";
import Menu from "./Components/Menu";
import "./App.css";
import Game from "./Components/Game";

export default class App extends React.Component {
	state = { deckId: "", cards: [] };

	// updateDeckId = (e) => {
	// 	this.setState({ deckId: e.target.value });
	// };

	render() {
    const { deckId, cards } = this.state;
    return (
			<div className="app">
				<h3>Blackjack</h3>
				<Menu deckId={this.deckId} cards={this.cards} />
				<Game deckId={this.deckId} cards={this.cards} />
			</div>
		);
	}
}
