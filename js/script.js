// instantiation of Class
const newGame = new Game();
const player1 = new PlayerOne();
const player2 = new PlayerTwo();


newGame.btnNewGame.addEventListener('click', (event) => {  
  // Add Spedo
  player1.setSpeudo1()
  player2.setSpeudo2()

  // hidden dice
  newGame.removeDice(newGame)
  
  // turn player one
  newGame.currentTurn = 1;

  // playerActive
  if (newGame.currentTurn === 1) {
    player1.setPlayerOneActive(newGame, player1, player2)
  }
  else if ( newGame.currentTurn === 2) {
    player2.setPlayerTwoActive(newGame, player2, player1)
  }

  // btn Append
  newGame.setBtnAppend(newGame)

 
  
})





newGame.btnRollDice.addEventListener('click', newGame.setDebounce(function(e){
  
  newGame.setTurnDice(newGame);
  newGame.setRandomNumber(newGame, player1, player2)

  // playerActive
  if (newGame.currentTurn === 1) {
    player1.setPlayerOneActive(newGame, player1, player2)
  }
  else if ( newGame.currentTurn === 2) {
    player2.setPlayerTwoActive(newGame, player2, player1)
  }

}, 1000));










// console.log(newGame.btnRollDice)

