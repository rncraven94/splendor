use: "strict";

let currentPlayer = true;
let playerOne;
let playerTwo;
let currentCounter = 0;
let brownCounter = 0;
let brown = 7;
let greenCounter = 0;
let green = 7;
let silverCounter = 0;
let silver = 7;
let blueCounter = 0;
let blue = 7;
let redCounter = 0;
let red = 7;
playerOne = currentPlayer;
const newGameButton = document.getElementById("new-game");
const confirmButton = document.getElementById("confirm-button");
const brownSetter = document.getElementById("brown-setter");
const playerOneSection = document.getElementById("player-one");
const playerTwoSection = document.getElementById("player-two");
let brownSetterNumber = 7;
const greenSetter = document.getElementById("green-setter");
let greenSetterNumber = 7;
const silverSetter = document.getElementById("silver-setter");
let silverSetterNumber = 7;
const blueSetter = document.getElementById("blue-setter");
let blueSetterNumber = 7;
const redSetter = document.getElementById("red-setter");
let redSetterNumber = 7;
const brownOne = document.getElementById("player-one-brown");
let brownOneNumber = 0;
const brownTwo = document.getElementById("player-two-brown");
let brownTwoNumber = 0;
const greenOne = document.getElementById("player-one-green");
let greenOneNumber = 0;
const greenTwo = document.getElementById("player-two-green");
let greenTwoNumber = 0;
const silverOne = document.getElementById("player-one-silver");
let silverOneNumber = 0;
const silverTwo = document.getElementById("player-two-silver");
let silverTwoNumber = 0;
const blueOne = document.getElementById("player-one-blue");
let blueOneNumber = 0;
const blueTwo = document.getElementById("player-two-blue");
let blueTwoNumber = 0;
const redOne = document.getElementById("player-one-red");
let redOneNumber = 0;
const redTwo = document.getElementById("player-two-red");
let redTwoNumber = 0;

confirmButton.addEventListener("click", function () {
  currentPlayer = !currentPlayer;
  currentCounter = 0;
  brownCounter = 0;
  greenCounter = 0;
  silverCounter = 0;
  blueCounter = 0;
  redCounter = 0;
  if (!currentPlayer) {
    playerOneSection.classList.remove("active-player");
    playerTwoSection.classList.add("active-player");
  } else {
    playerOneSection.classList.add("active-player");
    playerTwoSection.classList.remove("active-player");
  }
});

newGameButton.addEventListener("click", function () {
  currentPlayer = playerOne;
  playerOneSection.classList.add("active-player");
  playerTwoSection.classList.remove("active-player");
  currentCounter = 0;
  //brown section
  brownCounter = 0;
  brownSetterNumber = 7;
  brownSetter.textContent = brownSetterNumber;
  brown = 7;
  brownOneNumber = 0;
  brownTwoNumber = 0;
  brownOne.textContent = brownOneNumber;
  brownTwo.textContent = brownTwoNumber;

  //green section
  greenCounter = 0;
  greenSetterNumber = 7;
  greenSetter.textContent = greenSetterNumber;
  green = 7;
  greenOneNumber = 0;
  greenTwoNumber = 0;
  greenOne.textContent = greenOneNumber;
  greenTwo.textContent = greenTwoNumber;

  //silver section
  silverCounter = 0;
  silverSetterNumber = 7;
  silverSetter.textContent = silverSetterNumber;
  silver = 7;
  silverOneNumber = 0;
  silverTwoNumber = 0;
  silverOne.textContent = silverOneNumber;
  silverTwo.textContent = silverTwoNumber;

  //blue section
  blueCounter = 0;
  blueSetterNumber = 7;
  blueSetter.textContent = blueSetterNumber;
  blue = 7;
  blueOneNumber = 0;
  blueTwoNumber = 0;
  blueOne.textContent = blueOneNumber;
  blueTwo.textContent = blueTwoNumber;
  redCounter = 0;
});

brownSetter.addEventListener("click", function () {
  if (currentCounter < 3 && brownCounter < 2 && brown >= 1) {
    if (
      (brown > 3 && currentCounter < 2) ||
      (currentCounter <= 2 && brownCounter < 1)
    ) {
      if (
        silverCounter < 2 &&
        greenCounter < 2 &&
        blueCounter < 2 &&
        redCounter < 2
      ) {
        brownSetterNumber--;
        brownSetter.textContent = brownSetterNumber;
        currentCounter++;
        brownCounter++;
        brown--;
        console.log(currentCounter, brownCounter, brown);
        if (currentPlayer) {
          brownOneNumber++;
          brownOne.textContent = brownOneNumber;
        } else {
          brownTwoNumber++;
          brownTwo.textContent = brownTwoNumber;
        }
      }
    }
  }
});

greenSetter.addEventListener("click", function () {
  if (currentCounter < 3 && greenCounter < 2 && green >= 1) {
    if (
      (green > 3 && currentCounter < 2) ||
      (currentCounter <= 2 && greenCounter < 1)
    ) {
      if (
        brownCounter < 2 &&
        silverCounter < 2 &&
        blueCounter < 2 &&
        redCounter < 2
      ) {
        greenSetterNumber--;
        currentCounter++;
        greenCounter++;
        green--;
        greenSetter.textContent = greenSetterNumber;
        if (currentPlayer) {
          greenOneNumber++;
          greenOne.textContent = greenOneNumber;
        } else {
          greenTwoNumber++;
          greenTwo.textContent = greenTwoNumber;
        }
      }
    }
  }
});

silverSetter.addEventListener("click", function () {
  if (currentCounter < 3 && silverCounter < 2 && silver >= 1) {
    if (
      (silver > 3 && currentCounter < 2) ||
      (currentCounter <= 2 && silverCounter < 1)
    ) {
      if (
        brownCounter < 2 &&
        greenCounter < 2 &&
        blueCounter < 2 &&
        redCounter < 2
      ) {
        silverSetterNumber--;
        currentCounter++;
        silverCounter++;
        silver--;
        silverSetter.textContent = silverSetterNumber;
        if (currentPlayer) {
          silverOneNumber++;
          silverOne.textContent = silverOneNumber;
        } else {
          silverTwoNumber++;
          silverTwo.textContent = silverTwoNumber;
        }
      }
    }
  }
});

blueSetter.addEventListener("click", function () {
  if (currentCounter < 3 && blueCounter < 2 && blue >= 1) {
    if (
      (blue > 3 && currentCounter < 2) ||
      (currentCounter <= 2 && blueCounter < 1)
    ) {
      if (
        brownCounter < 2 &&
        greenCounter < 2 &&
        silverCounter < 2 &&
        redCounter < 2
      ) {
        blueSetterNumber--;
        currentCounter++;
        blueCounter++;
        blue--;
        blueSetter.textContent = blueSetterNumber;
        if (currentPlayer) {
          blueOneNumber++;
          blueOne.textContent = blueOneNumber;
        } else {
          blueTwoNumber++;
          blueTwo.textContent = blueTwoNumber;
        }
      }
    }
  }
});
redSetter.addEventListener("click", function () {
  if (currentCounter < 3 && redCounter < 2 && red >= 1) {
    if (
      (red > 3 && currentCounter < 2) ||
      (currentCounter <= 2 && redCounter < 1)
    ) {
      if (
        brownCounter < 2 &&
        greenCounter < 2 &&
        silverCounter < 2 &&
        blueCounter < 2
      ) {
        redSetterNumber--;
        currentCounter++;
        redCounter++;
        red--;
        redSetter.textContent = redSetterNumber;
        if (currentPlayer) {
          redOneNumber++;
          redOne.textContent = redOneNumber;
        } else {
          redTwoNumber++;
          redTwo.textContent = redTwoNumber;
        }
      }
    }
  }
});
