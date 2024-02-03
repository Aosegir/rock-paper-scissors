console.log("Hello World");

// This function will return either Rock, Paper, or Scissors
// to represent the computer's choice for the game.
function getComputerChoice () {
    // Select an integer 0-2 (3 choices).
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    // Assign the value of choice to either rock, paper, or scissors
    // and returns the value as a string.
    if(choice === 0) {
        console.log("Rock!");
        return "Rock";
    } else if (choice === 1) {
        console.log("Paper!");
        return "Paper";
    } else {
        console.log("Scissors!");
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
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            return "You tie! Rock and rock means nobody wins!";
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats rock!";
        } else {
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats rock!";
        } else if (computerSelection == "Paper") {
            return "You tie! Paper and paper means nobody wins!";
        } else {
            return "You lose! Scissors beats paper!";
        }
    } else {
        if (computerSelection == "Rock") {
            return "You lose! Paper beats rock!";
        } else if (computerSelection == "Paper") {
            return "You win! Scissors beats paper!";
        } else {
            return "You tie! Scissors and scissors means nobody wins!";
        }
    }
}

getComputerChoice();