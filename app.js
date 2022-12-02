let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreDiv = document.querySelector('.player-score')
const computerScoreDiv = document.querySelector('.computer-score')
const buttonsDiv = document.querySelector('.button')
const resetButton = document.querySelector('.reset-button')
const containerDiv = document.querySelector('.container')

const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p')
    if (playerSelection === computerSelection) {
        p.innerText = `You tied! You both picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        p.innerText = 'You lost! Paper covers rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        p.innerText = 'You win! Rock smashes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = 'You win! Paper covers rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        p.innerText = 'You lost! Scissors cuts paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        p.innerText = 'You lost! Rock smash scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        p.innerText = 'You win! Scissors cut paper!'
    }

    if(outcomeDiv.hasChildNodes()) {
        outcomeDiv.removeChild(outcomeDiv.children[0]);
    }
    outcomeDiv.appendChild(p)
}

const checkForWinner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2')
    const resetBtn = document.createElement('button')
    if (playerScore === 5) {
        h2.classList.add('player-won')
        //clears p element and appends h2 to outcomeDiv
        h2.innerText = `You won! Great job beating a computer!`
        if (outcomeDiv.hasChildNodes()) {
            outcomeDiv.removeChild(outcomeDiv.children[0]);
        }
        outcomeDiv.append(h2)
        //removes buttons after game has ended and creates a "start new game" button
        buttonsDiv.remove();
        resetButton.append(resetBtn)
        resetBtn.innerText = 'Start New Game';
        resetBtn.classList.add('re-button')
    }

    if (computerScore === 5) {
        h2.classList.add('computer-won')
        h2.innerText = `You're done bud...a computer beat ya!`
        if (outcomeDiv.hasChildNodes()) {
            outcomeDiv.removeChild(outcomeDiv.children[0]);
        }
        outcomeDiv.append(h2)
        
        buttonsDiv.remove();
        resetButton.append(resetBtn)
        resetBtn.innerText = 'Try Again?';
        resetBtn.classList.add('re-button')
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreDiv.innerText = `${playerScore}`
    computerScoreDiv.innerText = `${computerScore}`
}

const updatePic = (playerSelection, computerSelection) => {
    document.getElementById('playerChoicePic').src= `./images/${playerSelection}.svg`;
    document.getElementById('compChoicePic').src= `./images/${computerSelection}.svg`;
    compChoicePic.style.transform = 'rotateY(180deg)';
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    updatePic(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    updatePic(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    updatePic(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

resetButton.addEventListener('click', () => {
     playerScore = 0
     compScore = 0
     updateScores(playerScore, compScore)
    //resets scores and updates display
     if (outcomeDiv.hasChildNodes()) {
        outcomeDiv.removeChild(outcomeDiv.children[0]);
    }
    //removes start new game button and appends buttonsDiv back
    if (resetButton.hasChildNodes()) {
        resetButton.removeChild(resetButton.children[0]);
    }
    containerDiv.appendChild(buttonsDiv)
    //resets pictures choice back to default black screen
    document.getElementById('playerChoicePic').src= './images/darkSquare.jpg';
    document.getElementById('compChoicePic').src= './images/darkSquare.jpg';
})