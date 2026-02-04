'use strict';
const playerOneCurrentScore = document.getElementById('current--0');
const playerTwoCurrentScore = document.getElementById('current--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const playerOneActive = document.querySelector('.player--0');
const playerTwoActive = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');
let tempScore = 0;
let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;

let diceNumber = 0;

roll.addEventListener('click', () => {
  rollDice();
  checkForOne(diceNumber);
  displayDiceRoll(diceNumber, tempScore);
});

hold.addEventListener('click', () => {
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

  if (playerOneTotalScore > 100) {
    console.log('PLayer one wines');
  } else if (playerTwoTotalScore > 100) {
    console.log('player two wins');
  }
});

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
