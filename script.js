"use strict";

const CHOICES = ["Rock", "Paper", "Scissors"];

function getPlayerChoice(message) {
    let choiceName, choice;

    do {
        choiceName = prompt(message);
        choice = CHOICES.findIndex(e => e.toLowerCase() === choiceName.toLowerCase())
    } while (choice === -1)
    
    return choice;
}

function getComputerChoice() {
    return Math.trunc(Math.random() * 3);
}

function playRound(playerChoice, computerChoice) {
    computerChoice = (computerChoice + (1 - playerChoice) + 3) % 3;
    return 1 - computerChoice;
}

function getRoundResultMessage(playerChoice, computerChoice, roundResult) {
    const playerChoiceName = CHOICES[playerChoice];
    const computerChoiceName = CHOICES[computerChoice];

    switch (roundResult) {
        case 0:
            return `Both played ${playerChoiceName}! It's a tie!`;
        case 1:
            return `You Win! ${playerChoiceName} beats ${computerChoiceName}!`
        case -1:
            return `You Lose! ${computerChoiceName} beats ${playerChoiceName}!`
    }
}

function game(noRounds) {
    let score = 0;

    for (let i = 0; i < noRounds; i++) {
        const playerChoice = getPlayerChoice("Rock, paper or scissors?");
        const computerChoice = getComputerChoice();

        const roundResult = playRound(playerChoice, computerChoice);
        score += roundResult;

        console.log(getRoundResultMessage(playerChoice, computerChoice, roundResult), `The current score is: ${score}`);
    }

    if (score > 0) {
        console.log("Player won the game!");
    } else if (score < 0) {
        console.log("Computer won the game!");
    } else {
        console.log("Tie! No one wins!");
    }
}