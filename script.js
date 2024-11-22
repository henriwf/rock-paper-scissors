console.log("Hello World")
 
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#results");
const scores = document.querySelector("#scores");



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







function playGame(event){

    
    


   
        function playRound (humanChoice, computerChoice) {
            
            const clickedButton = event.target;
            

            if (clickedButton.id === "rock") {
                humanChoice = "rock";
            } else if (clickedButton.id === "paper"){
                humanChoice = "paper";
            } else if (clickedButton.id === "scissors"){
                humanChoice = "scissors";
            }
    
            
        
            if (humanChoice ==  computerChoice) {
                result.textContent = `It's a tie! Both chose ${humanChoice}`;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`

            }
        
            if (humanChoice == "rock" && computerChoice == "paper") {
                result.textContent = "You lose! Paper beats rock.";
                computerScore++;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
            }
        
            if (humanChoice == "rock" && computerChoice == "scissors") {
                result.textContent = "You win! Rock beats scissors.";
                humanScore++;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
            }
        
        
        
            if (humanChoice == "paper" && computerChoice == "rock") {
                result.textContent = "You win! Paper beats rock.";
                humanScore++;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
            }
        
            
        
            if (humanChoice == "paper" && computerChoice == "scissors") {
                result.textContent = "You lose! Scissors beat paper.";
                computerScore++;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
            }
        
        
        
            if (humanChoice == "scissors" && computerChoice == "rock") {
                result.textContent = "You lose! Rock beats scissors.";
                computerScore++;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
            }
        
            if (humanChoice == "scissors" && computerChoice == "paper") {
                result.textContent = "You win! Scissors beat paper.";
                humanScore++;
                scores.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
            }
        
            if (humanScore === 5) {
                result.textContent = "Game over! You win :)";
            } else if (computerScore === 5) {
                result.textContent = "Game over! You lose :(";
            }
            
        
        }

        const humanSelection = humanChoice;
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    

    if (humanScore > computerScore) {
        return "Congratulations! You win :)";
    } else if (humanScore < computerScore) {
        return "Oh no! You lost :(";
    } else {
        return "It's a tie!";
    }
}



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playGame)
})

