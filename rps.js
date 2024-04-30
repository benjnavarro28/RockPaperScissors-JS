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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats Scissors!');
            humanScore += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper beats Rock!');
            humanScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper!');
            humanScore += 1;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log('You lose! Rock beats Scissors!');
            computerScore += 1;
        } else if (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log('You lose! Paper beats Rock!');
            computerScore += 1;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log('You lose! Scissors beats Paper!');
            computerScore += 1;
        } else if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
        }
    }
    // Play 5 rounds of RPS
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}

playGame();