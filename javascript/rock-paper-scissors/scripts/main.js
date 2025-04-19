function getComputerChoice(){
    const computerChose = ["rock", "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random() * computerChose.length);
    return computerChose[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice(choice){
    const playerChoice = String(window.prompt("Choose between rock paper scissors"));
    return playerChoice;
}

console.log(getHumanChoice());

let humanScore=0;

let computerScore= 0 ;



function playGame(){
    function playRound(humanChoice, computerChoice) {
    

        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
    
        // Calculate scores for rock
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("Rock beats scissors! Human scores.");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("Rock beats scissors! Computer scores.");
            // Calculate scores for scissors
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("Scissors beats paper! Computer scores.");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("Scissors beats paper! Human scores.");
            // Calculate scores for paper
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("Paper beats rock! Human scores.");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("Paper beats rock! Computer scores.");
        } else {
            console.log("It's a tie!");
        }
    
        console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();