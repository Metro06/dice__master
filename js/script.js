
const btnNewGame = document.getElementById('new__game')

// instantiation of Class
let newGame = new Game();
let player1 = new PlayerOne();
let player2 = new PlayerTwo();



btnNewGame.addEventListener('click', (event) => {  
  // Add Spedo
  player1.setSpeudo1()
  player2.setSpeudo2()
  
  newGame.currentTurn = 2;

  // playerActive
  player1.setPlayerOneActive(newGame, player1, player2)
  player2.setPlayerTwoActive(newGame, player2, player1)

  // btn Append
  newGame.setBtnAppend(newGame)

 
  
})





newGame.btnRollDice.addEventListener('click', newGame.setDebounce(function(e){
  
  newGame.setTurnDice(newGame);
  newGame.setRandomNumber(newGame, player1, player2)

}, 1000));










// console.log(newGame.btnRollDice)

