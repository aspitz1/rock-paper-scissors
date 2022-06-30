class Game {
  constructor() {
    this.players = [
      {player: new Player('human'), fighter: null}, 
      {player: new Player('computer'), fighter: null}
    ];

    this.fighters = [
      {fighterType: 'rock', beats: ['scissors', 'paper-clip']},
      {fighterType: 'paper', beats: ['rock', 'tape']},
      {fighterType: 'scissors', beats: ['paper', 'paper-clip']},
      {fighterType: 'paper-clip', beats: ['paper', 'tape']},
      {fighterType: 'tape', beats: ['rock', 'scissors']}
    ]
    
    this.classicFighters = this.fighters.slice(0, 3);
    this.extraFighters = this.fighters;
    this.currentGameStyle;
  }

  setCurrentGameStyle(style) {
    this.currentGameStyle = this[`${style}Fighters`]
  }

  chooseFighters(choice) {
    this.players.forEach(player => {
      if (player.player.isHuman) {
        player.fighter = 
          this.currentGameStyle.find(fighter => fighter.fighterType === choice);
      } else {
        player.fighter = 
          this.currentGameStyle[Math.floor(Math.random() * this.currentGameStyle.length)];
      }
    })
  }

  winner() {
    if (this.players[0].fighter.fighterType === this.players[1].fighter.fighterType) {
      return 'DRAW!';
    } else if (this.players[0].fighter.beats.includes(this.players[1].fighter.fighterType)) {
      this.players[0].player.addWin();
      return this.players[0];
    } else {
      this.players[1].player.addWin();
      return this.players[1];
    }
  }

}
