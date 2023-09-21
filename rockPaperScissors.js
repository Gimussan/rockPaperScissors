
// function called getComputerChoice//
let computerChoiceInt = 0;
function getComputerChoice(max) {
    const number  = Math.floor(Math.random() * max)
    // if getComputerChoice = 0 then choice = rock//
    if ( number  %3 === 0) {
        return 'rock';
    }
    // if getComputerChoice = 1 then choice = paper//
    if ( number  %3 === 1) {
        return 'paper';
    }
    // if getComputerChoice = 2 then choice = scissors/

    return 'scissors';

}
console.log(getComputerChoice(3));


if (getComputerChoice.toLowerCase === "rock"){
    computerChoiceInt = 0
}
if (getComputerChoice.toLowerCase ===  "paper"){
    computerChoiceInt = 1
}
if (getComputerChoice.toLowerCase ===  "scissors"){
    computerChoiceInt = 2
}
console.log(computerChoiceInt);

//get users input//
var userchoice = prompt ("choose rock, paper or scissors");
let playerChoiceInt = 0;


//changing the str to a int value of 0 if paper//
if (userchoice.toLowerCase() === "rock") {
    playerChoiceInt = 0
}
//changing the str to a int value of 1 if paper//
if (userchoice.toLowerCase() === "paper") {
    playerChoiceInt = 1
}
//changing the str to a int value of 2 if paper//
if (userchoice.toLowerCase() === "scissors") {
    playerChoiceInt = 2
}
console.log(userchoice);
console.log(playerChoiceInt);













