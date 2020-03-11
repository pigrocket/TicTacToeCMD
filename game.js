const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'q') {
    process.exit();
  }

  if (key.name === 'b') {
    state.gameStarted = true;

  }

  if (!state.gameStarted) {
    return;
  }

  if (Number(key.name) > 0 && Number(key.name) < 10) {
    let cell = Number(key.name);
    move(cell);
  }
});

const state = {
  "gameStarted": false,
  "grid": [[0,0,0], [0,0,0], [0,0,0]],
  "playerturn": 'one'
}

const checkForWinner = (grid) => {
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]) {
      winner(state.playerturn)
    }
  }
  for (let i = 0; i < 3; i++) {
    if (grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i]) {
      winner(state.playerturn)
    }
  }
  if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
    winner(state.playerturn)
  }
  if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {
    winner(state.playerturn)
  }
}

const winner = (player) => {
  process.stdout.write('\n Player ' + state.playerturn + ' wins!')
  process.exit();
}

const drawGrid = (grid) => {

}













const init = () => {

  process.stdout.write(`
    Hello! Welcome to Tic Tac Toe.

    Press [Q] anytime to quit.

    Press [B] to begin.

  `);

}

init();