class Player {
  constructor(token) {
    this.playerToken = token
    this.fighter
    this.wins = 0
    this.human = token === 'human'
    this.isTurn = false
  }

  addWin(){
    this.wins++
  }

  chooseFighter(fighter) {
    this.fighter = fighter
  }

  changeTurns() {
    this.isTurn = true
  }

}
