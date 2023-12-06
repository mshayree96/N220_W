let innerscore = 0;

function game() {
  const options = ['Rock', 'Paper', 'Scissor'];
  const player1 = options[Math.floor(Math.random() * 3)];
  const player2 = options[Math.floor(Math.random() * 3)];
  const winner = determineWinner(player1, player2);

  showChoices(player1, player2);
  displayResult(winner);
}

function showChoices(player1, player2) {
  let player1img = `<img src="./img/${player1}.png" alt="Player1">`;
  let player2img = `<img src="./img/${player2}.png" alt="Player2">`;

  document.getElementById('result').innerHTML = `${player1img} vs ${player2img}`;
}

function determineWinner(player1, player2) {
  if (
    (player1 === 'Rock' && player2 === 'Scissor') ||
    (player1 === 'Paper' && player2 === 'Rock') ||
    (player1 === 'Scissor' && player2 === 'Paper')
  ) {
    return 'Player 1';
  } else if (
    (player2 === 'Rock' && player1 === 'Scissor') ||
    (player2 === 'Paper' && player1 === 'Rock') ||
    (player2 === 'Scissor' && player1 === 'Paper')
  ) {
    return 'Player 2';
  } else {
    return "It's a Tie!!!!!";
  }
}

function displayResult(winner) {
  innerscore++;
  var resultP = (document.getElementById('gameResult').innerHTML += `<p> Game ${innerscore}:${winner} wins! Play again. </p>`);

  const gameResultTable = document.getElementById('gameResult');
  const newRow = gameResultTable.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.textContent = innerscore;
  cell2.textContent = winner;
}
