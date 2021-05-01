/* eslint-disable jest/valid-expect-in-promise */
const deckId = "my-deck-id";

describe("Index", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("creating a new deck", () => {
    cy.intercept(`https://deckofcardsapi.com/api/deck/new/draw?count=2`, {
      fixture: "initialDeck.json",
    });
    cy.get("button").contains("Generate Deck").click();

    cy.contains(`Deck ID: ${deckId}`);
    cy.get("button").contains("Hit Me!");

    cy.fixture("initialDeck.json").then((initialDeckFixture) => {
      cy.get("img")
        .should("have.length", 2)
        .each((card, index) => {
          cy.wrap(card).should("have.attr", "src", initialDeckFixture.cards[index].image);
        });
    });
  });

  it("allows starting with an existing deck", () => {
    cy.intercept(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`, {
      fixture: "initialDeck.json",
    });
    cy.get("input").type(deckId);
    cy.get("button").contains("Draw").click();

    cy.contains(`Deck ID: ${deckId}`);
    cy.get("button").contains("Hit Me!");

    cy.fixture("initialDeck.json").then((initialDeckFixture) => {
      cy.get("img")
        .should("have.length", 2)
        .each((card, index) => {
          cy.wrap(card).should("have.attr", "src", initialDeckFixture.cards[index].image);
        });
    });
  });

  it("draws a new card when the player hits", () => {
    cy.intercept(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=2`, {
      fixture: "initialDeck.json",
    });
    cy.get("input").type(deckId);
    cy.get("button").contains("Draw").click();

    cy.intercept(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=1`, {
      fixture: "draw.json",
    });
    cy.get("button").contains("Hit Me!").click();

    cy.fixture("draw.json").then((drawFixture) => {
      cy.get("img").eq(2).should("have.attr", "src", drawFixture.cards[0].image);
    });
  });
});
