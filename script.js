use: "strict";

let currentPlayer = true;
let playerOne;
let playerTwo;
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

confirmButton.addEventListener("click", function () {
  currentPlayer = !currentPlayer;

  if (!currentPlayer) {
    playerOneSection.classList.remove("active-player");
    playerTwoSection.classList.add("active-player");
  } else {
    playerOneSection.classList.add("active-player");
    playerTwoSection.classList.remove("active-player");
  }
});

brownSetter.addEventListener("click", function () {
  brownSetterNumber--;
  brownSetter.textContent = brownSetterNumber;
  if (currentPlayer) {
    brownOneNumber++;
    brownOne.textContent = brownOneNumber;
  } else {
    brownTwoNumber++;
    brownTwo.textContent = brownTwoNumber;
  }
});

greenSetter.addEventListener("click", function () {
  greenSetterNumber--;
  greenSetter.textContent = greenSetterNumber;
});

silverSetter.addEventListener("click", function () {
  silverSetterNumber--;
  silverSetter.textContent = silverSetterNumber;
});

blueSetter.addEventListener("click", function () {
  blueSetterNumber--;
  blueSetter.textContent = blueSetterNumber;
});
redSetter.addEventListener("click", function () {
  redSetterNumber--;
  redSetter.textContent = redSetterNumber;
});
