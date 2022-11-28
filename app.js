let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

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
    outcomeDiv.appendChild(p)
}

const checkForWinner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5) {
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore} great job beating the computer!`
    }

    if (computerScore === 5) {
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${computerScore} great job beating the computer!`
    }
    outcomeDiv.append(h2)
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})