// Variables for the DOM elements

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
  const scoreDOMElement = document.getElementById("score");
  if (scoreDOMElement) {
    scoreDOMElement.textContent = score;
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
  document.getElementById("time").textContent = timeRemaining + "s";
}

function resetTime() {
  timeRemaining = 10;
}

function gameOver() {
  alert("Game over");
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
    document.getElementById("text").value = "";
  }
}

function hideSettings() {
  const settingsElement = document.getElementById("settings");
  const isHidden = settingsElement.style.visibility === "hidden";
  if (isHidden) {
    settingsElement.style.visibility = "visible";
  } else {
    settingsElement.style.visibility = "hidden";
  }
}

addWordToDOM();
const timerInterval = setInterval(updateTime, 1000);
