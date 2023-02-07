'use strict';

// Creating a random whole number and scoreCount
var secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
var scoreCount = 20;
var highscore = 0;

// functions
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setBGcolor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    displayMessage('🛑 No Number!');
  }

  // When the guess is correct
  else if (guess === secretNumber) {
    displayMessage('✅ Correct Number');
    setBGcolor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // highscore
    if (scoreCount > highscore) {
      highscore = scoreCount;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Input box to disappear after guess is correct
    document.querySelector('.guess').style.visibility = 'hidden';
  }

  // When guess is NOT correct
  else if (guess !== secretNumber) {
    if (scoreCount > 1) {
      displayMessage(guess < secretNumber ? '📉 Low' : '📈 High');
      scoreCount = scoreCount - 1;
      console.log(scoreCount);
      document.querySelector('.score').textContent = scoreCount;
    } else {
      scoreCount = scoreCount - 1;
      document.querySelector('.score').textContent = 0;
      displayMessage('😞 You Lost the game');

      setBGcolor('red');
      // to disappear after
      // document.querySelector('.guess').style.display = 'none';
      document.querySelector('.guess').style.visibility = 'hidden';
    }
  }

  //   default
  else {
    displayMessage('🟡 Keep Guessing');
  }
});

// Reset Button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreCount = 20;
  // console.log(secretNumber);
  setBGcolor('#222');
  document.querySelector('.guess').style.visibility = 'visible';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '20rem';
  document.querySelector('.score').textContent = scoreCount;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
