var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var input = document.getElementById('guess-input').value;
  var guess = Number(input);
  var result = document.getElementById('guess-result');

  // Empty or invalid input
  if (!input || guess < 1 || guess > 100) {
    result.textContent = 'Please enter a number between 1 and 100!';
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    result.textContent = 'Too low! Try again. (Attempts: ' + attempts + ')';
  } else if (guess > secretNumber) {
    result.textContent = 'Too high! Try again. (Attempts: ' + attempts + ')';
  } else {
    result.textContent = '🎉 Correct! The number was ' + secretNumber + '. You got it in ' + attempts + ' attempts!';
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  }
}