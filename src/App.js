import React from 'react'
import Game from './Game'
import Menu from './Menu'
import axios from 'axios'
import './App.css'

export default class App extends React.Component {
	state = {
		deckID: '',
		cards: [],
	}

	fetchCards = async () => {
		try {
			const { data } = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
			console.log(data)
			this.setState({
				deckID: data.deck_id,
				cards: data.cards,
			})
		} catch (e) {
			this.setState({
				deckID: '',
				cards: [],
			})
		}
	}

	drawOne = async () => {
		const { deckID } = this.state

		try {
			const { data } = await axios.get(
				`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
			)
			this.setState({
				cards: [...this.state.cards, ...data.cards],
			})
		} catch (e) {
			this.setState({ cards: [...this.state.cards] })
		}
	}

	handleChange = (e) => {
		this.setState({
			deckID: e.target.value,
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		const { deckID } = this.state
		try {
			const { data } = await axios.get(
				`https://deckofcardsapi.com/api/deck/${deckID}/draw?count=2`
			)
			this.setState({ cards: data.cards })
		} catch (e) {
			this.setState({
				cards: [],
			})
		}
	}

	render() {
		const { cards, deckID } = this.state
		return (
			<div className='app'>
				<h1>BlackJack!</h1>
				<hr />
				{cards.length === 0 && (
					<Menu
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						fetchCards={this.fetchCards}
						deckID={deckID}
					/>
				)}
				{cards.length !== 0 && <Game cards={cards} deckID={deckID} drawOne={this.drawOne} />}
			</div>
		)
	}
}
