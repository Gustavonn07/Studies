package udemy.java_foundations.section03;

public class u {

    // Sobrecarga
    // public static void print(char text) {
    //     System.out.println(text);
    // }
    //
    // public static void print(String text) {
    //     System.out.println(text);
    // }

    protected static <T> void print(T value) {
        System.out.println(value);
    }
}
