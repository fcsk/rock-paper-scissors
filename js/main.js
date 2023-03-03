// @ts-nocheck
const selectedDiV = document.querySelector(".player-weapon");
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
  const computerValue = GenerateComputerChoose();
  console.log("Grasz wybrał", playerValue);
  console.log("Komputer wybrał", computerValue);
  setTimeout(GenerateComputerDIV(computerValue), 700);
  RemoveComputerDiv()
  ComparePlayerToComputer(playerValue, computerValue);
  
});

function GenerateComputerChoose() {
  const CpuChoice = ["paper", "rock", "scissors"];
  let getIndex = Math.floor(Math.random() * CpuChoice.length);
  let choiced = CpuChoice[getIndex];
  return choiced;
}

function ComparePlayerToComputer(PlayerValue, ComputerValue) {
  let player = 'p';
  let computer = 'c';
  let draw ='d';
  
  if (PlayerValue == ComputerValue) {

    document.getElementById("computer-choose").innerHTML = "It's a draw";
    return CounterResult(draw);
  } else if (PlayerValue == "scissors" && ComputerValue == "rock") {

    document.getElementById("computer-choose").innerHTML = "Computer won";
    return CounterResult(computer);

  } else if (PlayerValue == "paper" && ComputerValue == "scissors") {

    document.getElementById("computer-choose").innerHTML = "Computer won";
    return CounterResult(computer);

  } else if (PlayerValue == "rock" && ComputerValue == "paper") {

    document.getElementById("computer-choose").innerHTML = "Computer won";
    return computer;
  } else {

    document.getElementById("computer-choose").innerHTML = "You won";
    return CounterResult(player);
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

function CounterResult(result) {

  if(result ==='p') {
    playerScore++;
    console.log("PlayerScore: ",playerScore);
  } else if (result ==='c') {
    computerScore++;
    console.log("Komputer score: ",computerScore);
  } else if ( result ==='d') {
    console.log("remis");
  } else {
    console.log("Wystąpił błąd");
  }

  console.log( "Komputer score after: ", computerScore);
  

}