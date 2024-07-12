function getComputerChoice() {
    // 0 = Piedra; 1 = Papel; 2 = Tijera;
    result = Math.floor(Math.random() * 3)
    return result
}

function getHumanChoice() {
    result = prompt("Elija entre piedra papel o tijera")
    lowerResult = result.toLowerCase()
    return lowerResult
}

function playRound(humanChoice, computerChoice) {
    // Resultados de Piedra

    if (humanChoice == 'piedra' && computerChoice == 0) {
        console.log("Es un empate")
    }
    else if (humanChoice == 'piedra' && computerChoice == 1) {
        console.log("Ha ganado la maquina!")
        computerScore++
    }
    else if (humanChoice == 'piedra' && computerChoice == 2) {
        console.log("Ha ganado el jugador!")
        humanScore++
    }
    // Resultados de Tijera

    else if (humanChoice == 'tijera' && computerChoice == 0) {
        console.log("Ha ganado la maquina!")
        computerScore++
    }
    else if (humanChoice == 'tijera' && computerChoice == 1) {
        console.log("Ha ganado el jugador!")
        humanScore++
    }
    else if (humanChoice == 'tijera' && computerChoice == 2) {
        console.log("Es un empate")
    }
    // Resultados de Papel

    else if (humanChoice == 'papel' && computerChoice == 0) {
        console.log("Ha ganado el jugador!")
        humanScore++
    }
    else if (humanChoice == 'papel' && computerChoice == 1) {
        console.log("Es un empate")
    }
    else if (humanChoice == 'papel' && computerChoice == 2) {
        console.log("Ha ganado la maquina!")
        computerScore++
    }
}
// Variables
let humanScore = 0
let computerScore = 0
let rounds = parseInt(prompt('Ingrese el numero de intentos'))

for (let i = 1; i <= rounds; i++) {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}

if (humanScore > computerScore) {
    console.log(`Usted ha ganado con: ${humanScore} y la maquina ${computerScore}`)
}
else if (computerScore > humanScore) {
    console.log(`Usted ha perdido con: ${humanScore} y la maquina ${computerScore}`)
}
else {
    console.log(`Usted ha empatado con: ${humanScore} y la maquina ${computerScore}`)
}