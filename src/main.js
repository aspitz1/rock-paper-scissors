const clearWins = document.querySelector('#clearWins');
const computerWins = document.querySelector('#computerWins');
const computerWinsDisplay = document.querySelector('#computerWins');
const gameplaySection = document.querySelector('#gameplay');
const headingInfo = document.querySelector('#headingInfoWrapper');
const humanWins = document.querySelector('#humanWins');
const humanWinsDispaly = document.querySelector('#humanWins');
const originalHeadingInfo =
  document.querySelector('#headingInfoWrapper').innerHTML;

const playerImage = document.querySelectorAll('#playerImageWrapper');
const selectGameStyle = document.querySelectorAll('#selectGameButton');
const switchGameStyleBtn = document.querySelector('#switchGame');

const fighters = {
  fighterOne: 'rock',
  fighterTwo: 'paper',
  fighterThree: 'scissors',
  fighterFour: 'paper-clip',
  fighterFive: 'tape'
};

const firstPlayer = new Player('human');
const secondPlayer = new Player('computer');

const game = new Game(fighters);

clearWins.addEventListener('click', clearWinsLocalStorage);
gameplaySection.addEventListener('click', gameplayHandeler);
selectGameStyle[0].addEventListener('click', displayGameChoice);
selectGameStyle[1].addEventListener('click', displayGameChoice);
switchGameStyleBtn.addEventListener('click', homeView);
window.addEventListener('load', displayPlayerImage);

function clearWinsLocalStorage() {
  localStorage.clear();
  firstPlayer.wins = 0;
  secondPlayer.wins = 0;
  displayWins();
}

function gameplayHandeler(event) {
  if(event.target.getAttribute('data-fighter')) {
    game.fighterChoiceVsComputer(event.target.getAttribute('data-fighter'),
      firstPlayer, secondPlayer);

    runGameplay();
    setTimeout(displayGame, 1300);
  }

  saveWinsToStorage()
}

function saveWinsToStorage() {
  localStorage.setItem("firstPlayerWins", JSON.stringify(firstPlayer));
  localStorage.setItem("secondPlayerWins", JSON.stringify(secondPlayer));
}

function runGameplay() {
  switchGameStyleBtn.classList.add('hidden');
  const winner = game[`gameplay${game.currentGameStyleName}`](firstPlayer,
    secondPlayer);

  if(winner === 'DRAW!') {
    headingInfo.innerHTML = winner;
  } else {
    headingInfo.innerHTML = `<img data-token="${winner.playerToken}"
      class="player-image-small" src="assets/${winner.playerToken}.png" alt="Cute
      ${winner.playerToken} who is excited to be here!">
      <p class="winner">The ${winner.playerToken} won!</p>
      <img data-token="${winner.playerToken}"
      class="player-image-small" src="assets/${winner.playerToken}.png" alt="Cute
      ${winner.playerToken} who is excited to be here!">`;
  }

  gameplaySection.innerHTML = '';

  gameplaySection.innerHTML +=
  `<img class="game-fighter" src="assets/${firstPlayer.fighter}.png" alt="Humans
    chose ${firstPlayer.fighter}">
  <img class="game-fighter" src="assets/${secondPlayer.fighter}.png"
    alt="Humans chose ${secondPlayer.fighter}">`;

  if (winner.playerToken === 'human') {
    winnerHumanUpdate()
  } else if (winner.playerToken === 'computer') {
    winnerComputerUpdate()
  }
}

function winnerHumanUpdate() {
  humanWins.classList.add('win-counter-update');
  humanWins.innerHTML = 'Wins: ' + firstPlayer.wins;
  setTimeout(function() {
    humanWins.classList.remove('win-counter-update');
  }, 1300)
}

function winnerComputerUpdate() {
  computerWins.classList.add('win-counter-update');
  computerWins.innerHTML = 'Wins: ' + secondPlayer.wins;
  setTimeout(function() {
    computerWins.classList.remove('win-counter-update');
  }, 1300)
}

function displayGameChoice() {
  selectGameStyle[0].classList.add('hidden');
  selectGameStyle[1].classList.add('hidden');
  clearWins.classList.add('hidden')
  gameplay.classList.remove('hidden')

  game.setCurrentGameStyle(event.target.getAttribute('data-game')[0]
    .toUpperCase() + event.target.getAttribute('data-game').substring(1));

  displayGame();
}

function displayGame() {
  headingInfo.innerHTML = 'Choose your fighter!';
  switchGameStyleBtn.classList.remove('hidden');

  gameplaySection.innerHTML = '';

  for (let i = 0; i < game.currentGameStyle.length; i++) {
    gameplaySection.innerHTML +=
    `<img role="button" aria-lable="click to chose ${game.currentGameStyle[i]}"
      data-fighter="${game.currentGameStyle[i]}"
      class="game-fighter game-fighter-button"
      src="assets/${game.currentGameStyle[i]}.png"
      alt="Cute ${game.currentGameStyle[i]} that's smiling!">`;
  };
}

function homeView() {
  if (localStorage.length) {
    clearWins.classList.remove('hidden');
  }

  gameplay.classList.add('hidden');
  selectGameStyle[0].classList.remove('hidden');
  selectGameStyle[1].classList.remove('hidden');
  switchGameStyleBtn.classList.add('hidden');
  gameplaySection.innerHTML = '';
  headingInfo.innerHTML = originalHeadingInfo;
}

function displayPlayerImage() {
  playerImage[0].innerHTML += `<img data-token="${firstPlayer.playerToken}"
    class="player-image" src="assets/${firstPlayer.playerToken}.png" alt="Cute
    ${firstPlayer.playerToken} who is excited to be here!">`;

  playerImage[1].innerHTML += `<img data-token="${secondPlayer.playerToken}"
    class="player-image" src="assets/${secondPlayer.playerToken}.png"
    alt="Cute ${secondPlayer.playerToken} who is exciter to be here!">`;

  displayWins()
}

function displayWins() {
  if (localStorage.length) {
    retrieveWinsFromStorage()
    humanWins.innerText = 'Wins: ' + firstPlayer.wins;
    computerWins.innerText = 'Wins: ' + secondPlayer.wins;
    clearWins.classList.remove('hidden')
  } else {
    humanWins.innerText = 'Wins: 0';
    computerWins.innerText = 'Wins: 0'
  }
}

function retrieveWinsFromStorage() {
  firstPlayer.wins = JSON.parse(localStorage.firstPlayerWins).wins;
  secondPlayer.wins = JSON.parse(localStorage.secondPlayerWins).wins;
}
