let playerInput = prompt("Your choice (rock, paper, scissors) ?").toLowerCase();

function getPlayerChoice(playerInput) {
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput;
    } else {
        return console.error("Error: Please enter the correct information");
    }
}

function getComputerChoice() {
    let dice = Math.round(Math.random() * 2);
    switch (dice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function findWinner(playerChoice, computerChoice) {
    if ((computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")) {
        return console.log("Won");
    } else if (computerChoice === playerChoice) {
        return console.log("Tied");
    } else {
        return console.log("Lost");
    }
}

function playGame() {
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    console.log(findWinner(uChoice, computerChoice));
}

playGame();