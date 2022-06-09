const humanWinsDispaly = document.querySelector('#humanWins')
const computerWinsDisplay = document.querySelector('#computerWins')
const switchGameStyle = document.querySelector('#switchGame')
const gameplaySection = document.querySelector('#gameplay')
const originalGameplaySection = document.querySelector('#gameplay').innerHTML

const humanPlayer = new Player('human')
const computerPlayer = new Player('computer')
const game = new Game()

gameplaySection.addEventListener('click', displayGame)
switchGameStyle.addEventListener('click', homeView)


function displayGame(event) {
  switchGameStyle.classList.remove('hidden')
  gameplaySection.innerHTML = ''
  let gameplayStyle
  if (event.target.getAttribute('data-game') === 'classic') {
    gameplayStyle = game.gameFighterClassic
  }
  if (event.target.getAttribute('data-game') === 'extra') {
    gameplayStyle = game.gameFighterExtra
  }
  for (let i = 0; i < gameplayStyle.length; i++) {
    gameplaySection.innerHTML +=
    `<img data-token=${gameplayStyle[i]} class="game-fighter" src="assets/${gameplayStyle[i]}.png" alt="Cute ${gameplayStyle[i]} thats smiling!">`
  }
}

function homeView() {
  switchGameStyle.classList.add('hidden')
  gameplaySection.innerHTML = originalGameplaySection
}
