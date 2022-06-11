class Game {
  constructor(fighters) {
    this.fighterOne = fighters.fighterOne
    this.fighterTwo = fighters.fighterTwo
    this.fighterThree = fighters.fighterThree
    this.fighterFour = fighters.fighterFour
    this.fighterFive = fighters.fighterFive
    this.gameFightersClassic = [this.fighterOne, this.fighterTwo,
      this.fighterThree]

    this.gameFightersExtra = [this.fighterOne, this.fighterTwo,
      this.fighterThree, this.fighterFour, this.fighterFive]

    this.currentGameStyle
    this.currentGameStyleName
  }

  setCurrentGameStyle(dataAttribute) {
    this.currentGameStyleName = dataAttribute
    this.currentGameStyle = this[`gameFighters${this.currentGameStyleName}`]
  }

  fighterChoiceVsComputer(eventTargetDataAttribute, human, computer) {
    human.changeTurns();
    if (human.isTurn) {
      human.chooseFighter(eventTargetDataAttribute, this.currentGameStyle)
      human.changeTurns()
      computer.changeTurns()
    }

    if (computer.isTurn) {
      computer.randomFighter(this.currentGameStyle);
      computer.changeTurns();
    }

  }

  gameplayClassic(playerOne, playerTwo) {
    if (playerOne.fighter === this.fighterOne && playerTwo.fighter === this.fighterThree) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterOne && playerOne.fighter === this.fighterThree) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    } else if (playerOne.fighter === this.fighterTwo && playerTwo.fighter === this.fighterOne) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterTwo && playerOne.fighter === this.fighterOne) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    } else if (playerOne.fighter === this.fighterThree && playerTwo.fighter === this.fighterTwo) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`
    } else if (playerTwo.fighter === this.fighterThree && playerOne.fighter === this.fighterTwo) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won`;
    } else {
      return 'DRAW!';
    }
  }

  gameplayExtra(playerOne, playerTwo) {
    if (playerOne.fighter === playerTwo.fighter) {
      return 'DRAW!';
    } else if (playerOne.fighter === this.fighterOne && playerTwo.fighter === this.fighterThree || playerTwo.fighter === this.fighterFour) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterOne && playerOne.fighter === this.fighterThree || playerOne.fighter === this.fighterFour) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    } else if (playerOne.fighter === this.fighterTwo && playerTwo.fighter === this.fighterOne || playerTwo.fighter === this.fighterFive) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterTwo && playerOne.fighter === this.fighterOne || playerOne.fighter === this.fighterFive) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    } else if (playerOne.fighter === this.fighterThree && playerOne.fighter === this.fighterTwo || playerOne.fighter === this.fighterFour) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterThree && playerTwo.fighter === this.fighterTwo || playerTwo.fighter === this.fighterFour) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    } else if (playerOne.fighter === this.fighterFour && playerTwo.fighter === this.fighterTwo || playerTwo.fighter === this.fighterFive) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterFour && playerOne.fighter === this.fighterTwo || playerOne.fighter === this.fighterFive) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    } else if (playerOne.fighter === this.fighterFive && playerTwo.fighter === this.fighterThree || playerTwo.fighter === this.fighterOne) {
      playerOne.addWin();
      return `The ${playerOne.playerToken} won!`;
    } else if (playerTwo.fighter === this.fighterFive && playerOne.fighter === this.fighterThree || playerOne.fighter === this.fighterOne) {
      playerTwo.addWin();
      return `The ${playerTwo.playerToken} won!`;
    }
  }

}
