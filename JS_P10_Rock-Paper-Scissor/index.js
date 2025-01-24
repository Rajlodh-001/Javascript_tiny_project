


const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");



let palyerScore =0;
let computerScore =0;



function playGame(palyerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    //  console.log(computerchoice);
    let result = "";
    if (palyerchoice === computerchoice) {
        result = "IT's A TIE"
    } else {
        switch (palyerchoice) {
            case "rock":
                result = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER : ${palyerchoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerchoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            palyerScore ++;
            playerScoreDisplay.textContent=palyerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore ++;
            computerScoreDisplay.textContent=computerScore;
            break;
    }

    console.log(result)
}








