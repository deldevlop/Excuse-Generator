/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//document.getElementById("excuse1").innerHTML = "Oh my GOD !!!";
const buttonExcuse = document.getElementById("excuseButton");

buttonExcuse.addEventListener("click", function() {
  location.reload();
});

function getRandomWord(arr) {
  let randomWord = Math.floor(Math.random() * arr.length);
  return arr[randomWord] + " ";
}

window.onload = () => {
  document.getElementById("excuse").innerHTML =
    getRandomWord(who) +
    getRandomWord(action) +
    getRandomWord(what) +
    getRandomWord(when);
};
