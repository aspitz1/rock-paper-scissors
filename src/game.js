class Game {
  constructor(fighters) {
    this.fighterOne = fighters.fighterOne
    this.fighterTwo = fighters.fighterTwo
    this.fighterThree = fighters.fighterThree
    this.fighterFour = fighters.fighterFour
    this.fighterFive = fighters.fighterFive
    this.gameFighterClassic = [this.fighterOne, this.fighterTwo, this.fighterThree]
    this.gameFighterExtra = [this.fighterOne, this.fighterTwo, this.fighterThree, this.fighterFour, this.fighterFive]
    this.currentGameStyle
  }

  setCurrentGameStyle(eventTargetDataAttribute) {
    this.currentGameStyle = this[`gameFighter${eventTargetDataAttribute}`]
  }

  fighterChoiceVsComputer(eventTargetDataAttribute, human, computer) {
    if (human.isTurn) {
      human.chooseFighter(eventTargetDataAttribute, this.currentGameStyle)
      human.isTurn = false
      computer.isTurn = true
    }
    if (computer.isTurn) {
      computer.randomFighter(this.currentGameStyle)
      human.isTurn = true
      computer.isTurn = false
    }
  }

  gameplayClassic(playerOne, playerTwo) {
    if (playerOne.fighter === this.fighterOne && playerTwo.fighter === this.fighterThree) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterOne && playerOne.fighter === this.fighterThree) {
      playerTwo.addWin()
      return playerTwo.fighter
    } else if (playerOne.fighter === this.fighterTwo && playerTwo.fighter === this.fighterOne) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterTwo && playerOne.fighter === this.fighterOne) {
      playerTwo.addWin()
      return playerTwo.fighter
    } else if (playerOne.fighter === this.fighterThree && playerTwo.fighter === this.fighterTwo) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterThree && playerOne.fighter === this.fighterTwo) {
      playerTwo.addWin()
      return playerTwo.fighter
    } else {
      return 'DRAW!'
    }
  }

  gameplayExtra(playerOne, playerTwo) {
    if (playerOne.fighter === playerTwo.fighter) {
      return 'DRAW!'
    } else if (playerOne.fighter === this.fighterOne && playerTwo.fighter === this.fighterThree || playerTwo.fighter === this.fighterFour) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterOne && playerOne.fighter === this.fighterThree || playerOne.fighter === this.fighterFour) {
      playerTwo.addWin()
      return playerTwo.fighter
    } else if (playerOne.fighter === this.fighterTwo && playerTwo.fighter === this.fighterOne || playerTwo.fighter === this.fighterFive) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterTwo && playerOne.fighter === this.fighterOne || playerOne.fighter === this.fighterFive) {
      playerTwo.addWin()
      return playerOne.fighter
    } else if (playerOne.fighter === this.fighterThree && playerOne.fighter === this.fighterTwo || playerOne.fighter === this.fighterFour) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterThree && playerTwo.fighter === this.fighterTwo || playerTwo.fighter === this.fighterFour) {
      playerTwo.addWin()
      return playerTwo.fighter
    } else if (playerOne.fighter === this.fighterFour && playerTwo.fighter === this.fighterTwo || playerTwo.fighter === this.fighterFive) {
      playerOne.addWin()
      return playerOne.fighter
    } else if (playerTwo.fighter === this.fighterFour && playerOne.fighter === this.fighterTwo || playerOne.fighter === this.fighterFive) {
      playerTwo.addWin()
      return playerTwo.fighter
    } else if (playerOne.fighter === this.fighterFive && playerTwo.fighter === this.fighterThree || playerTwo.fighter === this.fighterOne) {
      playerOne.addWin()
      return playerTwo.fighter
    } else if (playerTwo.fighter === this.fighterFive && playerOne.fighter === this.fighterThree || playerOne.fighter === this.fighterOne) {
      playerTwo.addWin()
      return playerTwo.fighter
    }
  }

}
