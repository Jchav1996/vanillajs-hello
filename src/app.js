/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The baby", "The shark", "His dog", "My kids"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before class",
    "right on time",
    "when I left the house",
    "during my lunch",
    "while I was praying"
  ];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let jencuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when);

  const jElement = document.getElementsByTagName("p");
  jElement[0].innerText = jencuse;
};
