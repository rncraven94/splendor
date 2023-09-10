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
  if (!currentPlayer) {
    playerOneSection.classList.remove("active-player");
    playerTwoSection.classList.add("active-player");
  } else {
    playerOneSection.classList.add("active-player");
    playerTwoSection.classList.remove("active-player");
  }
});

brownSetter.addEventListener("click", function () {
  if ((currentCounter < 3 && brownCounter < 1 && brown > -1) || brown > 3) {
    brownSetterNumber--;
    brownSetter.textContent = brownSetterNumber;
    console.log(currentCounter, brownCounter);
    if (currentPlayer) {
      brownOneNumber++;
      brownOne.textContent = brownOneNumber;
    } else {
      brownTwoNumber++;
      brownTwo.textContent = brownTwoNumber;
    }
  }
  currentCounter++;
  brownCounter++;
  brown--;
});

greenSetter.addEventListener("click", function () {
  if ((currentCounter < 3 && greenCounter < 1 && green > -1) || green > 3) {
    greenSetterNumber--;
    greenSetter.textContent = greenSetterNumber;
    if (currentPlayer) {
      greenOneNumber++;
      greenOne.textContent = greenOneNumber;
    } else {
      greenTwoNumber++;
      greenTwo.textContent = greenTwoNumber;
    }
  }
  currentCounter++;
  greenCounter++;
  green--;
});

silverSetter.addEventListener("click", function () {
  silverSetterNumber--;
  silverSetter.textContent = silverSetterNumber;
  if (currentPlayer) {
    silverOneNumber++;
    silverOne.textContent = silverOneNumber;
  } else {
    silverTwoNumber++;
    silverTwo.textContent = silverTwoNumber;
  }
});

blueSetter.addEventListener("click", function () {
  blueSetterNumber--;
  blueSetter.textContent = blueSetterNumber;
  if (currentPlayer) {
    blueOneNumber++;
    blueOne.textContent = blueOneNumber;
  } else {
    blueTwoNumber++;
    blueTwo.textContent = blueTwoNumber;
  }
});
redSetter.addEventListener("click", function () {
  redSetterNumber--;
  redSetter.textContent = redSetterNumber;
  if (currentPlayer) {
    redOneNumber++;
    redOne.textContent = redOneNumber;
  } else {
    redTwoNumber++;
    redTwo.textContent = redTwoNumber;
  }
});
