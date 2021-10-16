////DOM Logic ////

const body = document.querySelector("body");
const winnerText = document.createElement("h1");
body.appendChild(winnerText);

/// Game Logic ////
const choices = ["rock", "paper", "scissors"];

//rock = 0
//paper = 1
//scissors = 2

playerScore = 0;
computerScore = 0;

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  console.clear();
  console.log(playerSelection, computerSelection);
  //if both pick the same index, tie
  if (playerSelection === computerSelection) {
    console.log("Tie, no points scored.");
  } else if (playerSelection > computerSelection) {
    if (playerSelection === 2 && computerSelection === 0) {
      // player === 2, computer === 0, computer must stll win
      console.log("You lose, rock beats scissors.");
      computerScore++;
    } else if (playerSelection === 1) {
      console.log("You win, paper beats rock!");
      playerScore++;
    } else {
      console.log("You win, scissors beats paper!");
      playerScore++;
    }
  } else {
    if (playerSelection === 0 && computerSelection === 2) {
      // player === 0, computer === 2, player must stll win
      console.log("You Win, rock beats scissors.");
      playerScore++;
    } else if (computerSelection === 1) {
      console.log("You lose, paper beats rock!");
      computerScore++;
    } else {
      console.log("You lose, scissors beats paper!");
      computerScore++;
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  return;
}

const gameButtons = document.querySelectorAll(".btn");

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (computerScore === 5 || playerScore === 5) {
      winnerText.innerText = `----GAME OVER----\n Player Score: ${playerScore}\n Computer Score: ${computerScore}`;
      resetGame();
    } else {
      playRound(Number(button.id), (computerSelection = computerPlay()));
    }
  });
});
