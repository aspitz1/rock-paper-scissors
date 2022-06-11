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
    let winner

    if (playerOne.fighter === this.fighterOne &&
      playerTwo.fighter === this.fighterThree) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterOne &&
      playerOne.fighter === this.fighterThree) {

      winner = playerTwo;

    } else if (playerOne.fighter === this.fighterTwo &&
      playerTwo.fighter === this.fighterOne) {

      winner = playeOne;

    } else if (playerTwo.fighter === this.fighterTwo &&
      playerOne.fighter === this.fighterOne) {

      winner = playerTwo;

    } else if (playerOne.fighter === this.fighterThree &&
      playerTwo.fighter === this.fighterTwo) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterThree &&
      playerOne.fighter === this.fighterTwo) {

      winner = playerTwo;

    } else {
      return 'DRAW!';
    }

    winner.addWin();
    return `The ${winner.playerToken} won!`
  }

  gameplayExtra(playerOne, playerTwo) {
    let winner

    if (playerOne.fighter === playerTwo.fighter) {
      return 'DRAW!';

    } else if (playerOne.fighter === this.fighterOne &&
      [this.fighterThree, this.fighterFour].includes(playerTwo.fighter )) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterOne &&
      [this.fighterThree, this.fighterFour].includes(playerOne.fighter)) {

      winner = playerTwo;

    } else if (playerOne.fighter === this.fighterTwo &&
      [this.fighterOne, this.fighterFive].includes(playerTwo.fighter)) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterTwo &&
      [this.fighterOne, this.fighterFive].includes(playerOne.fighter)) {

      winner = playerTwo;

    } else if (playerOne.fighter === this.fighterThree &&
      [this.fighterTwo, this.fighterFour].includes(playerOne.fighter)) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterThree &&
      [this.fighterTwo, this.fighterFour].includes(playerTwo.fighter)) {

      winner = playerTwo;

    } else if (playerOne.fighter === this.fighterFour &&
      [this.fighterTwo, this.fighterFive].includes(playerTwo.fighter)) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterFour &&
      [this.fighterTwo, this.fighterFive].includes(playerOne.fighter)) {

      winner = playerTwo;

    } else if (playerOne.fighter === this.fighterFive &&
      [this.fighterThree, this.fighterOne].includes(playerTwo.fighter)) {

      winner = playerOne;

    } else if (playerTwo.fighter === this.fighterFive &&
      [this.fighterThree, this.fighterOne].includes(playerOne.fighter)) {

      winner = playerTwo;
    }

    winner.addWin();
    return `The ${winner.playerToken} won!`
  }

}
