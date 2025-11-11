package com.gustavo.exercises.Chess;

public enum Line {
    EIGHT(8),
    SEVEN(7),
    SIX(6),
    FIVE(5),
    FOUR(4),
    THREE(3),
    TWO(2),
    ONE(1);

    private final int number;

    Line(int number) {
        this.number = number;
    }

    public int getNumber() {
        return number;
    }
}
