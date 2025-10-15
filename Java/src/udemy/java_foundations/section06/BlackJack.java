package udemy.java_foundations.section06;

public class BlackJack {

    public static void main(String[] args) {
        String card = "jack";

        short currentTotalValue = 10;

        short currentValue = switch (card) {
            case "king", "queen", "jack" -> 10;
            case "ace" -> {
                if(currentTotalValue < 11) {
                    yield 11;
                } else {
                    yield 1;
                }
            }
            default -> Short.parseShort(card);
        };

        System.out.println("Current value: " + currentValue);
        System.out.println("Total value: " + currentTotalValue + currentValue);
    }
}
