package com.section07.guessIt;

import java.util.Random;
import java.util.Scanner;

public class GuessIt {
    private final int randomNumber = new Random().nextInt(10) + 1;
    private short guessesCounter = 0;
    private final int limitNumberOfTries;

    public GuessIt() {
        this(4);
    }

    public GuessIt(int limitNumberOfTries) {
        this.limitNumberOfTries = limitNumberOfTries;
    }

    public String guess(int guessedNumber) {
        guessesCounter++;
        if(guessesCounter >= limitNumberOfTries && guessedNumber != getRandomNumber()) {
            return "The game is over, you lost.";
        }
        return guessedNumber == randomNumber ? "You got it" : "You didn't get it";
    }

    public int getRandomNumber() {
        return randomNumber;
    }

    public short getGuessesCounter() {
        return guessesCounter;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        GuessIt game = new GuessIt();
        boolean continueLoop = true;
        do {
            System.out.println("Enter a number: ");
            int input = scanner.nextInt();
            String output = game.guess(input);
            if (output.contains("You got it") || output.contains("over")) {
                continueLoop = false;
            }
            System.out.println(output);
        } while (continueLoop);
    }
}
