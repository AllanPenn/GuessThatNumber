// GUESS THAT NUMBER
// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number to be guessed
let randomNum;

// For storing the number of attempts that the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has value of true
while (restartGame){
  // Asks user to enter a number to set the upper bound for the random number
  rangeNum = prompt(`Please enter a maaximum number for the range:`);

  // Using parseInt to attempt to convert the user's response into a number value.
  rangeNum = parseInt(rangeNum);

  // Verifies the user's entry for the range number is a number greater than zero
  while (!rangeNum || rangeNum < 1){
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
  }

  // Creates the random number using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  // Prompts user to enter a number of attempts allowed
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  // Verifies the users entry for a number of attempts allowed is a number greater than zero
  while (!attempts || attempts < 1){
    attempts = parseInt(prompt(enterNumText));
  }

  // Asks user to enter a guess in the range that they set
  guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

  // Continues looping until the user guesses the correct number or runs out of attempts
  while (true){
    // Attempts to convert the user's guess into a number
    guess = parseInt(guess);

    // Verifies the user's guess is a number greater than zero as well as a number within the range set by the user
    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Removes an attempt
    attempts--;

    // Checks if the user guessed correctly. If so, the game ends
    if (guess === randomNum){
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;

      // Checks if user has nay attempts left. If not, then the game ends and the number is displayed to the user.
    } else if (attempts === 0){
      alert(`Sorry, but you have run out of attempts :(. The number was ${randomNum}`);
      break;

      // Checks if user's guess was too low and prompts user to guess again if that is the case
    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

      // The only other possibility is that the user's guess was too high so the user is prompted to guess again
    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }
  }
  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  // Loop continues until user submits a valid response
  while (true){
    // 
    if (playAgain === "N" || playAgain == "n"){
      // Alerts the user that the game is over and the game/loop does NOT restart
      alert("Thanks for playing!");
      restartGame = false;
      break;

      // Checks if the user's response is YES (AKA "Y" or "y")
    } else if (playAgain.toUpperCase() === "Y"){
      // The game restarts
      break;
    } else {
      playAgain = prompt(`Please enter Y or N`);
    }
  }
}