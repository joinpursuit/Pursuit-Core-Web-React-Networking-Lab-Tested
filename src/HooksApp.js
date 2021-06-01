import React, { useState, useEffect } from 'react'
import HooksMenu from './hooks-components/HooksMenu'
import HooksGame from './hooks-components/HooksGame'
import axios from 'axios'
import './HooksApp.css'

export default function HooksApp() {

    const [ deckId, setDeckId ] = useState('')
    const [ cards, setCards ] = useState([])
    const [ showCards, setShowCards ] = useState(false)
    const [ newCard, setNewCard ] = useState('')

    
    useEffect(() => {   
        //Use this in lieu of Lifecycle Method
        const tempArr = [...cards]
        tempArr.push(newCard)
        console.log(tempArr)
        setCards(tempArr)
    }, [newCard])
    
    const generateDeck = async () => {
        await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(response => {
            setDeckId(response.data.deck_id)
        })
    }
    const drawDeck = async () => {
        await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(response => {
            setCards(response.data.cards)
            setShowCards(true)
        })
    }
    const handleChange = (e) => {
        setDeckId(e.target.value)
    }
    const addCard = async () => {
        await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => {
            setNewCard(response.data.cards[0])
        })
    }

    const showMenu =
    <HooksMenu deckId={deckId} 
    generateDeck={generateDeck} 
    handleChange={handleChange} 
    drawDeck={drawDeck} 
    cards={cards}
    showCards={showCards}/>

    return (
        <div className='HooksApp'>
            <h1>Blackjack</h1>

            {
            showCards ? 
                <HooksGame 
                    cards={cards} 
                    deckId={deckId}
                    addCard={addCard}
                /> 
                : 
                <HooksMenu deckId={deckId} 
                    generateDeck={generateDeck} 
                    handleChange={handleChange} 
                    drawDeck={drawDeck} 
                    cards={cards}
                    showCards={showCards}
                />
            }
        </div>
    )
}