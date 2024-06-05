console.log("Hello World")
 


function getComputerChoice() {

    let computerChoice = Math.random();

    if (computerChoice < 0.333) {
        computerChoice = "rock"
    }

    if (computerChoice > 0.333 && computerChoice < 0.666) {
        computerChoice = "paper";
    }

    if (computerChoice > 0.666) {
        computerChoice = "scissors";
    }
    console.log(computerChoice)
}
getComputerChoice()

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, paper or scissors?").toLowerCase();

    console.log(humanChoice)
}
getHumanChoice()


let humanScore = 0;

let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    if (humanChoice == rock && computerChoice == rock) {
        console.log("It’s a tie! Both chose rock.")
    }

    if (humanChoice == rock && computerChoice == paper) {
        console.log("You lose! Paper beats rock.")
    }

    if (humanChoice == rock && computerChoice == scissors) {
        console.log("You win! Rock beats scissors.")
    }



    if (humanChoice == paper && computerChoice == rock) {
        console.log("You win! Paper beats rock")
    }

    if (humanChoice == paper && computerChoice == paper) {
        console.log("It’s a tie! Both chose paper.")
    }

    if (humanChoice == paper && computerChoice == scissors) {
        console.log("You lose! Scissors beat rock.")
    }



    if (humanChoice == scissors && computerChoice == rock) {
        console.log("You lose! Rock beats scissors.")
    }

    if (humanChoice == scissors && computerChoice == paper) {
        console.log("You win! Scissors beat paper")
    }

    if (humanChoice == scissors && computerChoice == scissors) {
        console.log("It’s a tie! Both chose rock.")
    }



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);