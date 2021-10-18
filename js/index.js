const wrapper = document.querySelector(".wrapper");
const scoreboard = document.querySelector(".scoreboard");
const decision = document.querySelector(".decision").firstChild;
const playerScoreText = document.querySelector(".playerScore").lastElementChild;
const computerScoreText =
  document.querySelector(".computerScore").lastElementChild;

const contest = document.querySelector(".contest");
const hands = document.querySelector(".hands");

const beginGameText = document.querySelector(".beginGame");

const results = document.createElement("div");

const handOptions = {
  0: "./assets/Rock.png",
  1: "./assets/Paper.png",
  2: "./assets/Scissors.png",
};

let playerScore = 0;
let computerScore = 0;

const beginGame = () => {
  beginGameText.style.display = "none";
  scoreboard.style.display = "flex";
  hands.style.display = "flex";
};

const pickUserHand = (hand) => {
  hands.style.display = "none";

  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];

  let chosenComputerHand = pickComputerHand();
  referee(hand, chosenComputerHand);

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
};

const pickComputerHand = () => {
  let computerHand = Math.floor(Math.random() * 3);

  document.getElementById("computerPickImage").src = handOptions[computerHand];

  return computerHand;
};

const setDecision = (chosenDecision) => {
  decision.innerText = chosenDecision;
};

const increaseScoreComputer = (score) => {
  computerScoreText.innerText = `${score}`;
};

const increaseScorePlayer = (score) => {
  playerScoreText.innerText = `${score}`;
};

const newRound = () => {
  contest.style.display = "none";
  hands.style.display = "flex";
};

const declareWinner = () => {
  hands.style.display = "none";
  contest.style.display = "none";
  hands.remove();
  contest.remove();
  beginGameText.remove();
  wrapper.style.justifyContent = "center";
  if ((playerScore = 5)) {
  } else if ((computerScore = 5)) {
  }
};

const referee = (playerSelection, computerSelection) => {
  //   console.log(playerSelection, computerSelection);
  //if both pick the same index, tie
  if (playerSelection === computerSelection) {
    setDecision("TIE!");
  } else if (playerSelection > computerSelection) {
    if (playerSelection === 2 && computerSelection === 0) {
      // player === 2, computer === 0, computer must stll win
      setDecision("YOU LOSE!");
      computerScore++;
      increaseScoreComputer(computerScore);
    } else if (playerSelection === 1) {
      setDecision("YOU WIN!");
      playerScore++;
      increaseScorePlayer(playerScore);
    } else {
      setDecision("YOU WIN!");
      playerScore++;
      increaseScorePlayer(playerScore);
    }
  } else {
    if (playerSelection === 0 && computerSelection === 2) {
      // player === 0, computer === 2, player must stll win
      setDecision("YOU WIN!");
      playerScore++;
      increaseScorePlayer(playerScore);
    } else if (computerSelection === 1) {
      setDecision("YOU LOSE!");
      computerScore++;
      increaseScoreComputer(computerScore);
    } else {
      setDecision("YOU LOSE!");
      computerScore++;
      increaseScoreComputer(computerScore);
    }
  }
};
