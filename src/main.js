const computerWins = document.querySelector('#computerWins');
const computerWinsDisplay = document.querySelector('#computerWins');
const gameplaySection = document.querySelector('#gameplay');
const headingInfo = document.querySelector('#headingInfoWrapper');
const humanWins = document.querySelector('#humanWins');
const humanWinsDispaly = document.querySelector('#humanWins');
const playerImage = document.querySelectorAll('#playerImageWrapper');
const originalHeadingInfo =
  document.querySelector('#headingInfoWrapper').innerHTML;

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

gameplaySection.addEventListener('click', gameplayHandeler);
selectGameStyle[0].addEventListener('click', displayGameChoice);
selectGameStyle[1].addEventListener('click', displayGameChoice);
switchGameStyleBtn.addEventListener('click', homeView);
window.addEventListener('load', displayPlayerImage);

function gameplayHandeler(event) {
  if(event.target.getAttribute('data-fighter')) {
    game.fighterChoiceVsComputer(event.target.getAttribute('data-fighter'),
      firstPlayer, secondPlayer);

    runGameplay();
    setTimeout(displayGame, 1200);
  }
}

function runGameplay() {
  switchGameStyleBtn.classList.add('hidden');
  const winner = game[`gameplay${game.currentGameStyleName}`](firstPlayer,
    secondPlayer);

  headingInfo.innerHTML = winner;

  gameplaySection.innerHTML = '';

  gameplaySection.innerHTML +=
  `<img class="game-fighter" src="assets/${firstPlayer.fighter}.png" alt="Humans
    chose ${firstPlayer.fighter}">
  <img class="game-fighter" src="assets/${secondPlayer.fighter}.png"
    alt="Humans chose ${secondPlayer.fighter}">`;

  winCounterUpdate()
}

function winCounterUpdate() {
  humanWins.classList.add('win-counter-update');
  computerWins.classList.add('win-counter-update');
  humanWins.innerHTML = 'Wins: ' + firstPlayer.wins;
  computerWins.innerHTML = 'Wins: ' + secondPlayer.wins;
  setTimeout(function() {
    humanWins.classList.remove('win-counter-update');
    computerWins.classList.remove('win-counter-update');
  }, 1200)
}

function displayGameChoice() {
  selectGameStyle[0].classList.add('hidden');
  selectGameStyle[1].classList.add('hidden');
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
    `<img role="button" data-fighter="${game.currentGameStyle[i]}"
      class="game-fighter game-fighter-button" src="assets/${game.currentGameStyle[i]}.png"
      alt="Cute ${game.currentGameStyle[i]} that's smiling!">`;
  };
}

function homeView() {
  gameplay.classList.add('hidden')
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
}
