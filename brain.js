function getComputerChoice() {
    let rNum = Math.floor(Math.random() * 3);
    if (rNum == 0) return "Rock"
    if (rNum == 1) return "Scissors"
    return "Paper"
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
        return 1
    } else if (playerSelection == computerSelection) {
        console.log("Draw! You both chose " + playerSelection);
        return 0
    }
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    return -1
}

function game() {
    console.log("You are about to play a best of 5 game of Scissors, Paper, Rock!")
    let you = 0
    let him = 0
    while (you < 3 && him < 3) {
        let input = prompt("Enter scissors, paper or rock: ")
        let x = input.toLowerCase()
        if (x != "scissors" && x != "paper" && x != "rock") {
            console.log("Invalid Input")
            continue
        }
        let result = playRound(input, getComputerChoice())
        if (result == 1) you++
        if (result == -1) him++
    }

    if (you == 3) console.log("You won the series 3-" + him + "!")
    else console.log("You lose the series " + you + "-3!")
    return
}

game()