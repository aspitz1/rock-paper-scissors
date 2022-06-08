class Player {
  constructor(token) {
    this.playerToken = token
    this.wins = 0
    this.human = token === 'assets/human.png'
  }

  addWin(){
    this.wins++
  }
  
}
