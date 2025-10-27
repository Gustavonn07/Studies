package com.section07.guessIt;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GuessItTest {

    private GuessIt game;
    private static final int GAME_RANDOMNESS_RETRIES = 80;

    private void sendWrongGuesses(int numberOfGuesses) {
        for(int i = 0; i < numberOfGuesses; i++) {
            game.guess(-1);
        }
    }

    @BeforeEach
    void setUp() {
        game = new GuessIt();
    }

    @Test
    public void testSimpleWinSituation() {
        int randomNumber = game.getRandomNumber();
        String message = game.guess(randomNumber);
        assertEquals("You got it", message);
    }

    @Test
    public void testOneWrongNegativeGuessSituation() {
        String message = game.guess(-5);
        assertEquals("You didn't get it", message);
    }

    @Test
    public void testOneWrongPositiveGuessSituation() {
        int randomNumber = game.getRandomNumber();
        String message = game.guess(randomNumber + 1);
        assertEquals("You didn't get it", message);
    }

    @Test
    public void testRandomNumberGenerator() {
        int[] randomNumberCount = new int[11];
        for(int counter = 0; counter < GAME_RANDOMNESS_RETRIES; counter++) {
            GuessIt game = new GuessIt();
            int randomNumber = game.getRandomNumber();
            randomNumberCount[randomNumber] = 1;
        }

        int sum = 0;
        for(int counter = 0; counter < 11; counter++) {
            sum += randomNumberCount[counter];
        }
        assertEquals(10, sum);
    }

    @Test
    public void testFourWrongGuesses() {
        sendWrongGuesses(3);
        String message = game.guess(-4);
        assertEquals("The game is over, you lost.", message);
    }

    @Test
    public void testThreeWrongGuessesAndOneCorrect() {
        sendWrongGuesses(3);
        String message = game.guess(game.getRandomNumber());
        assertEquals("You got it", message);
    }

    @Test
    public void testTwoWrongGuessesAndOneCorrect() {
        sendWrongGuesses(2);
        String message = game.guess(game.getRandomNumber());
        assertEquals("You got it", message);
    }

    @Test
    public void testGetTwoInGuessesCounter() {
        sendWrongGuesses(2);
        short guessesCounter = game.getGuessesCounter();
        assertEquals(2, guessesCounter);
    }

    @Test
    public void testMoreThenDefaultGuessesCounterLimit() {
        GuessIt game = new GuessIt(6);
        sendWrongGuesses(5);
        String message = game.guess(game.getRandomNumber());
        assertEquals("You got it", message);
    }
}
