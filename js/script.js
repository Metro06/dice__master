// instantiation of Class
const newGame = new Game();
const player1 = new PlayerOne();
const player2 = new PlayerTwo();
const newForms = new Forms();

// instantiation of class sound game
const failSound = new Soundgame("../sound_game/end_turn.mp3");
const turnDice = new Soundgame("../sound_game/Sound_dice.mp3");
const winGame = new Soundgame("../sound_game/win.mp3");
const hold = new Soundgame("../sound_game/hold.mp3");


// Reset Game

new Game

newGame.btnNewGame.addEventListener('click', () => {

  // reset game
  newGame.setResetGame(newGame, player1, player2)

})


// function for use the enter key in forms inputs
newForms.inputName1.addEventListener('keyup', (event) => {

  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();

    newForms.setFakeClickPlayer1(newForms)
  }
})

newForms.inputName2.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    newForms.setEnterClickStartGame(newForms)
  }

})


// Event start game
newForms.btnplayer2.addEventListener('click', (event) => {

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
      player1.setPlayerOneActive(player1, player2)
    }, 500)

  }
  else if (newGame.currentTurn === 2) {

    setTimeout(() => {
      player2.setPlayerTwoActive(player2, player1)
    }, 500)

  }

  // btn Append
  newGame.setBtnAppend(newGame)



})



// Event button for roll the dice

newGame.btnRollDice.addEventListener('click', newGame.setDebounce(() => {

  // sound of dice
  turnDice.playSound();

  // turn the dice
  newGame.setTurnDice(newGame);
  newGame.setRandomNumber(newGame, player1, player2, failSound);

  // player Active
  if (newGame.currentTurn === 1) {

    setTimeout(() => {
      player1.setPlayerOneActive(player1, player2);
    }, 1200);

  }
  else if (newGame.currentTurn === 2) {

    setTimeout(() => {
      player2.setPlayerTwoActive(player2, player1);
    }, 1200);

  }

}, 1500));


// Event btn hold

newGame.btnHold.addEventListener('click', newGame.setDebounce(function () {

  newGame.hold(newGame, player1, player2)
  hold.playSound();

  newGame.win(newGame, player1, player2)


  // player Active
  if (newGame.currentTurn === 1 && newGame.playerWinner === undefined) {


    setTimeout(() => {
      player1.setPlayerOneActive(player1, player2)
    }, 1200)


  } else if (newGame.currentTurn === 2 && newGame.playerWinner === undefined) {


    setTimeout(() => {
      player2.setPlayerTwoActive(player2, player1)
    }, 1200)

  }
}, 1500));










