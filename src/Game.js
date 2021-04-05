import { Status } from "./Status";

export default function Game({ cards, deckId, onHit }) {
  return (
    <div id="game">
      <p>Deck ID: {deckId}</p>
      <div>
        {cards.map((card) => (
          <img alt={card.code} key={card.code} src={card.image} />
        ))}
      </div>
      <button onClick={onHit} type="button">
        Hit Me!
      </button>
      <p>
        <Status cards={cards} />
      </p>
    </div>
  );
}
