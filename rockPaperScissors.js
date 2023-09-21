
// function called getComputerChoice//

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
//get users input//
var userchoice = prompt ("choose rock, paper or scissors");

console.log(userchoice);


//if rock //
//if paper//
//if scissors//





// paper beats rock (1 beats 0)//
// scissors beats paper ( 2 beats 1)//
// rock beats scissors (0 beats 2) //


// choose at random between rock paper scissors and save//
// choose rock paper or scissors//

