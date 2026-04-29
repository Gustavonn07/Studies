import { Player, TicTacToe } from "./components.js";

const buttonReset = document.getElementById("button-reset");
const boardCells = document.querySelectorAll("#board button");
let count = 0;

const p1 = new Player("X", "Jogador 01");
const p2 = new Player("O", "Jogador 02");

const game = new TicTacToe();

function updateBoard(board) {
  if (!Array.isArray(board)) {
    throw new Error("Board deve ser uma array!");
  }

  boardCells.forEach((cell) => {
    const row = Number(cell.getAttribute("data-row"));
    const col = Number(cell.getAttribute("data-col"));
    cell.innerText = board[row][col];
  });
}

boardCells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    const row = Number(e.target.getAttribute("data-row"));
    const col = Number(e.target.getAttribute("data-col"));
    let player = count % 2 === 0 ? p1 : p2;

    if (count % 2 === 0) {
      player = p1;
    }

    game.makeMove(row, col, player);
    updateBoard(game.board);
    count++;
    if (game.victory.isOver) {
      window.alert(`${game.victory.player.name} Venceu!`);
    }
  });
});

buttonReset.addEventListener("click", () => {
  game.resetBoard();
  updateBoard(game.board);
  count = 0;
});
