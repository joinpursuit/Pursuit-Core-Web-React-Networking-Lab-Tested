import React from 'react'


export default function HooksMenu(props) {

    console.log(props)



    return (
        <div>
            <button onClick={props.generateDeck} >Generate Deck</button><br />
            <label htmlFor="deckInput">Input Existing Deck </label>
            <input type="text" name='deckInput' onInput={props.handleChange} value={props.deckId} />
            <button onClick={props.drawDeck} >Draw</button>
        </div>
    )
}
