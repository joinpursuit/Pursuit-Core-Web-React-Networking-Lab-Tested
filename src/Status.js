const faces = new Set(["JACK", "QUEEN", "KING"]);

export function Status({ cards }) {
  const { aces, score } = cards.reduce(
    (totals, next) => {
      if (next.value === "ACE") {
        totals.aces += 1;
        totals.score += 1;
      } else if (faces.has(next.value)) {
        totals.score += 10;
      } else {
        totals.score += parseInt(next.value, 10);
      }

      return totals;
    },
    { aces: 0, score: 0 }
  );

  if (score > 21) {
    return "Busted...";
  }

  for (let i = 0; i <= aces; i += 1) {
    if (score + i * 9 === 21) {
      return "Blackjack!";
    }
  }

  return null;
}
