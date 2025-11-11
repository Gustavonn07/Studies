package com.gustavo.exercises.Alphabet;

import java.util.ArrayList;
import java.util.List;

public enum Alphabet {
    A(1),
    B(2),
    C(3),
    D(4),
    E(5),
    F(6),
    G(7),
    H(8),
    I(9),
    J(10),
    K(11),
    L(12),
    M(13),
    N(14),
    O(15),
    P(16),
    Q(17),
    R(18),
    S(19),
    T(20),
    U(21),
    V(22),
    W(23),
    X(24),
    Y(25),
    Z(26);

    private final int position;

    Alphabet(int position) {
        this.position = position;
    }

    private static Alphabet convertChar(char letter) {
        return Alphabet.valueOf(String.valueOf(Character.toUpperCase(letter)));
    }

    private static Alphabet convertInt(int position) {
        return Alphabet.values()[position - 1];
    }

    public static List<Integer> getPositions(char[] letterArray) {
        List<Integer> positions = new ArrayList<Integer>();
        for (char letter : letterArray) {
            positions.add(convertChar(letter).position);
        }
        return positions;
    }

    public static List<Alphabet> getLetters(int[] positionArray) {
        List<Alphabet> alphabetList = new ArrayList<Alphabet>();
        for (int position : positionArray) {
            alphabetList.add(convertInt(position));
        }
        return alphabetList;
    }

}
