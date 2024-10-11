/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];
  let cardPintas = ["♦", "♥", "♠", "♣"];

  function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const valorAreatorio = elegirAleatorio(cardValues);
  document.querySelector(".value").innerHTML = valorAreatorio;
  const pintaAleatoria = elegirAleatorio(cardPintas);
  document.querySelectorAll(".pinta").forEach(elementoPinta => {
    elementoPinta.innerHTML = pintaAleatoria;
    if (pintaAleatoria == "♥" || pintaAleatoria == "♦") {
      elementoPinta.style.color = "red";
    }
  });
};
