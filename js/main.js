const selectedDiV = document.querySelector(".player-weapon");

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
  ComparePlayerToComputer(playerValue, computerValue);
});

function GenerateComputerChoose() {
  const CpuChoice = ["paper", "rock", "scissors"];
  let getIndex = Math.floor(Math.random() * CpuChoice.length);
  let choiced = CpuChoice[getIndex];
  return choiced;
}

function ComparePlayerToComputer(PlayerValue, ComputerValue) {
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
  }
}
