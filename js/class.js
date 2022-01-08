class Game {

  constructor() {
    this.btnRollDice = document.getElementById('Roll__dice');
    this.btnHold = document.getElementById('btn__hold');
    this.btnNewGame = document.getElementById('new__game');
    this.dice = document.getElementById('dice');
    this.faceDiceRandom = document.getElementById('face__one')
    this.currentTurn = undefined;
    this.currentScore = 0;
    this.globalScore1 = 99;
    this.globalScore2 = 99;
    this.playerWinner = undefined;
    this.textWinner = document.getElementById('textWinner');
    this.displayModalWinner = document.getElementById('displayPlayerWinner');


  }


  setResetGame = function (g, p1, p2) {
    g.currentTurn = undefined;
    g.currentScore = 0;
    g.globalScore1 = 0;
    g.globalScore2 = 0;
    g.playerWinner = undefined;
    p1.setResetPlayerOne(p1)
    p2.setResetPlayerTwo(p2)
  }

  // turn the Dice for the player one or two
  setTurnDice = function (g) {

    // the player1 turn the dice 
    if (g.currentTurn === 1) {

      g.dice.classList.add('is-roll-dice-player-one')
      g.addDice(g)

      setTimeout(() => {
        g.dice.classList.remove('is-roll-dice-player-one')
      }, 1500);

      setTimeout(() => {
        g.removeDice(g)
      }, 2000);

      // the player2 turn the dice
    } else if (g.currentTurn) {

      g.dice.classList.add('is-roll-dice-player-two')
      g.addDice(g)


      setTimeout(() => {
        g.dice.classList.remove('is-roll-dice-player-two')
      }, 1500);

      setTimeout(() => {
        g.removeDice(g)
      }, 2000);

    }



  }

  // calculation of number random and add to current score active player
  setRandomNumber = function (g, p1, p2, fs) {

    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    const addCurrentScore = randomNumber;
    g.currentScore = addCurrentScore + g.currentScore;

    if (g.currentTurn === 1) {
      // add current score for player 1 if randomNumber different of 1
      if (randomNumber !== 1) {

        setTimeout(() => {
          p1.currentScore1.innerText = g.currentScore;
        }, 1000)

      } else {
        // reset current score for player 1 if randomNumber equal a 1
        // and changing currentTurn
        fs.playSound()
        p1.currentScore1.innerHTML = 0;
        g.currentTurn = 2;
        g.currentScore = 0;

      }

    } else if (g.currentTurn === 2) {

      if (randomNumber !== 1) {

        setTimeout(() => {
          p2.currentScore2.innerText = g.currentScore;
        }, 1000)

      } else {

        fs.playSound()
        p2.currentScore2.innerHTML = 0;
        g.currentTurn = 1;
        g.currentScore = 0;

      }

    }

    // change face dice
    switch (randomNumber) {
      case 1:
        this.faceDiceRandom.style.backgroundImage =
          "url(../image/dice-six-faces-one.svg)";
        break;
      case 2:
        this.faceDiceRandom.style.backgroundImage =
          "url(../image/dice-six-faces-two.svg)";
        break;
      case 3:
        this.faceDiceRandom.style.backgroundImage =
          "url(../image/dice-six-faces-three.svg)";
        break;
      case 4:
        this.faceDiceRandom.style.backgroundImage =
          "url(../image/dice-six-faces-four.svg)";
        break;
      case 5:
        this.faceDiceRandom.style.backgroundImage =
          "url(../image/dice-six-faces-five.svg)";
        break;
      case 6:
        this.faceDiceRandom.style.backgroundImage =
          "url(../image/dice-six-faces-six.svg)";
        break;
    }


  }


  // the function hold add to global score player active

  hold = function (g, p1, p2) {
    if (g.currentTurn === 1) {
      g.globalScore1 = g.currentScore + g.globalScore1;
      p1.score1Text.innerText = g.globalScore1;
      g.currentTurn = 2;
      p1.currentScore1.innerHTML = 0;
      g.currentScore = 0;


    } else if (g.currentTurn === 2) {

      g.globalScore2 = g.currentScore + g.globalScore2
      p2.score2Text.innerText = g.globalScore2;
      g.currentTurn = 1;
      p2.currentScore2.innerHTML = 0;
      g.currentScore = 0;

    }
  }


  // player winner
  win = function (g, p1, p2) {

    if (g.globalScore1 >= 100) {
      g.playerWinner = p1.speudo1;
      g.textWinner.innerText = `${g.playerWinner} has won this part!`
      jQuery('#playerWinner').modal('show');
      winGame.playSound();

      setTimeout(() => {
        g.setRemoveBtn(g)

      }, 1000)



      console.log(newGame.globalScore1)
      console.log(g.playerWinner)


    } else if (g.globalScore2 >= 100) {

      g.playerWinner = p2.speudo2;
      g.textWinner.innerText = `${g.playerWinner} has won this part!`

      jQuery('#playerWinner').modal('show');
      winGame.playSound();
      

      setTimeout(() => {
        g.setRemoveBtn(g)

      }, 1000)
      console.log(newGame.globalScore2)
    }

  }


  // stop the spam btn
  setDebounce = function (callback, delay) {
    var timer;
    return function () {
      var args = arguments;
      var context = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, delay)
    }
  }

  setRemoveBtn = function (g) {
    g.btnRollDice.classList.add('is-btn-hidden');
    g.btnHold.classList.add('is-btn-hidden');
  }

  // btn append
  setBtnAppend = function (g) {
    g.btnRollDice.classList.remove('is-btn-hidden');
    g.btnHold.classList.remove('is-btn-hidden');
  }

  // remove dice
  removeDice = function (g) {
    g.dice.classList.add('is-btn-hidden');
  }

  // add dice
  addDice = function (g) {
    g.dice.classList.remove('is-btn-hidden');
  }



}

class PlayerOne {

  constructor() {
    this.backgroundPlayerOne = document.getElementById('player__one');
    this.displaySpeudo1 = document.getElementById('player__one--name');
    this.inputName1 = document.getElementById('name1');
    this.speudo1 = undefined;
    this.score1Text = document.getElementById('player__one--score');
    this.currentScore1 = document.getElementById('player__one--currentScore');

  }

  getSpeudo1 = function () {
    this.speudo1
  }

  getScore1 = function () {
    this.score1
  }

  getCurrentScore1 = function () {
    this.currentScore1
  }


  // reset score
  setResetPlayerOne = function (p1) {
    p1.displaySpeudo1.innerHTML = "Player 1";
    p1.score1Text.innerHTML = 0;
    p1.currentScore1.innerHTML = 0
    p1.backgroundPlayerOne.classList.add('is-turn-player-active')
  }

  // modified spedo
  setSpeudo1 = function () {
    this.displaySpeudo1.innerHTML = this.inputName1.value;
    this.speudo1 = this.inputName1.value;

  }


  // modified background in active
  setPlayerOneActive = function (p1, p2) {

    p1.backgroundPlayerOne.classList.add('is-turn-player-active')
    p2.backgroundPlayerTwo.classList.remove('is-turn-player-active')
    p2.backgroundPlayerTwo.classList.add('is-turn-player-off')

  }

  // modified background in off
  setAddBackgroundPlayerOneOff = function () {
    this.backgroundPlayerOne.classList.add('is-turn-player-off')
  }

}

class PlayerTwo {

  constructor() {

    this.displaySpeudo2 = document.getElementById('player__two--name');
    this.inputName2 = document.getElementById('name2');
    this.speudo2 = undefined;
    this.score2Text = document.getElementById('player__two--score');
    this.currentScore2 = document.getElementById('player__two--currentScore');
    this.backgroundPlayerTwo = document.getElementById('player__two');

  }

  getSpeudo2 = function () {
    return this.speudo2
  }

  getScore2 = function () {
    return this.score2
  }

  getCurrentScore2 = function () {
    return this.currentScore2
  }

  setResetPlayerTwo = function (p2) {
    p2.displaySpeudo2.innerHTML = "Player 2";
    p2.score2Text.innerHTML = 0;
    p2.currentScore2.innerHTML = 0;
    p2.backgroundPlayerTwo.classList.add('is-turn-player-active')

  }


  setSpeudo2 = function () {
    this.displaySpeudo2.innerHTML = this.inputName2.value;
    this.speudo2 = this.inputName2.value;
  }


  setPlayerTwoActive = function (p2, p1) {


    p2.backgroundPlayerTwo.classList.add('is-turn-player-active')
    p1.backgroundPlayerOne.classList.remove('is-turn-player-active')
    p1.backgroundPlayerOne.classList.add('is-turn-player-off')


  }

  setAddBackgroundPlayerTwoOff = function () {
    this.backgroundPlayerTwo.classList.add('is-turn-player-off')
  }

}

class Soundgame {

  constructor(src) {

    // create document html audio
    this.sound = document.createElement("audio");

    // add src
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

  }

  playSound = function () {
    this.sound.play();
  }

  stopSound = function () {
    this.sound.pause();
  }


}

class Forms {

  constructor() {

    this.btnplayer1 = document.getElementById('next1');
    this.btnplayer2 = document.getElementById("next2");
    this.displayModalWinner = document.getElementById('displayPlayerWinner');
    this.inputName1 = document.getElementById("name1");
    this.inputName2 = document.getElementById("name2");

  }

  setFakeClickPlayer1 = function (f) {

    f.btnplayer1.click();

  }

  setEnterClickStartGame = function (f) {

    f.btnplayer2.click();

  }


}






