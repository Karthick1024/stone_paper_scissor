let score = { wins: 0, loss: 0, Tie: 0 };

const pickComputerMove = () => {
  const options = ['rock', 'paper', 'scissor'];
  return options[Math.floor(Math.random() * options.length)];
};

const playermove = (playerOption) => {
  const computerOption = pickComputerMove();
  let result = '';

  if (playerOption === computerOption) {
    result = 'Tie';
    score.Tie++;
  } else if (
    (playerOption === 'rock' && computerOption === 'scissor') ||
    (playerOption === 'paper' && computerOption === 'rock') ||
    (playerOption === 'scissor' && computerOption === 'paper')
  ) {
    result = 'You Win!';
    score.wins++;
    triggerParticles('win');
  } else {
    result = 'You Lose!';
    score.loss++;
    triggerParticles('lose');
  }

  // Update the UI
  document.getElementById('result').textContent = `You chose ${playerOption}. Computer chose ${computerOption}. ${result}`;
  document.getElementById('points').textContent = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.Tie}`;
};

const reset = () => {
  score = { wins: 0, loss: 0, Tie: 0 };
  document.getElementById('result').textContent = 'Result: ';
  document.getElementById('points').textContent = 'Wins: 0, Losses: 0, Ties: 0';
};

// Create particle effect
const triggerParticles = (type) => {
  const particlesContainer = document.createElement('div');
  particlesContainer.id = 'particles';

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.background = type === 'win' ? 'gold' : 'red';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particlesContainer.appendChild(particle);
  }

  document.body.appendChild(particlesContainer);

  setTimeout(() => {
    particlesContainer.remove();
  }, 1500);
};
