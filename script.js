//function computerPlay 

function playRound() {
    
    let playerSelection = prompt('Please, choose between: Rock, Paper and Scissors.');
    let computerSelection = Math.floor(Math.random()* 3);
    let roundResult;
    let wtfhappened;

    playerSelection = playerSelection.toLowerCase()
        
    switch(playerSelection) {
        case 'rock':
            playerSelection = 2;
            break;
        case 'paper':
            playerSelection = 4;
            break;
        case 'scissors':
            playerSelection = 8;
            break;
    }
    switch(computerSelection) {
        case 0:
            computerSelection = -2;
            break;
        case 1:
            computerSelection = -4;
            break;
        case 2:
            computerSelection = -8;
            break;
    }
    
    roundResult = (playerSelection + computerSelection)
    
    //trying to debug below why i'm only winning???
    
    alert(playerSelection)
    alert(computerSelection)
    alert(roundResult)

    let x = roundResult
    switch(true) {
        case (x = 0):
            roundResult = 'Even';
            break;
        case (2 <= x <= 4):
        case (x = -6):
            roundResult = 'You won!';
            break;
        case (-4 <= x <= -2):
        case (x = 6):
            roundResult = 'You lost!';
            break;
            
    }
    message = roundResult
    alert(message)

}