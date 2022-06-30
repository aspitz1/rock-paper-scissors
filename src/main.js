const humanWins = document.querySelector('#humanWins');
const computerWins = document.querySelector('#computerWins');
const clearWinsBtn = document.querySelector('#clearWins');
const gamePlay = document.querySelector('#gamePlay');
const extraButton = document.querySelector('#extra');

const game = new Game();

window.addEventListener('load', () => {
  displayGameChoices();
  if (localStorage.length) {
    getWinsFromLocal();
  }
  displayPlayerWins();

})

gamePlay.addEventListener('click', e => {
  if (e.target.getAttribute('data-gameStyle')) {
    game.setCurrentGameStyle(e.target.getAttribute('data-gameStyle'));
    displayTokens();
  } else if (e.target.getAttribute('data-fighter')) {
    game.chooseFighters(e.target.getAttribute('data-fighter'));
    displayResults();
    setTimeout(displayTokens, 1600);
  } else if(e.target.id === 'main') {
    displayGameChoices();
  }

})

clearWinsBtn.addEventListener('click', () => {
  game.players.forEach(player => player.player.clearWins());
  localStorage.clear();
  showHideClearWinsBtn();
  displayPlayerWins();

});

const displayGameChoices = () => {
  gamePlay.innerHTML = 
  `<p class="game-info">Choose your style here!</p>
   <label for="classic">
     <ul class="rules">
       <li>Rock > Scissors</li>
       <li>Paper > Rock</li>
       <li>Scissors > Paper</li>
     </ul>
   </label>
   <button data-gameStyle="classic" id="classic" class="style-btn">Classic Gameplay</button>
   <label for="extra">
     <ul class="rules">
   <li>Rock > Scissors & Paper</li>
       <li>Paper > Rock & Tape</li>
       <li>Scissors > Paper & Paper-Clip</li>
       <li>Paper-Clip > Paper & Tape</li>
       <li>Tape > Scissors & Rock</li>
     </ul>
   </label>
   <button data-gameStyle="extra" id="extra" class="style-btn">EXTRA Gameplay</button>`;

}

const displayTokens = () => {
  gamePlay.innerHTML = 
  `<p class="game-info">Choose your FIGHTER!</p>
   <div id="fighters" class="fighters-wrapper"></div>`;

  game.currentGameStyle.forEach(fighter => {
    document.querySelector("#fighters").innerHTML += 
    `<div class="fighter-wrapper">
      <img data-fighter="${fighter.fighterType}" class="fighter" 
        src="assets/${fighter.fighterType}.png" 
        alt="${fighter.fighterType} with a smile on their face">

      <button data-fighter="${fighter.fighterType}" 
        class="fighter-btn">${fighter.fighterType.toUpperCase()}</button>

    </div>`;
  })

  gamePlay.innerHTML += 
    `<button id="main" class="main-btn">Back to Main</button>`

}

const displayResults = () => {
  const winner = game.winner();
  if (winner === 'DRAW!') {
    gamePlay.innerHTML = `<p class="game-info">It's a ${winner}</p>`
  } else {
    gamePlay.innerHTML = 
      `<p class="game-info">The ${winner.player.playerToken.toUpperCase(0)} won!</p>`
  }

  gamePlay.innerHTML += `<div id="result" class="result-wrapper"></div>`
  game.players.forEach(player => {
    document.querySelector("#result").innerHTML += 
    `<img class="result-fighter" 
        src="assets/${player.fighter.fighterType}.png" 
        alt="${player.fighter.fighterType} with a smile on their face">`
  })

  displayPlayerWins();
  saveWinsToLocal();
}

const displayPlayerWins = () => {
  humanWins.innerText = `Wins: ${game.players[0].player.wins}`;
  computerWins.innerText = `Wins: ${game.players[1].player.wins}`;
  showHideClearWinsBtn();

}

const showHideClearWinsBtn = () => {
  if (game.players[0].player.wins || game.players[1].player.wins) {
    clearWinsBtn.classList.remove('hidden');
  } else {
    clearWinsBtn.classList.add('hidden');
  }

}

const saveWinsToLocal = () => {
  localStorage.setItem('humanWins', JSON.stringify(game.players[0].player));
  localStorage.setItem('computerWins', JSON.stringify(game.players[1].player));

}

const getWinsFromLocal = () => {
  game.players[0].player.wins = JSON.parse(localStorage.humanWins).wins;
  game.players[1].player.wins = JSON.parse(localStorage.computerWins).wins;
}