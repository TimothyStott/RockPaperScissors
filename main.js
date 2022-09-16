//Define Choices and needed variables
const POSSIBLECHOICES = ["Rock", "Paper", "Scissors"];
let playerWinCount = 0;
let computerWinCount = 0;   

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

//Checks to see if there has been a winner
let checkforWinner = () => {
    if (playerWinCount == 5 || computerWinCount == 5){
        return true;
    }
    else{
        return false;
    } 
};


//function to run a full game
function game(e){   
    let winner = parseInt(playGame(e.target.id,getComputerChoice()))
    switch(winner){
        case 0:
            //alert("shit...you tied")
            break;
        case 1:
            playerWinCount++;
            break;
        case 2:
            computerWinCount++;
            break;
        default:
            break;
    }   
      addRoundInfo();
    }



//function to add round info to div
function addRoundInfo(){

    const mainContainer = document.querySelector(".mainContain");
    const roundInfo = document.createElement("p");
    roundInfo.innerText = `Player round win count: ${playerWinCount} | Computer round win Count: ${computerWinCount}`;
    mainContainer.appendChild(roundInfo);
    //reset after win.
    if(checkforWinner())
    {
        const mainContainer = document.querySelector(".mainContain");
        const roundInfo = document.createElement("p");
        roundInfo.innerText = "There was a winner. I'm going to reset it now."
        mainContainer.appendChild(roundInfo);
        playerWinCount=0;
        computerWinCount=0;
    }

        

}

//function to remove round info from div
function removeRoundInfo(){
    const mainContainer = document.querySelector(".mainContain");
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    playerWinCount=0;
    computerWinCount=0;
}


//add eventlistener to all  play buttons
const btns = document.querySelectorAll(".playButton");
btns.forEach(btn => btn.addEventListener('click', game));

const clearBtns = document.querySelector("#clearBtn");
clearBtns.addEventListener('click',removeRoundInfo);







