// instantiation of Class
const newGame = new Game();
const player1 = new PlayerOne();
const player2 = new PlayerTwo();

// instantiation of class sound game
const failSound = new Soundgame("../son/end_turn.mp3");
const turnDice = new Soundgame("../son/son_dice.mp3");
const winGame = new Soundgame("../son/win.mp3");

// Event button new game
newGame.btnNewGame.addEventListener('click', (event) => {
  
  // Add Spedo
  player1.setSpeudo1()
  player2.setSpeudo2()

  // hidden dice
  newGame.removeDice(newGame)

  // turn player one
  newGame.currentTurn = 1;

  // player Active
  if (newGame.currentTurn === 1) {

    setTimeout(() => {
      player1.setPlayerOneActive(newGame, player1, player2)
    }, 1000)

  }
  else if (newGame.currentTurn === 2) {

    setTimeout(() => {
      player2.setPlayerTwoActive(newGame, player2, player1)
    }, 1000)

  }

  // btn Append
  newGame.setBtnAppend(newGame)



})



// Event button for roll dice

newGame.btnRollDice.addEventListener('click', newGame.setDebounce(function (e) {

  // sound of dice
  turnDice.playSound()

  // turn the dice
  newGame.setTurnDice(newGame);
  newGame.setRandomNumber(newGame, player1, player2, failSound)

  // player Active
  if (newGame.currentTurn === 1) {

    setTimeout(() => {
      player1.setPlayerOneActive(newGame, player1, player2)
    }, 1000)

  }
  else if (newGame.currentTurn === 2) {

    setTimeout(() => {
      player2.setPlayerTwoActive(newGame, player2, player1)
    }, 1000)

  }

}, 1000));



