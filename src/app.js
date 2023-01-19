/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let symbols = ["♦", "♥", "♠", "♣"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let symbol;
let value;

const topSymbol = document.querySelector(".header-symbol");
const bottomSymbol = document.querySelector(".footer-symbol");
const mainValue = document.querySelector(".body-symbol");

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const valueGenerator = () => {
    symbol = symbols[Math.floor(Math.random() * 4)];
    value = values[Math.floor(Math.random() * 13)];
  };

  const assignSymbol = () => {
    topSymbol.innerText = symbol;
    bottomSymbol.innerText = symbol;
  };

  const assignValue = () => {
    mainValue.innerText = value;
  };
  const assignColor = () => {
    if (symbol === "♦" || symbol === "♥") {
      topSymbol.classList.add("red");
      bottomSymbol.classList.add("red");
      mainValue.classList.add("red");
    } else {
      topSymbol.classList.remove("red");
      bottomSymbol.classList.remove("red");
      mainValue.classList.remove("red");
    }
  };

  const initialConfig = () => {
    valueGenerator();
    assignSymbol();
    assignValue();
    assignColor();
  };

  initialConfig();
};
