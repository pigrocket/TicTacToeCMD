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