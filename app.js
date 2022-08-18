const getComputerChoice = () => {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const comChoice = arrOfChoices[randomNum]
    return comChoice
}

