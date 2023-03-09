/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const startButton = document.querySelector<HTMLButtonElement>('.box_btn');
const winButton = document.querySelector<HTMLButtonElement>('.box_btn_win');
const resetButton = document.querySelector<HTMLButtonElement>('.box_btn_reset');
const gameContainer = document.querySelector<HTMLDivElement>('.memory-game');
const cards = document.querySelectorAll<HTMLDivElement>('.card__inner');
const movesCount = document.querySelector<HTMLDivElement>('.movesCount');
const inGameTimer = document.querySelector<HTMLDivElement>('.time');

let totalRevealCards = 0;
let timeSec = 0;
let timer: number;

const initializeGame = startButton.addEventListener('click', () => {
  if (gameContainer.style.display === 'none') {
    gameContainer.style.display = 'block';
    startButton.style.display = 'none';
    setInterval(() => {
      inGameTimer.innerHTML = `Time: 00:${timeSec < 10 ? `0${timeSec}` : timeSec}`;
      timeSec += 1;
      if (totalRevealCards === 6) {
        clearInterval(timer);
      }
    }, 1000);
  } else {
    gameContainer.style.display = 'none';
  }
});

let totalMovesCount = 0;
let hasFlippedCard = false;
let firstCard: number;
let secondCard: number;

const handleCardClick = cards.forEach((card, i) => {
  //  add event listener to each card
  card.addEventListener('click', () => {
    if (hasFlippedCard) {
      return; //  if a card is already flipped, return
    }
    card.classList.add('is-flipped'); //  flip the card
    totalMovesCount += 1; //  increment the move counter
    movesCount.innerHTML = `Moves: ${totalMovesCount}`;
    if (!firstCard) { //  if no first card is flipped
      firstCard = i; // set first card as this card
    } else {
      hasFlippedCard = true; // if a first card is flipped, set this as the second card
      secondCard = i;
      setTimeout(() => {
        //  if the cards match
        if (cards[firstCard].getAttribute('id') === cards[secondCard].getAttribute('id')) {
          totalRevealCards += 2;
          // if all cards are revealed
          if (totalRevealCards === 6) {
            gameContainer.style.display = 'none';
            winButton.style.display = 'block';
            winButton.innerHTML = `You win Game, Total moves: ${totalMovesCount} and Time was ${timeSec} seconds `;
            winButton.classList.add('reset_btn');
          }
        } else {
          cards[firstCard].classList.remove('is-flipped');
          cards[secondCard].classList.remove('is-flipped');
        }
        firstCard = null;
        secondCard = null;
        hasFlippedCard = false;
      }, 1000);
    }
  });
});

const resetGame = resetButton.addEventListener('click', () => {
  clearInterval(timer);
  timeSec = 0;
  winButton.style.display = 'none';
  gameContainer.style.display = 'none';
  startButton.style.display = 'flex';
  cards.forEach((card) => {
    card.classList.remove('is-flipped');
  });
  totalMovesCount = 0;
  movesCount.innerHTML = `Moves: ${totalMovesCount}`;
  hasFlippedCard = false;
  firstCard = null;
  secondCard = null;
  totalRevealCards = 0;
});
