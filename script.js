'use strict';

// Creating a random whole number and scoreCount
var secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
var scoreCount = 20;
var highScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number!';
  }
  // When the guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // highscore
    function highscore(scoreCount) {
      if (scoreCount > highScore) {
        highScore = scoreCount;
        document.querySelector('.highscore').textContent = highScore;
      }
    }

    highscore(scoreCount);

    // to disappear after
    // document.querySelector('.guess').style.display = 'none';
    document.querySelector('.guess').style.visibility = 'hidden';
  }
  //   When guess is lower than random number
  else if (guess < secretNumber) {
    if (scoreCount > 1) {
      document.querySelector('.message').textContent = '📉 Low';
      scoreCount = scoreCount - 1;
      console.log(scoreCount);
      document.querySelector('.score').textContent = scoreCount;
    } else {
      scoreCount = scoreCount - 1;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😞 You Lost the game';

      document.querySelector('body').style.backgroundColor = 'red';
      // to disappear after
      // document.querySelector('.guess').style.display = 'none';
      document.querySelector('.guess').style.visibility = 'hidden';
    }
  }
  //   When guess is higher than random number
  else if (guess > secretNumber) {
    if (scoreCount > 1) {
      document.querySelector('.message').textContent = '📈 High';
      scoreCount = scoreCount - 1;
      console.log(scoreCount);
      document.querySelector('.score').textContent = scoreCount;
    } else {
      scoreCount = scoreCount - 1;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        '😞 You Lost, try again!';

      document.querySelector('body').style.backgroundColor = 'red';
      // to disappear after
      // document.querySelector('.guess').style.display = 'none';
      document.querySelector('.guess').style.visibility = 'hidden';
    }
  }
  //   default
  else {
    document.querySelector('.message').textContent = '🟡 Keep Guessing';
  }
});

// Reset
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreCount = 20;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.visibility = 'visible';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '20rem';
  document.querySelector('.score').textContent = scoreCount;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
