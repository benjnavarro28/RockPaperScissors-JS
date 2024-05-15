let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computer_choice_num = Math.floor(Math.random() * 3);
    switch(computer_choice_num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    roundsPlayed = 0;

    scoreBoard = document.getElementById('scoreboard');
    humanChoiceDisplay = document.createElement('h2');
    computerChoiceDisplay = document.createElement('h2');
    humanScoreDisplay = document.createElement('h2');
    humanScoreDisplay.textContent = "Human Score: " + humanScore;
    computerScoreDisplay = document.createElement('h2');
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    scoreBoard.appendChild(humanChoiceDisplay);
    scoreBoard.appendChild(computerChoiceDisplay);
    scoreBoard.appendChild(humanScoreDisplay);
    scoreBoard.appendChild(computerScoreDisplay);

    rockBtn = document.getElementById('rock-btn');
    paperBtn = document.getElementById('paper-btn');
    scissorsBtn = document.getElementById('scissors-btn');

    function playRound(humanChoice, computerChoice) {
        humanChoiceDisplay.textContent = "You chose: " + humanChoice;
        computerChoiceDisplay.textContent = "The computer chose: " + computerChoice;
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

        humanScoreDisplay.textContent = "Human Score: " + humanScore;
        computerScoreDisplay.textContent = "Computer Score: " + computerScore;
        roundsPlayed += 1;
        if (roundsPlayed === 5) {
            finalScoreDisplay = document.createElement('h2');
            if (humanScore > computerScore) {
                finalScoreDisplay.textContent = 'You win!';
                scoreBoard.appendChild(finalScoreDisplay);
            } else if (humanScore < computerScore) {
                finalScoreDisplay.textContent = 'You lose! Game over!';
                scoreBoard.appendChild(finalScoreDisplay);
            } else if (humanScore === computerScore) {
                finalScoreDisplay.textContent = 'It\'s a tie! No one wins!';
                scoreBoard.appendChild(finalScoreDisplay);
            }
        }
    }
    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
}

playGame();