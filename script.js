"use strict";


const CHOICES_VALUES = {
    "rock": 0,
    "paper": 1,
    "scissors": 2,
};


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*3);
    const choices = Object.keys(CHOICES_VALUES);
    return choices[randomIndex];
}


function getPlayerChoice() {
    while (true) {
        let playerInput = prompt("What is your choice, rock, paper or scissors?");
        playerInput = playerInput.trim().toLowerCase();
        
        if (playerInput in CHOICES_VALUES)
            return playerInput;
        else

        alert("Invalid choice, try again!");
    }
}


function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const roundResult = (CHOICES_VALUES[playerChoice] - CHOICES_VALUES[computerChoice] + 3) % 3;

    switch (roundResult) {
        case 0:
            console.log(`It's a tie! You both played ${playerChoice}.`);
            return 0;
        case 1:
            console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
            return 1;
        case 2:
            console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
            return -1;
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const roundResult = playRound();
        playerScore += Math.max(roundResult, 0);
        computerScore += Math.max(-roundResult, 0);
        console.log(`Current score is: Player (${playerScore}) - (${computerScore}) Computer`);
    }

    const gameResult = Math.sign(playerScore - computerScore);

    switch (gameResult) {
        case 0:
            console.log(`It's a tie! Player (${playerScore}) - (${computerScore}) Computer`);
            break;
        case 1:
            console.log(`You won! Player (${playerScore}) - (${computerScore}) Computer`);
            break;
        case -1:
            console.log(`You lost! Player (${playerScore}) - (${computerScore}) Computer`);
            break;
    }
}
