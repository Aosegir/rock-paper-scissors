// This function will return either Rock, Paper, or Scissors
// to represent the computer's choice for the game.
function getComputerChoice () {
    // Select an integer 0-2 (3 choices).
    let choice = Math.floor(Math.random() * 3);
    // Assign the value of choice to either rock, paper, or scissors
    // and returns the value as a string.
    if(choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// This function will play a single round of Rock, Paper, Scissors
// by taking in the player's selection and the computer's selection
// and returning the result of the round.
function playRound (playerSelection, computerSelection) {
    // The if statement checks to see what the player's case-insensitive
    // choice is and checks it against the computer's choices, returning
    // The proper response for each of the 9 possible outcomes.
    const display = document.getElementById('display');
    const playerScore = document.getElementById('player-score');
    let currentPlayerScore = playerScore.textContent;
    const computerScore = document.getElementById('comp-score');
    let currentCompScore = computerScore.textContent;
    let result = document.createElement('p');
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            result.textContent = 'You tie! Rock and rock means nobody wins!';
        } else if (computerSelection == "Paper") {
            result.textContent = "You lose! Paper beats rock!";
            currentCompScore++;
        } else {
            result.textContent = "You win! Rock beats scissors!";
            currentPlayerScore++;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            result.textContent = 'You win! Paper beats rock!';
            currentPlayerScore++;
        } else if (computerSelection == "Paper") {
            result.textContent = 'You tie! Paper and paper means nobody wins!';
        } else {
            result.textContent = 'You lose! Scissors beats paper!';
            currentCompScore++;
        }
    } else {
        if (computerSelection == "Rock") {
            result.textContent = 'You lose! Rock beats scissors!';
            currentCompScore++;
        } else if (computerSelection == "Paper") {
            result.textContent = 'You win! Scissors beats paper!';
            currentPlayerScore++;
        } else {
            result.textContent = 'You tie! Scissors and scissors means nobody wins!';
        }
    }
    display.appendChild(result);
    playerScore.textContent = currentPlayerScore;
    computerScore.textContent = currentCompScore;
    
    if(playerScore.textContent >= 5) {
        const winner = document.getElementById('winner');
        let announce = document.createElement('h1');
        announce.textContent = "You win! Congratulations!";
        winner.appendChild(announce);
    } else if (computerScore.textContent >= 5) {
        const winner = document.getElementById('winner');
        let announce = document.createElement('h1');
        announce.textContent = "You lost! You'll get that computer next time!";
        winner.appendChild(announce);
    }
}

/* -- DOM Manipulation -- */

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    let playersChoice = btn.innerHTML;
    console.log(playersChoice);
    btn.addEventListener('click', () => {
        playRound(playersChoice, getComputerChoice());
    });
});

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    location.reload();
})