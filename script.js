////DOM Logic ////

const information = document.querySelector(".information");

const currentRoundWinner = document.createElement("h1");
const currentScore = document.createElement("h2");
const gameEnded = document.createElement("h1");

information.appendChild(currentRoundWinner);
information.appendChild(currentScore);
information.appendChild(gameEnded);

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
    currentRoundWinner.innerText = "Tie, no points scored.";
  } else if (playerSelection > computerSelection) {
    if (playerSelection === 2 && computerSelection === 0) {
      // player === 2, computer === 0, computer must stll win
      currentRoundWinner.innerText = "You lose, rock beats scissors.";
      computerScore++;
    } else if (playerSelection === 1) {
      currentRoundWinner.innerText = "You win, paper beats rock!";
      playerScore++;
    } else {
      currentRoundWinner.innerText = "You win, scissors beats paper!";
      playerScore++;
    }
  } else {
    if (playerSelection === 0 && computerSelection === 2) {
      // player === 0, computer === 2, player must stll win
      currentRoundWinner.innerText = "You Win, rock beats scissors.";
      playerScore++;
    } else if (computerSelection === 1) {
      currentRoundWinner.innerText = "You lose, paper beats rock!";
      computerScore++;
    } else {
      currentRoundWinner.innerText = "You lose, scissors beats paper!";
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
    playRound(Number(button.id), (computerSelection = computerPlay()));
    currentScore.innerText = `Current Score: Player Score: ${playerScore} Computer Score: ${computerScore}`;
    if (playerScore == 5) {
      gameEnded.innerText = `Game Over. Nice, You Win!\n Player Score: ${playerScore} Computer Score: ${computerScore}`;
      resetGame();
    } else if (computerScore == 5) {
      gameEnded.innerText = `Game Over. You lost!\n Player Score: ${playerScore} Computer Score: ${computerScore}`;
      resetGame();
    }
  });
});
