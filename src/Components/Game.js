import React from "react";

export default function Game({deckId, cards}) {
	// const { deckId, cards} = this.props;
	return (
		<div>
			<h3>Blackjack</h3>
			Deck Id: {deckId}
			<div>
				{/* {cards.map((card) => {
					return <img src={card.image} alt="card"/>;
				})} */}
			</div>
			<button>Hit Me!</button>
		</div>
	);
}
