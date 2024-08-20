const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const PlayerScore = document.getElementById("playerScoreDisplay");
const  ComputerScore = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a TIE !";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "paper") ? "You Lose !" : "You Win !";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "You Lose !" : "You Win !";
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "You Lose !" : "You Win !";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("green","red");

    switch(result){
        case "You Win !":
            resultDisplay.classList.add("green");
            playerScore++;
            playerScoreDisplay.textContent =playerScore;
            break;
        case "You Lose !":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add("red");
            break;
    }
}
