const humanSection = document.querySelector('#human');
const gamePlay = document.querySelector('#gamePlay');
const extraButton = document.querySelector('#extra');

const game = new Game();

window.addEventListener('load', () => {
  gamePlay.innerHTML = 
  `<p class="game-info">Choose your style here!</p>
   <label for="classic">
     <ul class="rules">
       <li>Rock > Scissors</li>
       <li>Paper > Rock</li>
       <li>Scissors > Paper</li>
     </ul>
   </label>
   <button data-gameStyle="classic" id="classic">Classic Gameplay</button>
   <label for="extra">
     <ul class="rules">
   <li>Rock > Scissors & Paper</li>
       <li>Paper > Rock & Tape</li>
       <li>Scissors > Paper & Paper-Clip</li>
       <li>Paper-Clip > Paper & Tape</li>
       <li>Tape > Scissors & Rock</li>
     </ul>
   </label>
   <button data-gameStyle="extra" id="extra">EXTRA Gameplay</button>`;
})

gamePlay.addEventListener('click', e => {
  if (e.target.getAttribute('data-gameStyle')) {
    game.setCurrentGameStyle(e.target.getAttribute('data-gameStyle'));
    displayTokens();
  } 
})

const displayTokens = () => {
  gamePlay.innerHTML = `<div id="fighters" class="fighters-wrapper"></div>`;
  game.currentGameStyle.forEach(fighter => {
    document.querySelector("#fighters").innerHTML += 
    `<div class="fighter-wrapper">
      <img data-fighter="${fighter.fighterType}" class="fighter" src="assets/${fighter.fighterType}.png" alt="${fighter.fighterType} with a smile on their face">
      <button data-fighter="${fighter.fighterType}"class="fighter-btn">${fighter.fighterType.toUpperCase()}</button>
    </div>`;
  })
}