use: "strict";

const brownSetter = document.getElementById("brown-setter");
let brownSetterNumber = 7;

brownSetter.addEventListener("click", function () {
  brownSetterNumber--;
  brownSetter.textContent = brownSetterNumber;
});
