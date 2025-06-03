let computerNum = Math.round(Math.random() * 10 + 1);
// let computerNum = 7
// console.log(computerNum);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let lowOrHi = document.querySelector(".lowOrHi");
let guesses = document.querySelector(".guesses");
let remain_guess = document.querySelector(".lastResult");
let resultParas = document.querySelector(".resultParas");
let div = document.createElement("div");


let guessedList = [];

let remain = 5;

let playgame = true;
// let playgame = false

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    let userNum = parseInt(userInput.value);
    // console.log(typeof userNum);
    // console.log(userNum);

    userNumValid(userNum);
  });
}

function userNumValid(userNum) {
  if (isNaN(userNum)) {
    alert("Pls enter a Number");
  } else if (userNum < 1) {
    alert("Your in is Less than 1");
  } else if (userNum > 10) {
    alert("Your in is more than 10");
  } else {
    guessedList.push(userNum);
    displayGuessList(userNum);

    remain--;
    displayRemain(remain);
    if (remain == 0) {
      `Game Over`;
      endgame();
    } else {
      checkWin(userNum);
    }
  }
}

function displayGuessList(num) {
  guesses.innerHTML += `${num} ,`;
}

function checkWin(userNum) {
  if (userNum === computerNum) {
    displayWinOrNot(`Your Win`);
    endgame();
  } else if (userNum < computerNum) {
    displayWinOrNot(`Your guessed number ${userNum} is low..`);
  } else if (userNum > computerNum) {
    displayWinOrNot(`Your guessed number ${userNum} is Hi..`);
  }
}
function displayRemain(remain) {
  remain_guess.innerHTML = remain;
}
function displayWinOrNot(message) {
  userInput.value = "";
  lowOrHi.innerHTML = message;
}

function endgame() {
  playgame = false;
  userInput.disabled = true;
  submit.disabled = true;

  div.innerHTML = `<h1 id="newGame" style="cursor:pointer; color:#0f0;">Restart Game</h1>`;
  resultParas.appendChild(div);

  restartGame();
}

function restartGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
   
    computerNum = Math.floor(Math.random() * 10) + 1; 
    guessedList = [];
    remain = 10;
    playgame = true;

    guesses.innerHTML = "";
    lowOrHi.innerHTML = "";
    remain_guess.innerHTML = remain;
    userInput.disabled = false;
    submit.disabled = false;
    userInput.value = "";

    // Remove the restart button
    resultParas.removeChild(div);
  });
}
