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
    let result = document.createElement('p');
    let returnScore = 0;
    if (playerSelection.toLowerCase() == "rock") {
        // Player chooses rock
        if (computerSelection == "Rock") {
            // Computer chooses rock
            result.textContent = 'You tie! Rock and rock means nobody wins!';
        } else if (computerSelection == "Paper") {
            // Computer chooses paper
            result.textContent = "You lose! Paper beats rock!";
            returnScore = -1;
        } else {
            // Computer chooses scissors
            result.textContent = "You win! Rock beats scissors!";
            returnScore = 1;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        // Player chooses paper
        if (computerSelection == "Rock") {
            // Computer chooses rock
            result.textContent = 'You win! Paper beats rock!';
            returnScore = 1;
        } else if (computerSelection == "Paper") {
            // Computer chooses paper
            result.textContent = 'You tie! Paper and paper means nobody wins!';
        } else {
            // Computer chooses scissors
            result.textContent = 'You lose! Scissors beats paper!';
            returnScore = -1;
        }
    } else {
        // Player chooses scissors
        if (computerSelection == "Rock") {
            // Computer chooses rock
            result.textContent = 'You lose! Rock beats scissors!';
            returnScore = -1;
        } else if (computerSelection == "Paper") {
            // Computer chooses paper
            result.textContent = 'You win! Scissors beats paper!';
            returnScore = 1;
        } else {
            // Computer chooses scissors
            result.textContent = 'You tie! Scissors and scissors means nobody wins!';
        }
    }
    display.appendChild(result);
    return returnScore;
}

// This function will simulate a 5 round game between the player and the computer.
// Before each round, a prompt will start that will allow the player to choose
// their move before the round starts.
function playGame() {
    // Tally will keep track of the overall wins vs losses to the player.
    // A positive score will mean victory, negative means defeat, and 0 is a tie.
    let tally = 0;
    // For loop will run the following code 5 times.
    for (let i = 0; i < 5; i++) {
        // Prompt assigns the player's move to variable choice
        let choice = prompt("Would you like to choose rock, paper, or scissors?");
        // playRound function is invoked with the player's choice and a random
        // computer choice.
        tally += playRound(choice, getComputerChoice());
    }

    // If statement returns if the player won, lost, or tied based on tally result.
    if (tally > 0) {
        // Player has won
        console.log("You have won! Great job!");
    } else if (tally < 0) {
        // Player has lost
        console.log("You lost, but you did well! Next time, you'll win for sure!");
    } else {
        // Player has tied
        console.log("You tied! Amazing! Try again, and you'll definitely win!");
    }
}

// playGame();


/* -- DOM Manipulation -- */

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    let playersChoice = btn.innerHTML;
    console.log(playersChoice);
    btn.addEventListener('click', () => {
        playRound(playersChoice, getComputerChoice());
    });
});