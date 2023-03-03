const selectedDiV = document.querySelector(".player-weapon");
let playerResult = 0;
let computerResult = 0;

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
  const computerValue = GenerateComputerChoose();
  console.log("Grasz wybrał", value);
  console.log("Komputer wybrał", computerValue);
  setTimeout(GenerateComputerDIV, 500);
  ComparePlayerToComputer(playerValue, computerValue);
});

function GenerateComputerChoose() {
  const CpuChoice = ["paper", "rock", "scissors"];
  let getIndex = Math.floor(Math.random() * CpuChoice.length);
  let choiced = CpuChoice[getIndex];
  return choiced;
}

function ComparePlayerToComputer(PlayerValue, ComputerValue) {
  const win = "";
  if (PlayerValue == ComputerValue) {
    return console.log("Remis");
  }

  if (PlayerValue == "scissors" && ComputerValue == "rock") {
    return console.log("Komputer wygrywa");
  } else if (PlayerValue == "paper" && ComputerValue == "scissors") {
    return console.log("Komputer wygrywa");
  } else if (PlayerValue == "rock" && ComputerValue == "paper") {
    return console.log("Komputer wygrywa");
  } else {
    return console.log("Wygrywasz");
    //return win;
  }
}

function GenerateComputerDIV() {
      const iElement = document.createElement('i');
      const opponentDiv = document.createElement('div');
      const resultdiv = document.querySelector('.result');
      opponentDiv.classList.add('opponent');
      iElement.classList.add("icon-hand-grab-o");
      opponentDiv.append(iElement);
      resultdiv.appendChild(opponentDiv);

      console.log(opponentDiv);

}

function calculateResult (){
  if(win=="Wygrywasz") {
    playerResult++;
  } else {
    computerResult++;
  }

  return playerResult,computerResult;
}