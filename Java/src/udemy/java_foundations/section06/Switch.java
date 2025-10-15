package udemy.java_foundations.section06;

import java.util.Random;

public class Switch {
    public static void main(String[] args) {
        Random random = new Random();
        int selectedNumber = random.nextInt(3) + 1;
        String answer;

        switch (selectedNumber) {
            case 1:
                answer = "Green";
                break;
            case 2:
                answer = "Blue";
                break;
            case 3:
                answer = "Red";
                break;
            default:
                answer = "Yellow";
                break;
        }

        System.out.println(answer);

        // String answer = switch (selectedNumber) {
        //     case 1 -> "Green";
        //     case 2 -> "Blue";
        //     case 3 -> "Red";
        //     default -> "Yellow";
        // };

    }
}
