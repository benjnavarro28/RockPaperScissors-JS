let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computer_choice_num = Math.floor(Math.random() * 3);
    console.log(computer_choice_num);
    switch(computer_choice_num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const human_choice = prompt("Rock, Paper, or Scissors?");
    if (human_choice === "rock" || human_choice === "paper" || human_choice === "scissors") {
        return human_choice;
    }
    else {
        console.log("Please enter a valid option!");
    }
}

function playRound(humanChoice, computerChoice) {

}

function playGame() {
    // Play 5 rounds of RPS
    playRound();
}

console.log(getComputerChoice());