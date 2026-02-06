'use strict';
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const playerOneActive = document.querySelector('.player--0');
const playerTwoActive = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

let gameOver = false;
let diceNumber = 0;

let activePlayer = 0;
let totalScoresArr = [0, 0];
let currentScoresArr = [0, 0];

function switchPlayer() {
  if (gameOver) return;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScoresArr[activePlayer] = 0;

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  playerOneActive.classList.toggle('player--active');
  playerTwoActive.classList.toggle('player--active');
}

roll.addEventListener('click', () => {
  if (gameOver) return;
  diceNumber = Math.floor(Math.random() * 6) + 1;
  if (diceNumber === 1) {
    switchPlayer();
    return;
  }
  currentScoresArr[activePlayer] += diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScoresArr[activePlayer];
});

hold.addEventListener('click', () => {
  if (gameOver) return;

  totalScoresArr[activePlayer] =
    totalScoresArr[activePlayer] + currentScoresArr[activePlayer];

  document.getElementById(`score--${activePlayer}`).textContent =
    totalScoresArr[activePlayer];

  if (totalScoresArr[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    gameOver = true;
    return;
  }
  switchPlayer();
});

newGame.addEventListener('click', () => {
  gameOver = false;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${0}`).textContent = 0;
  document.getElementById(`current--${1}`).textContent = 0;
  document.getElementById(`score--${0}`).textContent = 0;
  document.getElementById(`score--${1}`).textContent = 0;
  playerOneActive.classList.add('player--active');
  playerTwoActive.classList.remove('player--active');
  activePlayer = 0;
  totalScoresArr = [0, 0];
  currentScoresArr = [0, 0];
});
