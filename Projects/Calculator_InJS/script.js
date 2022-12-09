"use strict";

const displayEl = document.querySelector("#display");
//digit-Element
const zeroEl = document.querySelector(".zero");
const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");

//operators-Element
const divideEl = document.querySelector(".divide");
const multiplyEl = document.querySelector(".multiply");
const minusEl = document.querySelector(".minus");
const addEl = document.querySelector(".add");
const equalEl = document.querySelector(".equal");

//operations
let result = "";
let elementArray = [];
// console.log(displayEl.value);

const digitArray = [
  zeroEl,
  oneEl,
  twoEl,
  threeEl,
  fourEl,
  fiveEl,
  sixEl,
  sevenEl,
  eightEl,
  nineEl,
];
digitArray.forEach((digitEl) => {
  digitEl.addEventListener("click", function () {
    // console.log(digitEl);
    let value = digitEl.textContent;
    result += value;
    displayEl.value = result;
  });
});

const operatorArray = [divideEl, multiplyEl, minusEl, addEl];
operatorArray.forEach((operatorEL) => {
  operatorEL.addEventListener("click", function () {
    elementArray.push(Number(result));
    elementArray.push(operatorEL.textContent);
    result = "";
  });
});

equalEl.addEventListener("click", function () {
  elementArray.push(Number(result));
  const operatorElementInArray = elementArray[1];
  if (operatorElementInArray === "+") {
    result = elementArray[0] + elementArray[2];
  } else if (operatorElementInArray === "-") {
    result = elementArray[0] - elementArray[2];
  } else if (operatorElementInArray === "*") {
    result = elementArray[0] * elementArray[2];
  } else {
    result = elementArray[0] / elementArray[2];
  }
  elementArray = [];
  // elementArray.push(result);
  displayEl.value = result;
});
