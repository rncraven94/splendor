use: "strict";

let currentPlayer;
let playerOne;
let playerTwo;
const brownSetter = document.getElementById("brown-setter");
let brownSetterNumber = 7;
const greenSetter = document.getElementById("green-setter");
let greenSetterNumber = 7;
const silverSetter = document.getElementById("silver-setter");
let silverSetterNumber = 7;
const blueSetter = document.getElementById("blue-setter");
let blueSetterNumber = 7;
const redSetter = document.getElementById("red-setter");
let redSetterNumber = 7;

brownSetter.addEventListener("click", function () {
  brownSetterNumber--;
  brownSetter.textContent = brownSetterNumber;
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
