use: "strict";

let cardsLevelOne = [];
let cardsLevelTwo = [];
let cardsLevelThree = [];

let card1 = {
  mainColor: "brown",
  pointValue: 0,
  brown: 0,
  blue: 1,
  green: 1,
  red: 1,
  silver: 1,
};
cardsLevelOne.push(card1);
let card2 = {
  mainColor: "brown",
  pointValue: 0,
  brown: 0,
  blue: 2,
  green: 1,
  red: 1,
  silver: 1,
};
cardsLevelOne.push(card2);
let card3 = {
  mainColor: "brown",
  pointValue: 0,
  brown: 0,
  blue: 2,
  green: 0,
  red: 1,
  silver: 2,
};
cardsLevelOne.push(card3);
let card4 = {
  mainColor: "brown",
  pointValue: 0,
  brown: 1,
  blue: 0,
  green: 1,
  red: 3,
  silver: 0,
};
cardsLevelOne.push(card4);

export default cardsLevelOne && cardsLevelTwo && cardsLevelThree;
