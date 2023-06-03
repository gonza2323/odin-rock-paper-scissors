'use strict'

function getComputerChoice() {
    return Math.trunc(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = (computerSelection + (1 - playerSelection) + 3) % 3;
    return 1 - computerSelection;
}

function game(noRounds) {
    let score = 0;

    for (let i = 0; i < noRounds; i++) {
        const playerChoice = Number.parseInt(prompt("Enter Rock (0), paper (1) or scissors (2)"));
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        score += roundResult;

        console.log(playerChoice, computerChoice, roundResult, score);
    }

    if (score > 0) {
        console.log("Player wins the game!");
    } else if (score < 0) {
        console.log("Computer wins the game!");
    } else {
        console.log("Tie! No one wins!");
    }
}