package com.gustavo.exercises.Chess;

public class Board {
    private String[][] board = new String[8][8];

    private String[][] createBoard() {
        for(Line row : Line.values()) {
            for(Column col : Column.values()) {
                board[row.ordinal()][col.ordinal()] = col.name().toLowerCase() + (row.getNumber());
            }
        }
        return board;
    }

    public void printBoard() {
        board = createBoard();
        for (String[] row : board ) {
            for (String cell : row) {
                System.out.print(cell + "\t");
            }
            System.out.println();
        }
    }

    public String[][] getBoard() {
        board = createBoard();
        return board;
    }

    public String getPosition(int i, int j) {
        String[][] board = getBoard();
        return board[i][j];
    }

    public static void main(String[] args) {
        Board board = new Board();
        System.out.println( board.getPosition(0,0));
    }
}
