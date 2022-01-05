class Game {

  constructor() {
    this.currentTurn = undefined;
    this.playerWinner = undefined;
    this.currentScore = 0;
    this.dice = document.getElementById('dice');
    this.faceDiceRandom = document.getElementById('face__one')
    this.btnRollDice = document.getElementById('Roll__dice');
    this.btnHold = document.getElementById('btn__hold');
    this.btnNewGame = document.getElementById('new__game');


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

  // btn append
  setBtnAppend = function (g) {
    g.btnRollDice.classList.remove('is-btn-hidden');
    g.btnHold.classList.remove('is-btn-hidden');
  }


  // Number random and add score to current player
  setRandomNumber = function (g, p1, p2, fs) {

    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    const addCurrentScore = randomNumber;
    g.currentScore = addCurrentScore + g.currentScore;

    if (g.currentTurn === 1) {
      // add current score for player 1 if randomNumber different of 1
      if (randomNumber !== 1) {

        setTimeout( () => {
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

        setTimeout( () => {
          p2.currentScore2.innerText = g.currentScore;
        },1000)   

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

  // remove dice
  removeDice = function (g) {
    g.dice.classList.add('is-btn-hidden');
  }

  // add dice
  addDice = function (g) {
    g.dice.classList.remove('is-btn-hidden');
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
    } else {

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


}

class PlayerOne {

  constructor() {
    this.speudo1 = document.getElementById('player__one--name');
    this.score1 = document.getElementById('player__one--score');
    this.currentScore1 = document.getElementById('player__one--currentScore');
    this.enterName1 = document.getElementById('name1')
    this.backgroundPlayerOne = document.getElementById('player__one');

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
  setResetPlayerOne = function () {
    this.score1.innerHTML = 0;
    this.currentScore1.innerHTML = 0
  }

  // modified spedo
  setSpeudo1 = function () {
    this.speudo1.innerHTML = this.enterName1.value;
  }


  // modified background in active
  setPlayerOneActive = function (g, p1, p2) {

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

    this.speudo2 = document.getElementById('player__two--name');
    this.score2 = document.getElementById('player__two--score');
    this.currentScore2 = document.getElementById('player__two--currentScore');
    this.enterName2 = document.getElementById('name2');
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

  setResetPlayerTwo = function () {

    this.score2.innerHTML = 0;
    this.currentScore2.innerHTML = 0;

  }


  setSpeudo2 = function () {
    this.speudo2.innerHTML = this.enterName2.value;
  }


  setPlayerTwoActive = function (g, p2, p1) {


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






