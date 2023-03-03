// @ts-nocheck
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
  setTimeout(GenerateComputerDIV(computerValue), 700);
  RemoveComputerDiv()
  setTimeout(ComparePlayerToComputer(playerValue, computerValue),720);
});

function GenerateComputerChoose() {
  const CpuChoice = ["paper", "rock", "scissors"];
  let getIndex = Math.floor(Math.random() * CpuChoice.length);
  let choiced = CpuChoice[getIndex];
  return choiced;
}

function ComparePlayerToComputer(PlayerValue, ComputerValue) {
  
  if (PlayerValue == ComputerValue) {
    document.getElementById("computer-choose").innerHTML = "It's a draw";
  } else if (PlayerValue == "scissors" && ComputerValue == "rock") {
    document.getElementById("computer-choose").innerHTML = "Computer won";
  } else if (PlayerValue == "paper" && ComputerValue == "scissors") {
    document.getElementById("computer-choose").innerHTML = "Computer won";
  } else if (PlayerValue == "rock" && ComputerValue == "paper") {
    document.getElementById("computer-choose").innerHTML = "Computer won";
  } else {
    document.getElementById("computer-choose").innerHTML = "You won";
  }
}

function GenerateComputerDIV(computerValue) {
      const iElement = document.createElement('i');
      const opponentDiv = document.createElement('div');
      const resultdiv = document.querySelector('.result');
      
     

      

      if (computerValue == "scissors") {

        iElement.classList.add("icon-hand-scissors-o");
        opponentDiv.classList.add('opponent');
        opponentDiv.append(iElement);
        resultdiv.appendChild(opponentDiv);
        document.getElementById("computer-choose").innerHTML = "The computer chose scissors";


      } else if (computerValue == "rock") {

        iElement.classList.add("icon-hand-grab-o");
        opponentDiv.classList.add('opponent');
        opponentDiv.append(iElement);
        resultdiv.appendChild(opponentDiv);
        document.getElementById("computer-choose").innerHTML = "The computer chose rock";

        
      } else if (computerValue == "paper") {

        iElement.classList.add("icon-hand-paper-o");
        opponentDiv.classList.add('opponent');
        opponentDiv.append(iElement);
        resultdiv.appendChild(opponentDiv);
        document.getElementById("computer-choose").innerHTML = "The computer chose paper";

      }
}

function RemoveComputerDiv(){

  setTimeout(function() {
    document.querySelector(".opponent")?.remove();
    document.getElementById("computer-choose").innerHTML = "";
  }, 1300);
        

}
/*
function calculateResult (){
  if(win=="Wygrywasz") {
    playerResult++;
  } else {
    computerResult++;
  }

  return playerResult,computerResult;
}

*/