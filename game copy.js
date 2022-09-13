//Pseudo Code Outline for RPS

//define array for  choice of rock paper or scissors [r, p, s]
var choice = ["R", "P", "S"]

//define var for human choice 
var humanChoice = prompt("Enter R, P, or S")
console.log(humanChoice)
if (playerChoice="R") {
    if (randomItem="S") {
        alert("You won!")
    }    
} else if (playerChoice="P") {
    if (randomItem="R") {
        alert("You won!")
    }
} else if (playerChoice="S") {
    if (randomItem="P") {
        alert("You won!")
    }
    
}

//define var for computer choice
var computerChoice

//define var for human wins
var humanWins

//define var for human ties
var humanTies

//define var for human loses 
var humanLoses

//prompt (use method) humanChoice




//randomly choose computer choice
// var computerChoice = ["R", "P", "S"]
//   "R",
//   "P",
//   "S"

// var randomItem = computerChoice[Math.floor(Math.random(3)*choice.length)];
// console.log (randomItem)

function getRandom() {
    var randomIndex = Math.floor(Math.random() * choices.length);
    var result = choices[randomIndex];
    return result;
}

var computerChoice = getRandom()


//compare choices of human and computer
    //logic for comparing choices here
    //if humanChoice is p and computerChoice is r then ??

//alert player of comparison result (won, tied, lost round)

//alert player of stats (total wins, loses, ties)

//ask to play again?
    //restart game
//else 
    //stop the game