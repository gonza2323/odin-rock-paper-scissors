"use strict";

const NO_ROUNDS = 5;

const buttonsContainer = document.querySelector(".buttons");
const promptText = document.querySelector(".prompt");
const resultText = document.querySelector(".round-result");
const scoreText = document.querySelector(".score");

const gameFinishEvent = new CustomEvent("game-finish");

const CHOICES_VALUES = {
    "rock": 0,
    "paper": 1,
    "scissors": 2,
};

let roundNo;
let playerScore;
let computerScore;


setupStartUpConfig();


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*3);
    const choices = Object.keys(CHOICES_VALUES);
    return choices[randomIndex];
}


function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    const roundResult = (CHOICES_VALUES[playerChoice] - CHOICES_VALUES[computerChoice] + 3) % 3;

    switch (roundResult) {
        case 0:
            resultText.textContent = `It's a tie! You both played ${playerChoice}.`;
            break;
        case 1:
            resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}!`;
            playerScore++;
            break;
        case 2:
            resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}!`;
            computerScore++;
            break;
    }

    roundNo++;
    
    if (roundNo > NO_ROUNDS) {
        document.dispatchEvent(gameFinishEvent);
        return;
    }
    
    promptText.textContent = `Round ${roundNo}/${NO_ROUNDS}. Choose an option`
    scoreText.textContent = `Player (${playerScore}) - (${computerScore}) Computer`;
}


function onGameFinish() {
    const gameResult = Math.sign(playerScore - computerScore);

    switch (gameResult) {
        case 0:
            scoreText.textContent = `It's a tie! Player (${playerScore}) - (${computerScore}) Computer`;
            break;
        case 1:
            scoreText.textContent = `You won! Player (${playerScore}) - (${computerScore}) Computer`;
            break;
        case -1:
            scoreText.textContent = `You lost! Player (${playerScore}) - (${computerScore}) Computer`;
            break;
    }

    setupStartUpConfig();
}

function setupStartUpConfig() {
    playerScore = 0;
    computerScore = 0;
    roundNo = 1;

    promptText.textContent = "Choose an option to start a new game";
}


buttonsContainer.addEventListener("click", e => {
    const playerChoice = e.target.getAttribute("choice");
    playRound(playerChoice);
})

document.addEventListener('game-finish', onGameFinish);
