"use strict";

const CHOICES = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(choiceName) {
    return CHOICES.findIndex(e => e.toLowerCase() === choiceName.toLowerCase());
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
            return `You Win! ${playerChoiceName} beats ${computerChoiceName}!`;
        case -1:
            return `You Lose! ${computerChoiceName} beats ${playerChoiceName}!`;
    }
}

const buttonsContainer = document.querySelector('.buttons');
const messageBox = document.querySelector('.message');
const scoreBoard = document.querySelector('.score');

buttonsContainer.addEventListener('click', (e) => {
    const playerChoice = getPlayerChoice(e.target.textContent);
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    playerScore += Math.max(roundResult, 0);
    computerScore -= Math.min(roundResult, 0);

    messageBox.textContent = getRoundResultMessage(playerChoice, computerChoice, roundResult);
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5) {
        messageBox.textContent = "You won the game!";
    } else if (computerScore === 5) {
        messageBox.textContent = "You lost the game!";
    } else {
        return;
    }

    playerScore = 0;
    computerScore = 0;
});