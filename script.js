'use strict'

function getComputerChoice() {
    return Math.trunc(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    computerSelection = (computerSelection + (1 - playerSelection) + 3) % 3;
    return 1 - computerSelection;
}