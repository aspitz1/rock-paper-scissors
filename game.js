class Game {
  constructor() {
    this.rock = 'rock'
    this.paper = 'paper'
    this.scissors = 'scissors'
    this.paperClip = 'paper-clip'
    this.tape = 'tape'
    this.gameTokensClassic = [this.rock, this.paper, this.scissors]
    this.gameTokensExtra = [this.rock, this.paper, this.scissors, this.paperClip, this.tape]
  }

  gameplayClassic(fighter1, fighter2) {
    if (fighter1 === this.rock && fighter2 === this.scissors) {
      return fighter1
    } else if (fighter2 === this.rock && fighter1 === this.scissors) {
      return fighter2
    } else if (fighter1 === this.paper && fighter2 === this.rock) {
      return fighter1
    } else if (fighter2 === this.paper && fighter1 === this.rock) {
      return fighter2
    } else if (fighter1 === this.scissors && fighter2 === this.paper) {
      return fighter1
    } else if (fighter2 === this.scissors && fighter1 === this.paper) {
      return fighter2
    } else {
      return 'DRAW!'
    }
  }

  gameplayExtra(fighter1, fighter2) {
    if (fighter1 === fighter2) {
      return 'DRAW!'
    } else if (fighter1 === this.rock && fighter2 === this.scissors || fighter2 === this.paperClip) {
      return fighter1
    } else if (fighter2 === this.rock && fighter1 === this.scissors || fighter1 === this.paperClip) {
      return fighter2
    } else if (fighter1 === this.paper && fighter2 === this.rock || fighter2 === this.tape) {
      return fighter1
    } else if (fighter2 === this.paper && fighter1 === this.rock || fighter1 === this.tape) {
      return fighter1
    } else if (fighter1 === this.scissors && fighter1 === this.paper || fighter1 === this.paperClip) {
      return fighter1
    } else if (fighter2 === this.scissors && fighter2 === this.paper || fighter2 === this.paperClip) {
      return fighter2
    } else if (fighter1 === this.paperClip && fighter2 === this.paper || fighter2 === this.tape) {
      return fighter1
    } else if (fighter2 === this.paperClip && fighter1 === this.paper || fighter1 === this.tape) {
      return fighter2
    } else if (fighter1 === this.tape && fighter2 === this.scissors || fighter2 === this.rock) {
      return fighter2
    } else if (fighter2 === this.tape && fighter1 === this.scissors || fighter1 === this.rock) {
      return fighter2
    }
  }

}
