console.log("Hello World")
 


function getComputerChoice() {

    let computerChoice = Math.random();

    if (computerChoice < 0.333) {
        return "rock";
    }

    if (computerChoice > 0.333 && computerChoice < 0.666) {
        return "paper";
    }

    if (computerChoice > 0.666) {
        return "scissors";
    }
    console.log(computerChoice)
}


function getHumanChoice() {
    let humanChoice = window.prompt("Rock, paper or scissors?")
    return humanChoice.toLowerCase(); 

}



let humanScore = 0;

let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    

    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It’s a tie! Both chose rock.")
    }

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock.")
        computerScore++;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.")
        humanScore++;
    }



    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.")
        humanScore++;
    }

    if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It’s a tie! Both chose paper.")
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat paper.")
        computerScore++;
    }



    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.")
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat paper.")
        humanScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It’s a tie! Both chose rock.")
    }
    setTimeout(() => {
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }, 1000);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);