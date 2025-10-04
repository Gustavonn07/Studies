package udemy.java_foundations.section03;

public class Compare {
    public static void main(String[] args) {
        String firstText = "Apple";
        String secondText = "Banana";
        String thirdText = "apple";
        String fourthText = "Abacate";

        u.print(firstText.compareTo(secondText));
        u.print(firstText.compareTo(thirdText));
        u.print(firstText.compareToIgnoreCase(thirdText));
        u.print(firstText.compareTo(fourthText));
    }
}
