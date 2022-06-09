const humanWinsDispaly = document.querySelector('#humanWins')
const computerWinsDisplay = document.querySelector('#computerWins')
const switchGameStyleBtn = document.querySelector('#switchGame')
const gameplaySection = document.querySelector('#gameplay')
const originalGameplaySection = document.querySelector('#gameplay').innerHTML

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

gameplaySection.addEventListener('click', gameplay)
gameplaySection.addEventListener('click', displayGameFromLanding)
switchGameStyleBtn.addEventListener('click', homeView)

function displayGameFromLanding() {
  if (gameplaySection.getAttribute('data-landingPg') === 'true') {
    game.setCurrentGameStyle(event.target.getAttribute('data-game')[0].toUpperCase() + event.target.getAttribute('data-game').substring(1))
    displayGame()
  }
}

function displayGame() {
  switchGameStyleBtn.classList.remove('hidden')
  gameplaySection.setAttribute('data-landingPg', 'false')
  gameplaySection.setAttribute('data-gameStyle', event.target.getAttribute('data-game'))
  gameplaySection.innerHTML = ''
  for (let i = 0; i < game.currentGameStyle.length; i++) {
    gameplaySection.innerHTML +=
    `<img data-fighter="${game.currentGameStyle[i]}" class="game-fighter" src="assets/${game.currentGameStyle[i]}.png" alt="Cute ${game.currentGameStyle[i]} thats smiling! Chose one!">`
  }
}

function homeView() {
  switchGameStyleBtn.classList.add('hidden')
  gameplaySection.removeAttribute('data-gameStyle')
  gameplaySection.setAttribute('data-landingPg', 'true')
  gameplaySection.innerHTML = originalGameplaySection
}

function gameplay() {
  if (gameplaySection.getAttribute('data-landingPg') === 'false') {
    humanPlayer.isTurn = true
    game.fighterChoiceVsComputer(event.target.getAttribute('data-fighter'), humanPlayer, computerPlayer)
    gameplaySection.innerHTML = ''
    gameplaySection.innerHTML +=
    `<img data-fighter="${humanPlayer.fighter}" class="game-fighter" src="assets/${humanPlayer.fighter}.png" alt="Humans chose ${humanPlayer.fighter}"><img data-fighter="${computerPlayer.fighter}" class="game-fighter" src="assets/${computerPlayer.fighter}.png" alt="Humans chose ${computerPlayer.fighter}">`
  }
}
