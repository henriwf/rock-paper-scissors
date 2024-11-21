console.log("Hello World")
 

function getComputerChoice() {

    let computerChoice = Math.random();

    if (computerChoice < 0.333) {
        return "rock";
    }

    else if (computerChoice < 0.666) {
        return "paper";
    }

    else {
        return "scissors";
    }
}


function getHumanChoice() {
    let humanChoice = window.prompt("Rock, paper or scissors?")
    return humanChoice.toLowerCase(); 

}






function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        function playRound (humanChoice, computerChoice) {
    
            
        
            if (humanChoice ==  computerChoice) {
                console.log("It’s a tie! Both chose " + humanChoice)
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
        
            
            
            console.log(`Human Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        return "Congratulations! You win :)";
    } else if (humanScore < computerScore) {
        return "Oh no! You lost :(";
    } else {
        return "It's a tie!";
    }
}

console.log(playGame());

const buttonR = document.querySelector("#rock");
const buttonP = document.querySelector("#paper");
const buttonS = document.querySelector("#scissors");

