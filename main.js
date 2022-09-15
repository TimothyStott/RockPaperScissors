//Define Choices
const POSSIBLECHOICES = ["Rock", "Paper", "Scissors"];

//Define Function to get random of 3
let getComputerChoice = () => POSSIBLECHOICES[Math.floor(Math.random() * POSSIBLECHOICES.length)]

//Define Function to play one round
function playGame(playerSelection, computerSelection){
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase())
    {
        return 0;
    }

    if (playerSelection.toUpperCase()=="ROCK" && computerSelection.toUpperCase()== "SCISSORS" || 
    playerSelection.toUpperCase()=="PAPER" && computerSelection.toUpperCase()== "ROCK" ||
    playerSelection.toUpperCase()=="SCISSORS" && computerSelection.toUpperCase()== "PAPER" )
    {
        return 1;
    } 

    return 2;
}

//Get winner of game
function getWinner(pWinCount, cWinCount){
    if(pWinCount > cWinCount)
    {
        return "You win the game. Go on and do great things.";
    }
    if(cWinCount>pWinCount){
        return "You didn't win this time, but it's just a game";
    }
    else{
        return "You all tied. That's kind of funny."
    }
}

//function to run a full game
function game(){

    let playerWinCount = 0;
    let computerWinCount = 0;
    
    for (let i = 0; i < 5; i++)
    {
        let winner = parseInt(playGame(prompt("enter choice: "),getComputerChoice()))
        switch(winner){
            case 0:
                console.log("Tie");
                break;
            case 1:
                console.log("You win.");
                playerWinCount++;
                break;
            case 2:
                console.log("Computer Wins");
                computerWinCount++;
                break;
            default:
                break;
        }        
    }

    console.log(getWinner(playerWinCount,computerWinCount));

}

//Test
game();




