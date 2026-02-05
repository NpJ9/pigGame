'use strict';
const playerOneCurrentScore = document.getElementById('current--0');
const playerTwoCurrentScore = document.getElementById('current--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const playerOneActive = document.querySelector('.player--0');
const playerTwoActive = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

let tempScore = 0;
let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;
let gameOver = false;
let diceNumber = 0;

roll.addEventListener('click', () => {
  if (gameOver) return;
  rollDice();
  checkForOne(diceNumber);
  displayDiceRoll(diceNumber, tempScore);
});

hold.addEventListener('click', () => {
  if (gameOver) return;
  if (playerOneActive.classList.contains('player--active')) {
    playerOneTotalScore = playerOneTotalScore + tempScore;
    playerOneScore.textContent = playerOneTotalScore;
    playerOneActive.classList.remove('player--active');
    playerTwoActive.classList.add('player--active');
    tempScore = 0;
  } else if (playerTwoActive.classList.contains('player--active')) {
    playerTwoTotalScore = playerTwoTotalScore + tempScore;
    playerTwoScore.textContent = playerTwoTotalScore;
    playerOneActive.classList.add('player--active');
    playerTwoActive.classList.remove('player--active');
    tempScore = 0;
  }
  checkForWinner();
});

newGame.addEventListener('click', () => {
  gameOver = false;
  tempScore = 0;
  playerOneTotalScore = 0;
  playerTwoTotalScore = 0;
  playerOneActive.classList.remove('player--winner');
  playerOneCurrentScore.textContent = 0;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  playerTwoActive.classList.remove('player--winner');
  console.log('NEW GAME');
});

function checkForWinner() {
  if (playerOneTotalScore >= 10) {
    console.log('PLayer one wins');
    playerOneActive.classList.add('player--winner');
    tempScore = 0;
  } else if (playerTwoTotalScore >= 10) {
    console.log('player two wins');
    playerTwoActive.classList.add('player--winner');
    tempScore = 0;
  }
  gameOver = true;
}
function rollDice() {
  diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log('Dice roll is ' + diceNumber);
}

function displayDiceRoll() {
  if (playerOneActive.classList.contains('player--active')) {
    playerOneCurrentScore.textContent = tempScore;
  } else if (playerTwoActive.classList.contains('player--active')) {
    playerTwoCurrentScore.textContent = tempScore;
  }
  diceImg.src = `dice-${diceNumber}.png`;
}

function checkForOne(diceNumber) {
  if (
    diceNumber === 1 &&
    playerOneActive.classList.contains('player--active')
  ) {
    playerOneActive.classList.remove('player--active');
    playerTwoActive.classList.add('player--active');
    playerOneCurrentScore.textContent = 0;
    tempScore = 0;
  } else if (
    diceNumber === 1 &&
    playerTwoActive.classList.contains('player--active')
  ) {
    playerOneActive.classList.add('player--active');
    playerTwoActive.classList.remove('player--active');
    playerTwoCurrentScore.textContent = 0;
    tempScore = 0;
  }
  {
    tempScore = tempScore + diceNumber;
    console.log('Temp score is ' + tempScore);
  }
}
