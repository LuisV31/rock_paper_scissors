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
        return 'You lost! Paper covers rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock smashes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper covers rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors cuts paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock smash scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors cut paper!'
    }
}
