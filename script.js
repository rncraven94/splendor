use: "strict";
import {
  cardsLevelOne,
  cardsLevelThree,
  cardsLevelTwo,
  nobles,
} from "./cards.js";

// import cardsLevelThree from "./cards";

let currentPlayer = true;
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
let brownOneSubPoint = 0;
let greenOneSubPoint = 0;
let silverOneSubPoint = 0;
let blueOneSubPoint = 0;
let redOneSubPoint = 0;
let brownTwoSubPoint = 0;
let greenTwoSubPoint = 0;
let silverTwoSubPoint = 0;
let blueTwoSubPoint = 0;
let redTwoSubPoint = 0;
const playerOneScoreText = document.getElementById("player-one-score");
let playerOneScore = 0;
const playerTwoScoreText = document.getElementById("player-two-score");
let playerTwoScore = 0;

// const purchaseBtn = document.getElementById("purchase-btn");
const newGameButton = document.getElementById("new-game");
const undoButton = document.getElementById("undo-button");
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
const hidden = document.getElementById("hidden");
const hidden1 = document.getElementById("hidden1");
const hidden2 = document.getElementById("hidden2");
let redTwoNumber = 0;
let brownOnePurchase;
let greenOnePurchase;
let silverOnePurchase;
let blueOnePurchase;
let redOnePurchase;
let brownTwoPurchase;
let greenTwoPurchase;
let silverTwoPurchase;
let blueTwoPurchase;
let redTwoPurchase;

// button functions

const helper = document.getElementById("help");
function help() {
  //help section for rules
  window.open("howtoplay.html", "_blank");
}
helper.addEventListener("click", help);

//switching players
function switchPlayers() {
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

  if (playerOneScore >= 15) {
    hidden.classList.remove("hidden");
    hidden1.classList.remove("hidden1");
    hidden1.classList.add("winner");

    //
  } else if (playerTwoScore >= 15) {
    //
    hidden.classList.remove("hidden");
    hidden2.classList.remove("hidden2");
    hidden2.classList.add("winner");
  }
}

confirmButton.addEventListener("click", switchPlayers);

//undoing current gem selection in the setters
undoButton.addEventListener("click", function () {
  currentCounter = 0;
  //brown section
  brownSetterNumber = brownSetterNumber + brownCounter;
  brownSetter.textContent = brownSetterNumber;
  brown = brown + brownCounter;
  //green section
  greenSetterNumber = greenSetterNumber + greenCounter;
  greenSetter.textContent = greenSetterNumber;
  green = green + greenCounter;
  //silver section
  silverSetterNumber = silverSetterNumber + silverCounter;
  silverSetter.textContent = silverSetterNumber;
  silver = silver + silverCounter;
  //blue section
  blueSetterNumber = blueSetterNumber + blueCounter;
  blueSetter.textContent = blueSetterNumber;
  blue = blue + blueCounter;
  //red section
  redSetterNumber = redSetterNumber + redCounter;
  redSetter.textContent = redSetterNumber;
  red = red + redCounter;
  if (currentPlayer) {
    //brown section
    brownOneNumber = brownOneNumber - brownCounter;
    brownOne.textContent = brownOneNumber;
    brownCounter = 0;
    //green section
    greenOneNumber = greenOneNumber - greenCounter;
    greenOne.textContent = greenOneNumber;
    greenCounter = 0;
    //silver section
    silverOneNumber = silverOneNumber - silverCounter;
    silverOne.textContent = silverOneNumber;
    silverCounter = 0;
    //blue section
    blueOneNumber = blueOneNumber - blueCounter;
    blueOne.textContent = blueOneNumber;
    blueCounter = 0;
    //red section
    redOneNumber = redOneNumber - redCounter;
    redOne.textContent = redOneNumber;
    redCounter = 0;
  } else {
    //brown section
    brownTwoNumber = brownTwoNumber - brownCounter;
    brownTwo.textContent = brownTwoNumber;
    brownCounter = 0;
    //green section
    greenTwoNumber = greenTwoNumber - greenCounter;
    greenTwo.textContent = greenTwoNumber;
    greenCounter = 0;
    //silver section
    silverTwoNumber = silverTwoNumber - silverCounter;
    silverTwo.textContent = silverTwoNumber;
    silverCounter = 0;
    //blue section
    blueTwoNumber = blueTwoNumber - blueCounter;
    blueTwo.textContent = blueTwoNumber;
    blueCounter = 0;
    //red section
    redTwoNumber = redTwoNumber - redCounter;
    redTwo.textContent = redTwoNumber;
    redCounter = 0;
  }
});

//new game function reloads the webpage and all the functions and cards are back to their original place
newGameButton.addEventListener("click", function () {
  location.reload();
});

//loading the dom with random cards of the three levels

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//shuffling the arrays of the stacks of cards
shuffleArray(cardsLevelOne);
shuffleArray(cardsLevelTwo);
shuffleArray(cardsLevelThree);
shuffleArray(nobles);

let visibleRow1 = cardsLevelOne.slice(0, 4);
let visibleRow2 = cardsLevelTwo.slice(0, 4);
let visibleRow3 = cardsLevelThree.slice(0, 4);
let visibleRow4 = nobles.slice(0, 3);

// Define the purchaseCard function first
function displayAndPurchaseCards(
  cards,
  visibleRow,
  purchaseCardFunction,
  maxCards = 4
) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards

  for (let i = 0; i < cards.length; i++) {
    const cardRow = document.createElement("div");
    cardRow.classList.add("card-row");

    cards[i].slice(0, maxCards).forEach((card, index) => {
      const cardElement = createCardElement(card, index, purchaseCardFunction);
      cardRow.appendChild(cardElement);
    });

    cardContainer.appendChild(cardRow);
  }

  function createCardElement(card, index, purchaseCardFunction) {
    const cardElement = document.createElement("div");
    const cardName = card;
    cardElement.classList.add("card");

    cardElement.innerHTML = ` <div class="card-box ${
      card.mainColor //colors the card
    }-box-color card-${card.arrayType}">  
      <p class="card-point-value card-list">${
        card.pointValue //point value gives whomever purchases the card points that ultimately lead to winning
      }</p> <p class="card-list card-value"> <p>${
      //all the values here are the qualifiers to buy the card
      card.brown > 0 ? `Brown: ${card.brown}` : ""
    }</p> <p>${card.green > 0 ? `Green: ${card.green}` : ""}</p><p>${
      card.silver > 0 ? `Silver: ${card.silver}` : ""
    }</p> <p>${card.blue > 0 ? `Blue:  ${card.blue}` : ""}</p> <p>${
      card.red > 0 ? `Red:   ${card.red}` : ""
    }</p></p>  <button class="purchase-btn" data-card-index="${index}"">Purchase</button> </div>`; //this snippet is where the user purchases

    const purchaseBtn = cardElement.querySelector(".purchase-btn");

    purchaseBtn.addEventListener("click", function () {
      const cardIndex = card;
      const arrayIndex = this.getAttribute("data-array-index");
      purchaseCardFunction(cardIndex, arrayIndex, cardName); // Pass the current array index

      //code for adding new card to take its place

      if (currentCounter < 1) {
        if (
          brownOnePurchase >= card.brown &&
          greenOnePurchase >= card.green &&
          silverOnePurchase >= card.silver &&
          blueOnePurchase >= card.blue &&
          redOnePurchase >= card.red
        ) {
          if (card.arrayType === 1) {
            const parent = cardElement.parentElement;
            cardsLevelOne.shift();

            if (cardsLevelOne.length > 0) {
              const newCard = cardsLevelOne[3]; // Get the new card
              const newCardElement = createCardElement(
                newCard,
                index,
                purchaseCardFunction
              );
              parent.replaceChild(newCardElement, cardElement);
            } else {
              cardElement.innerHTML = "";
            }
          } else if (card.arrayType === 2) {
            const parent = cardElement.parentElement;
            cardsLevelTwo.shift();

            if (cardsLevelTwo.length > 0) {
              const newCard = cardsLevelTwo[3];
              const newCardElement = createCardElement(
                newCard,
                index,
                purchaseCardFunction
              );
              parent.replaceChild(newCardElement, cardElement);
            } else {
              cardElement.innerHTML = "";
            }
          } else if (card.arrayType === 3) {
            const parent = cardElement.parentElement;
            cardsLevelThree.shift();

            if (cardsLevelThree.length > 0) {
              const newCard = cardsLevelThree[3];
              const newCardElement = createCardElement(
                newCard,
                index,
                purchaseCardFunction
              );
              parent.replaceChild(newCardElement, cardElement);
            } else {
              cardElement.innerHTML = "";
            }
          } else if (card.arrayType === 4) {
            cardElement.innerHTML = "";
          }
        } else if (
          brownTwoPurchase >= card.brown &&
          greenTwoPurchase >= card.green &&
          silverTwoPurchase >= card.silver &&
          blueTwoPurchase >= card.blue &&
          redTwoPurchase >= card.red
        ) {
          if (card.arrayType === 1) {
            const parent = cardElement.parentElement;
            cardsLevelOne.shift();

            if (cardsLevelOne.length > 0) {
              const newCard = cardsLevelOne[3]; // Get the new card
              const newCardElement = createCardElement(
                newCard,
                index,
                purchaseCardFunction
              );
              parent.replaceChild(newCardElement, cardElement);
            } else {
              cardElement.innerHTML = "";
            }
          } else if (card.arrayType === 2) {
            const parent = cardElement.parentElement;
            cardsLevelTwo.shift();

            if (cardsLevelTwo.length > 0) {
              const newCard = cardsLevelTwo[3];
              const newCardElement = createCardElement(
                newCard,
                index,
                purchaseCardFunction
              );
              parent.replaceChild(newCardElement, cardElement);
            } else {
              cardElement.innerHTML = "";
            }
          } else if (card.arrayType === 3) {
            const parent = cardElement.parentElement;
            cardsLevelThree.shift();

            if (cardsLevelThree.length > 0) {
              const newCard = cardsLevelThree[3];
              const newCardElement = createCardElement(
                newCard,
                index,
                purchaseCardFunction
              );
              parent.replaceChild(newCardElement, cardElement);
            } else {
              cardElement.innerHTML = "";
            }
          } else if (card.arrayType === 4) {
            cardElement.innerHTML = "";
          }
        }
      }
    });

    return cardElement;
  }
}
displayAndPurchaseCards(
  [cardsLevelOne, cardsLevelTwo, cardsLevelThree, nobles],
  [visibleRow1, visibleRow2, visibleRow3, visibleRow4],
  purchaseCard
);
function purchaseCard(cardIndex, arrayIndex) {
  if (currentCounter < 1) {
    if ((currentPlayer = true)) {
      if (
        brownOneNumber >= cardIndex.brown &&
        greenOneNumber >= cardIndex.green &&
        silverOneNumber >= cardIndex.silver &&
        blueOneNumber >= cardIndex.blue &&
        redOneNumber >= cardIndex.red
      ) {
        //brown
        brownOnePurchase = brownOneNumber;
        brownOneNumber = brownOneSubPoint;
        brownSetterNumber = brownSetterNumber + cardIndex.brown;
        brownSetter.textContent = brownSetterNumber;
        brown = brownSetterNumber;
        brownOneSubPoint = brownOneSubPoint + cardIndex.subpoints.brown;
        brownOneNumber = brownOneNumber + cardIndex.subpoints.brown;
        brownOne.textContent = brownOneNumber;

        //green
        greenOnePurchase = greenOneNumber;
        greenOneNumber = greenOneSubPoint;
        greenSetterNumber = greenSetterNumber + cardIndex.green;
        greenSetter.textContent = greenSetterNumber;
        green = greenSetterNumber;
        greenOneSubPoint = greenOneSubPoint + cardIndex.subpoints.green;
        greenOneNumber = greenOneNumber + cardIndex.subpoints.green;
        greenOne.textContent = greenOneNumber;

        //silver
        silverOnePurchase = silverOneNumber;
        silverOneNumber = silverOneSubPoint;
        silverSetterNumber = silverSetterNumber + cardIndex.silver;
        silverSetter.textContent = silverSetterNumber;
        silver = silverSetterNumber;
        silverOneSubPoint = silverOneSubPoint + cardIndex.subpoints.silver;
        silverOneNumber = silverOneNumber + cardIndex.subpoints.silver;
        silverOne.textContent = silverOneNumber;

        //blue
        blueOnePurchase = blueOneNumber;
        blueOneNumber = blueOneSubPoint;
        blueSetterNumber = blueSetterNumber + cardIndex.blue;
        blueSetter.textContent = blueSetterNumber;
        blue = blueSetterNumber;
        blueOneSubPoint = blueOneSubPoint + cardIndex.subpoints.blue;
        blueOneNumber = blueOneNumber + cardIndex.subpoints.blue;
        blueOne.textContent = blueOneNumber;
        //red
        redOnePurchase = redOneNumber;
        redOneNumber = redOneSubPoint;
        redSetterNumber = redSetterNumber + cardIndex.red;
        redSetter.textContent = redSetterNumber;
        red = redSetterNumber;
        redOneSubPoint = redOneSubPoint + cardIndex.subpoints.red;
        redOneNumber = redOneNumber + cardIndex.subpoints.red;
        redOne.textContent = redOneNumber;

        // points
        playerOneScore = playerOneScore + cardIndex.pointValue;
        playerOneScoreText.textContent = playerOneScore;
        //switching to the next player
        switchPlayers();
        // corrections
        if (brownSetterNumber > 7) {
          brownSetterNumber = 7;
          brownSetter.textContent = brownSetterNumber;
        }
        if (greenSetterNumber > 7) {
          greenSetterNumber = 7;
          greenSetter.textContent = greenSetterNumber;
        }

        if (silverSetterNumber > 7) {
          silverSetterNumber = 7;
          silverSetter.textContent = silverSetterNumber;
        }

        if (blueSetterNumber > 7) {
          blueSetterNumber = 7;
          blueSetter.textContent = blueSetterNumber;
        }
        if (redSetterNumber > 7) {
          redSetterNumber = 7;
          redSetter.textContent = redSetterNumber;
        }
      }
    }
    if (
      brownTwoNumber >= cardIndex.brown &&
      greenTwoNumber >= cardIndex.green &&
      silverTwoNumber >= cardIndex.silver &&
      blueTwoNumber >= cardIndex.blue &&
      redTwoNumber >= cardIndex.red
    ) {
      //brown
      brownTwoPurchase = brownTwoNumber;
      brownTwoNumber = brownTwoSubPoint;
      brownSetterNumber = brownSetterNumber + cardIndex.brown;
      brownSetter.textContent = brownSetterNumber;
      brown = brownSetterNumber;
      brownTwoSubPoint = brownTwoSubPoint + cardIndex.subpoints.brown;
      brownTwoNumber = brownTwoNumber + cardIndex.subpoints.brown;
      brownTwo.textContent = brownTwoNumber;
      //green
      greenTwoPurchase = greenTwoNumber;
      greenTwoNumber = greenTwoSubPoint;
      greenSetterNumber = greenSetterNumber + cardIndex.green;
      greenSetter.textContent = greenSetterNumber;
      green = greenSetterNumber;

      greenTwoSubPoint = greenTwoSubPoint + cardIndex.subpoints.green;
      greenTwoNumber = greenTwoNumber + cardIndex.subpoints.green;
      greenTwo.textContent = greenTwoNumber;
      //silver
      silverTwoPurchase = silverTwoNumber;
      silverTwoNumber = silverTwoSubPoint;
      silverSetterNumber = silverSetterNumber + cardIndex.silver;
      silverSetter.textContent = silverSetterNumber;
      silver = silverSetterNumber;
      silverTwoSubPoint = silverTwoSubPoint + cardIndex.subpoints.silver;
      silverTwoNumber = silverTwoNumber + cardIndex.subpoints.silver;
      silverTwo.textContent = silverTwoNumber;
      //blue
      blueTwoPurchase = blueTwoNumber;
      blueTwoNumber = blueTwoSubPoint;
      blueSetterNumber = blueSetterNumber + cardIndex.blue;
      blueSetter.textContent = blueSetterNumber;
      blue = blueSetterNumber;
      blueTwoSubPoint = blueTwoSubPoint + cardIndex.subpoints.blue;
      blueTwoNumber = blueTwoNumber + cardIndex.subpoints.blue;
      blueTwo.textContent = blueTwoNumber;
      //red
      redTwoPurchase = redTwoNumber;
      redTwoNumber = redTwoSubPoint;
      redSetterNumber = redSetterNumber + cardIndex.red;
      redSetter.textContent = redSetterNumber;
      red = redSetterNumber;
      redTwoSubPoint = redTwoSubPoint + cardIndex.subpoints.red;
      redTwoNumber = redTwoNumber + cardIndex.subpoints.red;
      redTwo.textContent = redTwoNumber;

      //score
      playerTwoScore = playerTwoScore + cardIndex.pointValue;
      console.log(playerTwoScore);
      playerTwoScoreText.textContent = playerTwoScore;
      switchPlayers();
      switchPlayers();
      if (brownSetterNumber > 7) {
        brownSetterNumber = 7;
        brownSetter.textContent = brownSetterNumber;
      }
      if (greenSetterNumber > 7) {
        greenSetterNumber = 7;
        greenSetter.textContent = greenSetterNumber;
      }

      if (silverSetterNumber > 7) {
        silverSetterNumber = 7;
        silverSetter.textContent = silverSetterNumber;
      }

      if (blueSetterNumber > 7) {
        blueSetterNumber = 7;
        blueSetter.textContent = blueSetterNumber;
      }
      if (redSetterNumber > 7) {
        redSetterNumber = 7;
        redSetter.textContent = redSetterNumber;
      }
    }
  }
}

//display row one

// Usage:

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
