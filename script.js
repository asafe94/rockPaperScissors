let playerOptLocked;
let computerOptLocked;
let winnerOptLocked;
let loserOptLocked;
let result;

//function chose random between 0-2 and interpret this as rock = 0, paper = 1 and scissors = 2.
let computerOptChoser = (computerOption = Math.floor(Math.random()* 3)) => {
	switch (computerOption) {
		case 0:
			computerOption = 'rock';
			computerOptLocked = computerOption;
			return computerOptLocked;
		case 1:
			computerOption = 'paper';
			computerOptLocked = computerOption;
			return computerOptLocked;
		case 2:
			computerOption = 'scissors';
			computerOptLocked = computerOption;
			return computerOptLocked;
}};
//function that asks the player an option, set it to lowercase, store the playerOption as playerOptLocked ,  also give an error alert if an invalid option is chosen.
let playerOptChoser = (playerOption) => {
	playerOption = prompt('Please, choose between: Rock, Paper and Scissors.').toLocaleLowerCase();
	if (playerOption === ('rock') || ('paper') || ('scissors')) {
		playerOptLocked = playerOption; 
		return playerOption;
	} else {
		alert('Please, select a valid option.');
}}
//function that select a result for player option vs computer option
let roundResult = (playerOption , computerOption = computerOptChoser()) => {
	if (playerOption === computerOption) {
		result = 'tie';
		return result;
	} else if ((playerOption === 'rock' && computerOption === 'scissors')
		|| (playerOption === 'scissors' && computerOption === 'paper')
		|| (playerOption === 'paper' && computerOption === 'rock')) {
		winnerOptLocked = playerOptLocked;
		loserOptLocked = computerOptLocked;
		result = 'You won!';
		return result;
	} else {
		winnerOptLocked = computerOptLocked;
		loserOptLocked = playerOptLocked;
		result = 'I won!';
		return result;
}} 




let loserOption = (winnerOption = winnerOptLocked) => {
	switch(winnerOption){
		case 'rock':
			return 'scissors'
		case 'scissors':
			return 'paper'
		case 'paper':
			return 'rock'
}}


let resultCondition = (winnerOption = winnerOptLocked) => {
	switch (winnerOption) {
		case 'rock':
			return 'blunts'
		case 'paper':
			return 'wraps'
		case 'scissors':
			return 'cuts'
}}


let fnlMsg = (playerOption = playerOptLocked, computerOption = computerOptLocked,
	 winnerOption = winnerOptLocked, loserOption = loserOptLocked, finalResult = result) => {
	let msg = "You have chosen the power of " + playerOption + 
	".\n I have chosen the power of " + computerOption + 
	".\n The logic's gods have spoken: " + winnerOption + " " + resultCondition(winnerOptLocked) + " " + loserOption + 
	".\n" + finalResult
		switch(result) {
			case 'You won!':
			case 'I won!':
				console.log("obvious")
				return msg
			case 'tie':
				msg = "You have chosen the power of " + playerOption + 
				".\n I have chosen the power of " + computerOption + 
				".\n The logic's gods have spoken: " + playerOption + " ties against " + computerOption + 
				".\n It's a " + finalResult + "."
				console.log("obvious")
				return msg
}}

//function that play the game using functions to input playerOption and computerOption
let playRound = (playerOption = playerOptChoser(), computerOption = computerOptChoser()) => {
	result = roundResult(playerOption, computerOption)
	return fnlMsg(playerOption, computerOption, winnerOptLocked, loserOptLocked, result)
}