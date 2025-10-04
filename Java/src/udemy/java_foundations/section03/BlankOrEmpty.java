package udemy.java_foundations.section03;

public class BlankOrEmpty {
    public static void main(String[] args) {
        String text = " ";
        // Length == 0 (Sem caractere)
        System.out.println(text.isEmpty());
        // Tem algum whitespace (espaço que não de para ver)
        System.out.println(text.isBlank());
    }
}
