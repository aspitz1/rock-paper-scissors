const humanWinsDispaly = document.querySelector('#humanWins')
const computerWinsDisplay = document.querySelector('#computerWins')
const selectGameStyle = document.querySelectorAll('#selectGameButton')
const switchGameStyleBtn = document.querySelector('#switchGame')
const headingInfo = document.querySelector('#headingInfo')
const originalHeadingInfo = document.querySelector('#headingInfo').innerHTML
const gameplaySection = document.querySelector('#gameplay')
const humanWins = document.querySelector('#humanWins')
const computerWins = document.querySelector('#computerWins')

const fighters = {
  fighterOne: 'rock',
  fighterTwo: 'paper',
  fighterThree: 'scissors',
  fighterFour: 'paper-clip',
  fighterFive: 'tape'
}

const humanPlayer = new Player('human')
const computerPlayer = new Player('computer')
const game = new Game(fighters)

gameplaySection.addEventListener('click', gameplayHandeler)
switchGameStyleBtn.addEventListener('click', homeView)
selectGameStyle[0].addEventListener('click', displayGameFromLanding)
selectGameStyle[1].addEventListener('click', displayGameFromLanding)

function displayGameFromLanding() {
  selectGameStyle[0].classList.add('hidden')
  selectGameStyle[1].classList.add('hidden')
  game.setCurrentGameStyle(event.target.getAttribute('data-game')[0].toUpperCase() + event.target.getAttribute('data-game').substring(1))
  displayGame()
}

function displayGame() {
  headingInfo.innerHTML = 'Choose your fighter!'
  switchGameStyleBtn.classList.remove('hidden')
  gameplaySection.innerHTML = ''
  for (let i = 0; i < game.currentGameStyle.length; i++) {
    gameplaySection.innerHTML +=
    `<img role="button" data-fighter="${game.currentGameStyle[i]}" class="game-fighter" src="assets/${game.currentGameStyle[i]}.png" alt="Cute ${game.currentGameStyle[i]} thats smiling!">`
  }
}

function homeView() {
  selectGameStyle[0].classList.remove('hidden')
  selectGameStyle[1].classList.remove('hidden')
  gameplaySection.innerHTML = ''
  headingInfo.innerHTML = originalHeadingInfo
  switchGameStyleBtn.classList.add('hidden')
  gameplaySection.removeAttribute('data-gameStyle')
  gameplaySection.setAttribute('data-landingPg', 'true')
}

function gameplayHandeler(event) {
  if(event.target.getAttribute('data-fighter')) {
    humanPlayer.changeTurns();
    game.fighterChoiceVsComputer(event.target.getAttribute('data-fighter'), humanPlayer, computerPlayer)
    runGameplay()
    setTimeout(displayGame, 1200)
  }
}

function runGameplay() {
  const winner = game[`gameplay${game.currentGameStyleName}`](humanPlayer, computerPlayer)
  headingInfo.innerHTML = winner
  gameplaySection.innerHTML = ''
  gameplaySection.innerHTML +=
  `<img class="game-fighter" src="assets/${humanPlayer.fighter}.png" alt="Humans chose ${humanPlayer.fighter}">
  <img class="game-fighter" src="assets/${computerPlayer.fighter}.png" alt="Humans chose ${computerPlayer.fighter}">`
  humanWins.innerHTML = 'Wins: ' + humanPlayer.wins
  computerWins.innerHTML = 'Wins: ' + computerPlayer.wins
}
