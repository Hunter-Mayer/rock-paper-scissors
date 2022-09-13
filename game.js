var choices = ["r", "p", "s"]
var wins = 0
var losses = 0
var ties = 0
var result
var keepPlaying=true

while(keepPlaying) {
//prompt for human choice
var humanChoice = prompt("Choose r, p, or s")
console.log("Human Choice is ", humanChoice)

//prompt for random computer choice
var random = Math.floor(Math.random() * choices.length) //this will return you a 0-2
var computerChoice = choices[random] 
console.log("Computer Choice is ", computerChoice)

//comparing choices
if (humanChoice === computerChoice) {
    ties++ //increases ties stat by 1
    result = "tied."
} else if (
    humanChoice==="r" && computerChoice==="s" ||
    humanChoice==="p" && computerChoice==="r" ||
    humanChoice==="s" && computerChoice==="p" 
) {
    wins++ //increases wins stat by 1
    result= "won!"
} else {
    losses++ //increases losses stat by 1
    result = "lost."
}

alert ("You " + result) //alerts player of result of the comparison

alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties) // \n breaks a string on to a new line. This whole line displays the stats from the session

keepPlaying = confirm("Want to play again?")
}
