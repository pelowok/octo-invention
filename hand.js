// Collection representing each player's hand of cards
export default class Hand {
  constructor() {
      this.cards = []; // Array to hold the player's cards
  }

  addCard(card) {
      this.cards.push(card); // Method to add a card to the player's hand
  }

  gainNewBlankCards(numberOfBlankCards) {
      for (let i = 0; i < numberOfBlankCards; i++) {
          this.cards.push(new Card("Blank"));
      }
  }

  passCardToOthers(otherPlayers) {
      for (let player of otherPlayers) {
          const cardPassed = this.cards.pop();
          player.addCard(cardPassed);
      }
  }

  // Additional methods for managing the player's hand of cards can be added here
}


