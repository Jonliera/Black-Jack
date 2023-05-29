let firstCard = 6;
let secondCard = 9;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

const startGame = () => {
  renderGame();
};

const renderGame = () => {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1];
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
};

const newCard = () => {
  let card = 5;
  sum += card;
  renderGame();
};
