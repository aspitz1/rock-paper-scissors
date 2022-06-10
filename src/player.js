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

  chooseFighter(eventTargetDataAttribute, currentGameStyle) {
    for (let i = 0; i < currentGameStyle.length; i++) {
      if (eventTargetDataAttribute === currentGameStyle[i]) {
        this.fighter = currentGameStyle[i]
      }
    }
  }

  randomFighter(currentGameStyle) {
      const num = Math.floor(Math.random() * currentGameStyle.length)
      this.fighter = currentGameStyle[num]
  }

  changeTurns() {
    if(this.isTurn) {
      this.isTurn = false
    } else {
      this.isTurn = true
    }
  }

}
