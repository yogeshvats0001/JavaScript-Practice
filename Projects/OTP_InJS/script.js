"use strict";

const inputEl = document.querySelector(".inputBox");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function () {
  //generating the random number of 6 digits
  let randomNumber = Math.trunc(Math.random() * 999999);
  console.log(randomNumber);
  inputEl.value = randomNumber;
});
