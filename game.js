let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    switch (number) {
        case 0:
            computerSelector.innerText = "🗿";
            return "rock";
            break;
        case 1:
            computerSelector.innerText = "🧻";
            return "paper";
            break;
        case 2:
            computerSelector.innerText = "✂️";
            return "scissors";
            break;
        default:
            return null;
            break;
    }
}

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result;
    if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
        result = "Draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        result = "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result = "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        result = "You Lose! Rock beats Scissors";
    }
    resultSelector.innerHTML = result;
    playerScoreSelector.innerText = playerScore;
    computerScoreSelector.innerText = computerScore;
    console.log(result);
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt(`Player selection round ${i + 1} ("rock", "paper" or "scissors")`).trim();
        let correctInputs = ["rock", "paper", "scissors"];
        while (!correctInputs.includes(input)) {
            alert(`Incorrect input, introduce "rock", "paper" or "scissors"`);
            input = prompt(`Player selection round ${i + 1} ("rock", "paper" or "scissors")`).trim();
        }
        playGame(input, computerPlay());
    }
}

let resultSelector = document.querySelector(".result");
let playerScoreSelector = document.getElementById("playerScore");
let computerScoreSelector = document.getElementById("computerScore");

let computerSelector = document.getElementById("computerSelection");
let playerSelector = document.getElementById("playerSelection");
console.log(computerSelector);
console.log(playerSelector);
let rockSelector = document.getElementById("rockBtn");
let paperSelector = document.getElementById("paperBtn");
let scissorsSelector = document.getElementById("scissorsBtn");

let fiveGameSelector = document.getElementById("fiveGames");
console.log(fiveGameSelector);
rockSelector.addEventListener("click", function () {
    playerSelector.innerText = "🗿";
    playGame("rock", computerPlay())
});
paperSelector.addEventListener("click", function () {
    playerSelector.innerText = "🧻";
    playGame("paper", computerPlay())
});
scissorsSelector.addEventListener("click", function () {
    playerSelector.innerText = "✂️";
    playGame("scissors", computerPlay())
});

fiveGameSelector.addEventListener("click", function () {
    game();
});
