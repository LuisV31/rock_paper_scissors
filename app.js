let playerScore = 0
let compScore = 0

// Element selectors
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreDiv = document.querySelector('.player-score')
const computerScoreDiv = document.querySelector('.computer-score')
const buttonsDiv = document.querySelector('.buttons')
const resetButton = document.querySelector('.reset-button')
// const containerDiv = document.querySelector('.container')

// Function to get the computer's choice
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to display outcome messages
const displayOutcomeMessage = (message) => {
    // Clear the outcomeDiv by seeting its inner HTML to an empty string
    outcomeDiv.innerHTML = '';

    // Create a new <p> for the message
    const messageElement = document.createElement('p');
    messageElement.innerText = message;

    // Append the new message element to the outcomeDiv
    outcomeDiv.appendChild(messageElement);
};

// Function to create unique messages for winner or loser
const getWinMessage = (winner, loser) => {
    if (winner === 'rock' && loser === 'scissors') {
        return 'Rock smashes scissors';
    } else if (winner === 'scissors' && loser === 'paper') {
        return 'Scissors cut paper';
    } else if (winner === 'paper' && loser === 'rock') {
        return 'Paper covers rock';
    }
};

// Function to play a single round
const playRound = (playerSelection, computerSelection) => {
    let outcome;

    if (playerSelection === computerSelection) {
        outcome = `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        outcome = `You win! ${getWinMessage(playerSelection, computerSelection)}.`;
    } else {
        compScore++;
        outcome = `You lose! ${getWinMessage(computerSelection, playerSelection)}.`;
    }

    displayOutcomeMessage(outcome);
    updateScores();
};

const checkForWinner = () => {
    if (playerScore < 5 && compScore < 5) return;

    let winnerMessage, buttonText;
    if (playerScore === 5) {
        winnerMessage = "You won! Great job beating a computer!";
        buttonText = "Start a New Game";
    } else {
        winnerMessage = "You're done bud... a computer beat ya!";
        buttonText = "Try Again?";
    }

    displayOutcomeMessage(winnerMessage);

    // Update the button text based on the game outcome
    resetButton.innerText = buttonText;

    // Toggle UI elements for game end state
    buttonsDiv.style.display = 'none'; // Hide game buttons
    resetButton.style.display = 'inline-block'; // Show reset button
};


const updateScores = () => {
    playerScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = compScore;
};

const updatePic = (playerSelection, computerSelection) => {
    document.getElementById('playerChoicePic').src = `./images/${playerSelection}.svg`;
    document.getElementById('compChoicePic').src = `./images/${computerSelection}.svg`;
};

const handlePlayerChoice = (playerSelection) => {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updatePic(playerSelection, computerSelection);
    checkForWinner();
};

// Event listeners for player choices
rockButton.addEventListener('click', () => handlePlayerChoice('rock'));
paperButton.addEventListener('click', () => handlePlayerChoice('paper'));
scissorsButton.addEventListener('click', () => handlePlayerChoice('scissors'));

// Event listener for resetting the game
resetButton.addEventListener('click', () => {
    playerScore = 0
    compScore = 0
    updateScores();
    outcomeDiv.innerHTML = ''; // Clear any outcome messages
    
    buttonsDiv.style.display = 'flex'; // Re-show game buttons
    resetButton.style.display = 'none'; // Hide reset button

    // Resets choice images to default
    document.getElementById('playerChoicePic').src = './images/darkSquare.jpg';
    document.getElementById('compChoicePic').src = './images/darkSquare.jpg';
    
    // Display a brief reset message
    const resetMessage = document.createElement('p');
    resetMessage.innerText = "Game reset! Ready for another game?";
    outcomeDiv.appendChild(resetMessage);

    // Clear the reset message after 2 seconds (2000 miliseconds)
    setTimeout(() => {
        // Check if resetMsg is still the child of outcomeDiv
        if (resetMessage.parentNode === outcomeDiv) {
            outcomeDiv.removeChild(resetMessage);
        }
    }, 2000);
});