// @ts-nocheck
const selectedDiV = document.querySelector(".player-weapon");
const resetButton = document.querySelector(".button-reset");
const resultdiv = document.querySelector(".result");

let playerScore = 0;
let computerScore = 0;

selectedDiV?.addEventListener("click", function (event) {
  let value = "";
  let string = event.target?.className;
  if (string == "icon-hand-scissors-o" || string == "scissors") {
    value = "scissors";
  } else if (string == "icon-hand-paper-o" || string == "paper") {
    value = "paper";
  } else if (string == "icon-hand-grab-o" || string == "rock") {
    value = "rock";
  }

  const playerValue = value;
  let computerValue = GenerateComputerChoose();

  setTimeout(function () {
    GenerateComputerDIV(computerValue);
  }, 300);

  RemoveComputerDiv();
  ComparePlayerToComputer(playerValue, computerValue);
});

function GenerateComputerChoose() {
  const CpuChoice = ["paper", "rock", "scissors"];
  let getIndex = Math.floor(Math.random() * CpuChoice.length);
  let choiced = CpuChoice[getIndex];
  return choiced;
}

function CounterResult(result) {
  if (result === "p") {
    playerScore++;
  } else if (result === "c") {
    computerScore++;
  } else if (result === "d") {
    computerScore;
    playerScore;
  } else {
    document.getElementById("computer-choose").innerHTML = "Wystąpił błąd";
  }

  AddScoreToSite(computerScore, playerScore);
}

function ComparePlayerToComputer(PlayerValue, ComputerValue) {
  let player = "p";
  let computer = "c";
  let draw = "d";

  if (PlayerValue == ComputerValue) {
    setTimeout(function () {
      document.getElementById("computer-choose").innerHTML = "It's a draw";
    }, 200);

    return CounterResult(draw);
  } else if (PlayerValue == "scissors" && ComputerValue == "rock") {
    setTimeout(function () {
      document.getElementById("computer-choose").innerHTML = "Computer won";
    }, 200);
    return CounterResult(computer);
  } else if (PlayerValue == "paper" && ComputerValue == "scissors") {
    setTimeout(function () {
      document.getElementById("computer-choose").innerHTML = "Computer won";
    }, 200);
    return CounterResult(computer);
  } else if (PlayerValue == "rock" && ComputerValue == "paper") {
    setTimeout(function () {
      document.getElementById("computer-choose").innerHTML = "Computer won";
    }, 200);
    return CounterResult(computer);
  } else {
    setTimeout(function () {
      document.getElementById("computer-choose").innerHTML = "You won";
    }, 200);
    return CounterResult(player);
  }
}

function GenerateComputerDIV(computerValue) {
  const iElement = document.createElement("i");
  let opponentDiv = document.createElement("div");

  if (!resultdiv.querySelector(".opponent")) {
    opponentDiv.classList.add("opponent");
    resultdiv.appendChild(opponentDiv);
  } else {
    opponentDiv = resultdiv.querySelector(".opponent");
  }

  if (computerValue == "scissors") {
    iElement.classList.add("icon-hand-scissors-o");
  } else if (computerValue == "rock") {
    iElement.classList.add("icon-hand-grab-o");
  } else if (computerValue == "paper") {
    iElement.classList.add("icon-hand-paper-o");
  }

  opponentDiv.innerHTML = "";
  opponentDiv.append(iElement);
}

function RemoveComputerDiv() {
  document.querySelector(".opponent")?.remove();
  document.getElementById("computer-choose").innerHTML = "";
}

function AddScoreToSite(computerScore, playerScore) {
  const menu = document.querySelector(".menu-score");
  menu.innerHTML = "";
  menu.innerHTML += `<li>Player: ${playerScore}</li><li>Computer: ${computerScore}</li>`;
}

resetButton.addEventListener("click", function () {
  document.getElementById("computer-choose").innerHTML = "";
  document.querySelector(".opponent")?.remove();
  playerScore = 0;
  computerScore = 0;

  const menu = document.querySelector(".menu-score");
  menu.innerHTML = `<li>Player: ${playerScore}</li><li>Computer: ${computerScore}</li>`;
});
