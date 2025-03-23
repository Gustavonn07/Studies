/**
 * Tabuleiro:
 *
 * [["", "", ""],
 *  ["", "", ""],
 *  ["", "", ""]]
 *
 * GANHAR:
 * - Linhas
 * board[0][0], board[0][1], board[0][2]
 * board[1][2], board[1][1], board[1][2]
 * board[2][0], board[2][1], board[2][2]
 *
 * - Colunas
 * board[0][0], board[1][0], board[2][0]
 * board[0][1], board[1][1], board[2][1]
 * board[0][2], board[1][2], board[2][2]
 *
 * - Diagonais
 * board[0][0], board[1][1], board[2][2]
 * board[0][2], board[1][1], board[2][0]
 *
 */

class Player {
  #team;
  #name;
  constructor(team, name) {
    if (typeof team !== "string") {
      throw new Error("O time deve ser uma string.");
    }
    if (!["X", "O"].includes(team.toUpperCase())) {
      throw new Error("O time deve ter valor 'X' ou 'O'.");
    }

    this.#team = team.toUpperCase();
    this.#name = name;
  }

  #teamType = {
    BLUE: "O",
    RED: "X",
  };

  getColor() {
    if (this.#team === this.#teamType.BLUE) {
      return "text-blue-400";
    }
    return "text-red-400";
  }

  get name() {
    return this.#name;
  }

  get team() {
    return this.#team;
  }
}

class TicTacToe {
  #board;
  #victory;
  constructor() {
    this.#board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.#victory = {
      player: null,
      isOver: false,
    };
  }

  #getVictoryConditions() {
    return [
      // Linhas
      [this.#board[0][0], this.#board[0][1], this.#board[0][2]],
      [this.#board[1][0], this.#board[1][1], this.#board[1][2]],
      [this.#board[2][0], this.#board[2][1], this.#board[2][2]],
      // Colunas
      [this.#board[0][0], this.#board[1][0], this.#board[2][0]],
      [this.#board[0][1], this.#board[1][1], this.#board[2][1]],
      [this.#board[0][2], this.#board[1][2], this.#board[2][2]],
      // Diagonais
      [this.#board[0][0], this.#board[1][1], this.#board[2][2]],
      [this.#board[0][2], this.#board[1][1], this.#board[2][0]],
    ];
  }

  getVictory(player) {
    return this.#getVictoryConditions().some((condition) =>
      condition.every((cell) => cell === player.team)
    );
  }

  makeMove(row, col, player) {
    if (!player instanceof Player) {
      throw new Error("Player deve ser uma instancia da classe Player");
    }
    if (this.#board[row][col] === "") {
      this.#board[row][col] = player.team;

      if (this.getVictory(player)) {
        this.#victory = {
          player: {
            name: player.name,
            team: player.team,
          },
          isOver: true,
        };
        return;
      }
      return true;
    }
    return false;
  }

  get victory() {
    return this.#victory;
  }
}
