package udemy.java_foundations.section03;

public class Contains {
    public static void main(String[] args) {
        String firstText = "Apple";
        String secondText = "PinApple";

        u.print(firstText.contains(secondText));
        u.print(secondText.contains(firstText));
    }
}
