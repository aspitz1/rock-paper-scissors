const playerImage = document.querySelectorAll('#playerImageWrapper');
const humanWinsDispaly = document.querySelector('#humanWins');
const computerWinsDisplay = document.querySelector('#computerWins');
const selectGameStyle = document.querySelectorAll('#selectGameButton');
const switchGameStyleBtn = document.querySelector('#switchGame');
const headingInfo = document.querySelector('#headingInfo');
const originalHeadingInfo = document.querySelector('#headingInfo').innerHTML;
const gameplaySection = document.querySelector('#gameplay');
const humanWins = document.querySelector('#humanWins');
const computerWins = document.querySelector('#computerWins');

const fighters = {
  fighterOne: 'rock',
  fighterTwo: 'paper',
  fighterThree: 'scissors',
  fighterFour: 'paper-clip',
  fighterFive: 'tape'
};

const humanPlayer = new Player('human');
const computerPlayer = new Player('computer');
const game = new Game(fighters);

window.addEventListener('load', displayPlayerImage);
switchGameStyleBtn.addEventListener('click', homeView);
selectGameStyle[0].addEventListener('click', displayGameStyle);
selectGameStyle[1].addEventListener('click', displayGameStyle);
gameplaySection.addEventListener('click', gameplayHandeler);

function displayPlayerImage() {
  playerImage[0].innerHTML += `<img data-token="${humanPlayer.playerToken}"
    class="player-image" src="assets/${humanPlayer.playerToken}.png" alt="Cute
    ${humanPlayer.playerToken} who is excited to be here!">`;

  playerImage[1].innerHTML += `<img data-token="${computerPlayer.playerToken}"
    class="player-image" src="assets/${computerPlayer.playerToken}.png"
    alt="Cute ${computerPlayer.playerToken} who is exciter to be here!">`;
}

function displayGameStyle() {
  selectGameStyle[0].classList.add('hidden');
  selectGameStyle[1].classList.add('hidden');

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
      class="game-fighter" src="assets/${game.currentGameStyle[i]}.png"
      alt="Cute ${game.currentGameStyle[i]} that's smiling!">`;
  };
}

function homeView() {
  selectGameStyle[0].classList.remove('hidden');
  selectGameStyle[1].classList.remove('hidden');
  gameplaySection.innerHTML = '';
  headingInfo.innerHTML = originalHeadingInfo;
  switchGameStyleBtn.classList.add('hidden');
  gameplaySection.removeAttribute('data-gameStyle');
  gameplaySection.setAttribute('data-landingPg', 'true');
}

function gameplayHandeler(event) {
  if(event.target.getAttribute('data-fighter')) {
    humanPlayer.changeTurns();

    game.fighterChoiceVsComputer(event.target.getAttribute('data-fighter'),
      humanPlayer, computerPlayer);

    runGameplay();
    setTimeout(displayGame, 1200);
  }
}

function runGameplay() {
  const winner = game[`gameplay${game.currentGameStyleName}`](humanPlayer,
    computerPlayer);

  headingInfo.innerHTML = winner;

  gameplaySection.innerHTML = '';

  gameplaySection.innerHTML +=
  `<img class="game-fighter" src="assets/${humanPlayer.fighter}.png" alt="Humans
    chose ${humanPlayer.fighter}">
  <img class="game-fighter" src="assets/${computerPlayer.fighter}.png"
    alt="Humans chose ${computerPlayer.fighter}">`;

  humanWins.innerHTML = 'Wins: ' + humanPlayer.wins;
  computerWins.innerHTML = 'Wins: ' + computerPlayer.wins;
}
