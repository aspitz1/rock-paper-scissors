class Player {
  constructor(token) {
    this.playerToken = token;
    this.wins = 0;
    this.isHuman = token === 'human';
  }

  addWin() {
    this.wins++;
  }

  clearWins() {
    this.wins = 0;
  }
}