var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9; //attempts slash tries remaining "LIVES"
var guessedLetters = [];
var letterToGuess = null;
//randomizes letter
function updateGuessesLeft() {
	document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
}

function updateLetterToGuess() {
	this.letterToGuess = this.abc[Math.floor(Math.random() * this.abc.length)];
}

function updateGuessesSoFar() {
	document.getElementById("guesses").innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
}

function reset() {
	guesses = 9;
	guessesLeft = 9;
	guessedLetters = [];
	updateGuessesLeft();
	updateLetterToGuess();
  	updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();
document.getElementById("wins").innerHTML = "Wins: 0";
document.getElementById("losses").innerHTML = "Losses: 0";

document.onkeyup = function(event) {
	guessesLeft--;
  	var userGuess = event.key;
  	console.log(letterToGuess);

  	guessedLetters.push(userGuess);
  	updateGuessesLeft();
  	updateGuessesSoFar();

    if(guessesLeft > 0) {
    	if (userGuess == letterToGuess) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            alert("Yes, you are psychic!");
            reset();
        }
    }
    else if(guessesLeft == 0) {
        // Then we will loss and we'll update the html to display the loss 
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("Sorry, you're not psychic, maybe try again?");
        // Then we'll call the reset. 
        reset();
    }
}