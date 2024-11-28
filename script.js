// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

const timeMap = {
  easy: 15,
  medium: 10,
  hard: 5,
};

let score = 0;
let randomWord = "";
let difficultyLevel = "easy";
let timeRemaining = timeMap[difficultyLevel];

// DOM Elements
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const inputElement = document.getElementById("text");
const settingsElement = document.getElementById("settings");
const endGameElement = document.getElementById("end-game-container");

// Functions

function addWordToDOM() {
  const randomArrIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomArrIndex];
  document.getElementById("word").textContent = randomWord;
}

function chooseDifficulty(event) {
  difficultyLevel = event.target.value;
  timeRemaining = timeMap[difficultyLevel];
  updateTime();
}

function updateScore() {
  score = score + 1;
  if (scoreElement) {
    scoreElement.textContent = score;
  }
}

function incrementTimer() {
  timeRemaining = timeRemaining + 5;
}

function updateTime() {
  if (timeRemaining > 0) {
    timeRemaining = timeRemaining - 1;
  } else {
    timeRemaining = 0;
    gameOver();
  }
  timeElement.textContent = timeRemaining + "s";
}

function resetTime() {
  timeRemaining = 10;
}

function gameOver() {
  const gameOverTextElement = document.createElement("p");
  gameOverTextElement.innerHTML =
    "<h3>Game over</h3><h5>Total Score</h5>" + score;
  endGameElement.appendChild(gameOverTextElement);
  endGameElement.style.display = "block";
  clearInterval(timerInterval);
}

function validateWord(event) {
  const enteredWord = event.target.value;
  const isWordMatched = randomWord === enteredWord;
  if (isWordMatched) {
    incrementTimer();
    updateScore();
    addWordToDOM();

    //Reset input field
    inputElement.value = "";
  }
}

function hideSettings() {
  const isHidden = settingsElement.style.visibility === "hidden";
  if (isHidden) {
    settingsElement.style.visibility = "visible";
  } else {
    settingsElement.style.visibility = "hidden";
  }
}

addWordToDOM();
const timerInterval = setInterval(updateTime, 1000);
