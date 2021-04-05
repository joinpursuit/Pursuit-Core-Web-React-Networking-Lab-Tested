# [Pursuit-Core-Web-React-Networking-Lab

[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

## Assignment

In this lab, we're going to build a BlackJack app that allows us to play with each other on our computers.
We are just going to be rendering cards from the [Deck of Cards API](https://deckofcardsapi.com/), _drawing from the same deck_.

Fear not: we won't be implementing peer-to-peer networking on our own: the Deck of Cards API does that for us.
When the Deck of Cards API generates a deck, it gives you a `deck_id`.
Other people can use that deck id to draw from the same deck.

We also won't be implementing any rules: our app won't keep track of blackjack scores, bets, or even whose turn it is.
All our app will do is draw from a deck and render cards.
In a way, it's like a virtual deck of cards: just like a normal deck of cards, you decide how the game works!

### Menu Screen

The first screen is a menu to initiate the game. Either:

- Someone else has created and shuffled a deck: in which case you input their Deck ID and click 'Draw'.
- Not: in which case you click 'Generate Deck' to create a new one, and share it with your fellow players!

![menuScreen](./assets/menuScreen.png)

### Game Screen

After submitting this information, you should see two cards: this is your hand.
There should also be a button with the text `Hit Me!` that, when clicked, draws another card for you.
Go around in a circle and play [blackjack](https://en.wikipedia.org/wiki/Blackjack) as normal: hit when you want to hit, stay if you want to stay, and try to best your opponents!

![gameScreen](./assets/gameScreen.png)

## Architecture

We would like you to make a `Menu` component for the menu and a `Game` component for the game.
You should have exactly two pieces of state in `App`:

- `deckId`: deck ID once input or retrieved from the API
- `cards`: cards retrieved from the API

This state should be stored in `App`, with `Menu` and `Game` accepting props and updating `App`'s state as necessary.

...

## Bonus

Add a `Status` component as a child of `Game` that renders `Blackjack!` if the player can have a score of 21, `Busted...` if the player is busted, or `null` otherwise.
Create a cards prop for Status which takes an array of cards from the API.

- The value of cards two through ten is their value (2 through 10).
- Face cards (Jack, Queen, and King) are all worth 10.
- Aces can be worth 1 or 11
  > For example, if the player has an Ace with one or two queen, they have blackjack

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm run cypress` to open the cypress testing window
- `npm test` to run jest / node tests

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.
