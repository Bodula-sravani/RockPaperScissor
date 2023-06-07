document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    const userSelections = document.querySelectorAll('.choices img');
    const resultText = document.getElementById('result');
    const resetBtn = document.getElementById('reset-btn');

    function generateComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
   
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }

    function handleUserSelection(e) {
      const userChoice = e.target.id;
      const computerChoice = generateComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
      resultText.innerHTML = `
        <p>You chose: ${userChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <h2>${result}</h2>
      `;
    }

    function resetResult() {
      resultText.innerHTML = '';
    }
  

    userSelections.forEach(function(selection) {
      selection.addEventListener('click', handleUserSelection);
    });
  
    resetBtn.addEventListener('click', resetResult);
  });
  
  