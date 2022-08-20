let playerScore = 0
let compScore = 0

const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const comChoice = arrOfChoices[randomNum]
    return comChoice
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You both picked rock, try again'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You both picked paper, try again'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You both picked scissors, try again'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper covers rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win! Rock smashes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win! Paper covers rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cuts paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lost! Rock smash scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win! Scissors cut paper!'
    }
}
 const playerSelection = 'rock'

 const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw','rock, paper, or scissors?').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }

    if (playerScore > compScore) {
        return 'You beat AI! You are a genius!'
    } else if (playerScore < compScore) {
        return 'You got beat by AI! Get better!'
    } else {
        return 'You tied with the computer, not bad....I guess'
    }
 }
 console.log(game())

 