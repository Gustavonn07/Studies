package udemy.java_foundations.section06;

import java.util.Random;

public class GuessIt {

    public static int parserInt(String value) {
        if(value.isEmpty()) return 0;
        return Integer.parseInt(value);
    }

    public static void main(String[] args) {
        int randomNum = new Random().nextInt(10) + 1;
        String guessedNumberInText = "";
        while (!(randomNum == parserInt(guessedNumberInText))){
            guessedNumberInText = System.console().readLine("Please guess a number between 1 and 10 inclusively: ");
            if(guessedNumberInText.matches("\\d{1,2}")) {
                System.out.println("You didn't got it!");
            }
        }
        System.out.printf("The random number was %d. You got it!%n", randomNum);
    }
}
