function ticTacToe(input) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player = "X";

  for (let line of input) {
    [currRow, currCol] = line.split(" ").map(Number);

    if (board[currRow][currCol] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    board[currRow][currCol] = player;

    //check horizontal and vertical
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      } else if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        console.log(`Player ${player} wins!`);
        printMatrix();
        return;
      }
    }

    //check left to right
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      return;
    }

    //check right to left
    else if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      return;
    }

    let theresFalse = false;

    for (let row = 0; row < board.length; row++) {
      if (board[row].includes(false)) {
        theresFalse = true;
      }
    }

    if (!theresFalse) {
      console.log("The game ended! Nobody wins :(");
      printMatrix();
      return;
    }

    player = player === "X" ? "O" : "X";
  }

  function printMatrix() {
    for (let row = 0; row < board.length; row++) {
      console.log(board[row].join("\t"));
    }
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
