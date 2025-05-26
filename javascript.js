const ties = document.querySelector('.score-ties');
const losses = document.querySelector('.score-losses');
const wins = document.querySelector('.score-wins');

const score = JSON.parse(localStorage.getItem('score')) 
|| { wins: 0, losses: 0, ties: 0,};

losses.innerHTML = score.losses;
wins.innerHTML = score.wins;
ties.innerHTML = score.ties;

function playerMove(playerChoice) {
  
  if(playerChoice === 'rock') {
    console.log(playerChoice);
  } else if(playerChoice === 'paper') {
    console.log(playerChoice);
  } else {
    console.log(playerChoice);
  }
  
}

function computerMove() {
  const computerChoiceNum = Math.random();
  let computerChoice;
  const computerChoiceImg = document.querySelector('.computer-choice');
  console.log(computerChoiceNum);
  if(computerChoiceNum < 1/3) {
    computerChoice = 'rock';
    computerChoiceImg.innerHTML = 
    '<img src="images/rock.svg">';
  } else 
  if(computerChoiceNum >= 1/3 && computerChoiceNum < 2/3) {
    computerChoice = 'paper';
    computerChoiceImg.innerHTML = 
    '<img src="images/paper.svg">';
  } else {
    computerChoice = 'scissor'
    computerChoiceImg.innerHTML = 
    '<img src="images/scissor.svg">';
  }
  return computerChoice;
}
 
function gameOutCome(playerChoice) {
  let computerChoice = computerMove();
  
  if(playerChoice === 'rock'){
    if(computerChoice === 'rock') {
      console.log('tie');
      document.querySelector('.computer-outcome').innerHTML = 'Tie';
      document.querySelector('.player-outcome').innerHTML = 'Tie';
      score.ties++;
      ties.innerHTML = score.ties;
    } else
    if(computerChoice === 'paper') {
      console.log('loss');
      document.querySelector('.computer-outcome').innerHTML = 'Win';
      document.querySelector('.player-outcome').innerHTML = 'Loss';
      score.losses++;
      losses.innerHTML = score.losses;
    } else {
      console.log('win');
      document.querySelector('.computer-outcome').innerHTML = 'Loss';
      document.querySelector('.player-outcome').innerHTML = 'Win';
      score.wins++;
      wins.innerHTML = score.wins;
    }
  } else 
  if(playerChoice === 'paper'){
    if(computerChoice === 'rock') {
      console.log('win');
      document.querySelector('.computer-outcome').innerHTML = 'Loss';
      document.querySelector('.player-outcome').innerHTML = 'Win';
      score.wins++;
      wins.innerHTML = score.wins;
    } else
    if(computerChoice === 'paper') {
      console.log('tie');
      document.querySelector('.computer-outcome').innerHTML = 'Tie';
      document.querySelector('.player-outcome').innerHTML = 'Tie';
      score.ties++;
      ties.innerHTML = score.ties;
    } else {
      console.log('loss');
      document.querySelector('.computer-outcome').innerHTML = 'Win';
      document.querySelector('.player-outcome').innerHTML = 'Loss';
      score.losses++;
      losses.innerHTML = score.losses;
    }
  } else {
    if(computerChoice === 'rock') {
      console.log('loss');
      document.querySelector('.computer-outcome').innerHTML = 'Win';
      document.querySelector('.player-outcome').innerHTML = 'Loss';
      score.losses++;
      losses.innerHTML = score.losses;
    } else
    if(computerChoice === 'paper') {
      console.log('win');
      document.querySelector('.computer-outcome').innerHTML = 'Loss';
      document.querySelector('.player-outcome').innerHTML = 'Win';
      score.wins++;
      wins.innerHTML = score.wins;
    } else {
      console.log('tie');
      document.querySelector('.computer-outcome').innerHTML = 'Tie';
      document.querySelector('.player-outcome').innerHTML = 'Tie';
      score.ties++;
      ties.innerHTML = score.ties;
    }
  }
  localStorage.setItem('score', JSON.stringify(score))
}

function resetScore() {
  score.losses=0;
  losses.innerHTML = score.losses;
  score.wins=0;
  wins.innerHTML = score.wins;
  score.ties=0;
  ties.innerHTML = score.ties;
  localStorage.removeItem('score');
}